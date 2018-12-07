import THREE from "../libs/three.min";

const getDirection = (x1, y1, x2, y2) => {
  // might be negative:
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
  // correct, positive angle:
  return (angle + 360) % 360;
};

class DieBox {
  constructor(container) {
    this.container = container;
    this.cw = container.clientWidth / 2;
    this.ch = container.clientHeight / 2;

    this.w = this.cw;
    this.h = this.ch;

    this.aspect = Math.min(this.cw / this.w, this.ch / this.h);
    this._scale = Math.sqrt(this.w * this.w + this.h * this.h) / 13;

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    this.renderer.setSize(this.cw * 2, this.ch * 2);

    this.renderer.setClearColor(0x000000, 0);

    this.dice = [];
    this.scene = new THREE.Scene();

    container.appendChild(this.renderer.domElement);

    const wh = Math.min(this.cw, this.ch) / this.aspect / Math.tan(10 * Math.PI / 180);
    this.camera = new THREE.PerspectiveCamera(20, this.cw / this.ch, 1, wh * 1.3);
    this.camera.position.z = wh;

    const ambientLight = new THREE.AmbientLight(0xf0f0f0);
    this.scene.add(ambientLight);
    const mw = Math.max(this.w, this.h);
    const light = new THREE.SpotLight(0xf0f0f0);
    light.position.set(-mw * 2, mw / 2, mw * 2);
    light.target.position.set(0, 0, 0);

    this.scene.add(light);

    container.addEventListener('click', (ev) => {
      const die = this.searchDieByMouse(ev);
      die && die.onClick()
    });

    container.addEventListener('contextmenu', (ev) => {
      const die = this.searchDieByMouse(ev);
      die && die.onRightClick();
    });

    this.renderer.render(this.scene, this.camera);
  };

  searchDieByMouse = (ev) => {
    const clickCube = new THREE.Mesh( new THREE.CubeGeometry( 5, 5, 5 ), new THREE.MeshNormalMaterial() );
    const rect = ev.target.getBoundingClientRect();
    const x = ev.clientX - rect.left - this.w;
    const y = (ev.clientY - rect.top - this.h) * -1;
    clickCube.position.x = x;
    clickCube.position.y = y;
    const clickBox = new THREE.Box3().setFromObject(clickCube);
    return this.dice.find(die => new THREE.Box3().setFromObject(die).containsBox(clickBox));
  };

  drawSelector(dice) {
    for (let i = 0; i < dice.length; ++i) {
      this.dice.push(dice[i]);

      this.scene.add(dice[i]);
    }

    this.renderer.render(this.scene, this.camera);
  };

  render() {
    this.renderer.render(this.scene, this.camera);
  };
}


export default DieBox
