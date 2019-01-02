export default (scaleDroneToken, roomId) => {
  const eventLog = [];
  const subscribers = {};
  let isOpen = false;

  const promise = new Promise((resolve, reject) => {
    const drone = new ScaleDrone(scaleDroneToken);
    // Scaledrone room name needs to be prefixed with 'observable-'
    const roomName = `observable-${roomId}`;
    // Scaledrone room used for signaling
    let room;

    const configuration = {
      iceServers: [
        {
          url: 'stun:stun.l.google.com:19302'
        }
      ]
    };
    // RTCPeerConnection
    let peerConnection;
    // RTCDataChannel
    let dataChannel;

    // Wait for Scaledrone signalling server to connect
    drone.on('open', error => {
      if (error) {
        eventLog.push(error);
        return console.error(error);
      }
      room = drone.subscribe(roomName);
      room.on('open', error => {
        if (error) {
          eventLog.push(error);
          return console.error(error);
        }
        eventLog.push('Connected to signaling server');
        console.log('Connected to signaling server');
      });
      // We're connected to the room and received an array of 'members'
      // connected to the room (including us). Signaling server is ready.
      room.on('members', members => {
        if (members.length >= 3) {
          return alert('The room is full');
        }
        // If we are the second user to connect to the room we will be creating the offer
        const isOfferer = members.length === 2;
        startWebRTC(isOfferer);
      });
    });

    // Send signaling data via Scaledrone
    function sendSignalingMessage(message) {
      drone.publish({
        room: roomName,
        message
      });
    }

    function startWebRTC(isOfferer) {
      eventLog.push(`Starting WebRTC in as${isOfferer}` ? 'offerer' : 'waiter');
      console.log('Starting WebRTC in as', isOfferer ? 'offerer' : 'waiter');
      peerConnection = new RTCPeerConnection(configuration);

      // 'onicecandidate' notifies us whenever an ICE agent needs to deliver a
      // message to the other peer through the signaling server
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          sendSignalingMessage({ candidate: event.candidate });
        }
      };

      if (isOfferer) {
        // If user is offerer let them create a negotiation offer and set up the data channel
        peerConnection.onnegotiationneeded = () => {
          peerConnection.createOffer(localDescCreated, error => {
            console.error(error);
            eventLog.push(error);
          });
        };
        dataChannel = peerConnection.createDataChannel('chat');
        setupDataChannel();
      } else {
        // If user is not the offerer let wait for a data channel
        peerConnection.ondatachannel = event => {
          dataChannel = event.channel;
          setupDataChannel();
        };
      }

      startListentingToSignals();
    }

    function startListentingToSignals() {
      // Listen to signaling data from Scaledrone
      room.on('data', (message, client) => {
        // Message was sent by us
        if (client.id === drone.clientId) {
          return;
        }
        if (message.sdp) {
          // This is called after receiving an offer or answer from another peer
          peerConnection.setRemoteDescription(
            new RTCSessionDescription(message.sdp),
            () => {
              console.log(
                'pc.remoteDescription.type',
                peerConnection.remoteDescription.type
              );
              eventLog.push(
                `pc.remoteDescription.type ${
                  peerConnection.remoteDescription.type
                }`
              );
              // When receiving an offer lets answer it
              if (peerConnection.remoteDescription.type === 'offer') {
                console.log('Answering offer');
                eventLog.push('Answering offer');
                peerConnection.createAnswer(localDescCreated, error =>
                  console.error(error)
                );
              }
            },
            error => {
              eventLog.push(error);
              console.error(error);
            }
          );
        } else if (message.candidate) {
          // Add the new ICE candidate to our connections remote description
          peerConnection.addIceCandidate(
            new RTCIceCandidate(message.candidate)
          );
        }
      });
    }

    function localDescCreated(desc) {
      peerConnection.setLocalDescription(
        desc,
        () => sendSignalingMessage({ sdp: peerConnection.localDescription }),
        error => {
          eventLog.push(error);
          console.error(error);
        }
      );
    }

    // Hook up data channel event handlers
    function setupDataChannel() {
      dataChannel.onopen = () => {
        eventLog.push('Connection open');
        if (dataChannel.readyState === 'open') {
          eventLog.push('WebRTC data channel is now open');
          isOpen = true;
          resolve({
            publish: data => {
              if (isOpen) {
                dataChannel.send(JSON.stringify(data));
              }
            },
            subscribe: (name, callback) => {
              if (subscribers[name]) {
                throw Error('Subscription with this name already exists');
              }

              subscribers[name] = callback;
              return () => {
                delete subscribers[name];
              };
            },
            events: () => eventLog,
            close: () => {
              dataChannel.close();
              drone.close();
              room.unsubscribe();
            }
          });
        }
      };
      dataChannel.onclose = () => {
        eventLog.push('Connection closed');
        isOpen = false;
      };
      dataChannel.onmessage = event =>
        Object.values(subscribers).forEach(callback => {
          callback(JSON.parse(event.data));
        });
    }
  });

  return { promise, events: () => eventLog };
};
