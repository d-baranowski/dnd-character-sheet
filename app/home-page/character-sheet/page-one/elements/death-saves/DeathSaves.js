import React from 'react';
import {connect} from 'react-redux';
import {modulateDeathSaves} from './state/deathSavesActions';

class DeathSaves extends React.PureComponent {
  state = {
    hovered: "",
  };

  onMouseOver = (element) => {
    this.setState({
      hovered: element
    })
  };

  onMouseLeave = () => {
    this.setState({
      hovered: undefined
    })
  };

  render() {
    return (
      <g transform="translate(0, -75)">
        <path id="DeathSavesFill" d="M515.684 426.777v52.091l-5.6 5.6h-91.836l-5.613-5.6v-52.09l5.613-5.614h91.836z" fill="#fff" />
        <path id="DeathSavesBorder" d="M510.14805796 419.93759016C510.14805796 419.93759016 418.14828796 419.93759016 418.14828796 419.93759016C418.14828796 419.93759016 411.465638 426.62157345 411.465638 426.62157345C411.465638 426.62157345 411.465638 479.0147758 411.465638 479.0147758C411.465638 479.0147758 418.14828796 485.69742576 418.14828796 485.69742576C418.14828796 485.69742576 510.14805796 485.69742576 510.14805796 485.69742576C510.14805796 485.69742576 516.83204125 479.0147758 516.83204125 479.0147758C516.83204125 479.0147758 516.83204125 426.62157345 516.83204125 426.62157345C516.83204125 426.62157345 510.14805796 419.93759016 510.14805796 419.93759016M514.9987125 427.38157155C514.9987125 427.38157155 514.9987125 432.5482253 514.9987125 432.5482253C514.45471386 430.91889604 513.68271579 429.18156705 512.60005183 427.54023782C512.60005183 427.54023782 512.60005183 427.44557139 512.60005183 427.44557139C512.60005183 427.44557139 512.53871865 427.44557139 512.53871865 427.44557139C510.9987225 425.14291048 508.82939459 423.05358237 505.77873555 421.77091891C505.77873555 421.77091891 509.38805986 421.77091891 509.38805986 421.77091891C509.38805986 421.77091891 514.9987125 427.38157155 514.9987125 427.38157155M503.19607534 483.86409701C503.19607534 483.86409701 425.06693733 483.86409701 425.06693733 483.86409701C421.58294604 483.02143245 418.79228635 481.10277058 416.69762492 478.16011127C416.69762492 478.16011127 416.69762492 427.50690457 416.69762492 427.50690457C418.5189537 424.95357762 421.19094702 422.73358317 425.10027058 421.77091891C425.10027058 421.77091891 503.22940859 421.77091891 503.22940859 421.77091891C506.71473321 422.61358347 509.50405957 424.53091201 511.60005433 427.47490465C511.60005433 427.47490465 511.60005433 478.12811135 511.60005433 478.12811135C509.77872555 480.6814383 507.10673223 482.90009942 503.19607534 483.86409701M413.29896675 435.57621773C413.70296574 433.68688912 414.42296394 431.334895 415.69896075 429.07890064C415.69896075 429.07890064 415.69896075 476.5747819 415.69896075 476.5747819C415.47496131 476.17878289 415.2389619 475.8014505 415.03762907 475.37745156C414.16029793 473.53078951 413.62696593 471.67612748 413.29896675 470.12413136C413.29896675 470.12413136 413.29896675 435.57621773 413.29896675 435.57621773M512.60005183 429.05890069C512.82271794 429.4548997 513.05871735 429.83089876 513.26005018 430.25623103C514.13604799 432.10289308 514.67071332 433.95755511 514.9987125 435.50955123C514.9987125 435.50955123 514.9987125 470.05613153 514.9987125 470.05613153C514.59471351 471.9481268 513.87471531 474.30012092 512.60005183 476.55611528C512.60005183 476.55611528 512.60005183 429.05890069 512.60005183 429.05890069M418.90961939 421.77091891C418.90961939 421.77091891 422.5189437 421.77091891 422.5189437 421.77091891C419.46828466 423.05358237 417.29895675 425.14291048 415.7589606 427.44557139C415.7589606 427.44557139 415.69762742 427.44557139 415.69762742 427.44557139C415.69762742 427.44557139 415.69762742 427.53890449 415.69762742 427.53890449C414.61363013 429.18156705 413.84163206 430.91889604 413.29896675 432.5482253C413.29896675 432.5482253 413.29896675 427.38157155 413.29896675 427.38157155C413.29896675 427.38157155 418.90961939 421.77091891 418.90961939 421.77091891M413.29896675 478.2547777C413.29896675 478.2547777 413.29896675 473.08679062 413.29896675 473.08679062C413.84163206 474.71611988 414.61363013 476.45344887 415.69896075 478.0947781C415.69896075 478.0947781 415.69896075 478.1881112 415.69896075 478.1881112C415.69896075 478.1881112 415.7589606 478.1881112 415.7589606 478.1881112C417.29895675 480.49210544 419.46828466 482.58143355 422.5189437 483.86409701C422.5189437 483.86409701 418.90961939 483.86409701 418.90961939 483.86409701C418.90961939 483.86409701 413.29896675 478.2547777 413.29896675 478.2547777M509.38805986 483.86409701C509.38805986 483.86409701 505.77873555 483.86409701 505.77873555 483.86409701C508.82939459 482.58143355 510.9987225 480.49077211 512.53871865 478.18944453C512.53871865 478.18944453 512.60005183 478.18944453 512.60005183 478.18944453C512.60005183 478.18944453 512.60005183 478.0947781 512.60005183 478.0947781C513.68271579 476.45344887 514.45471386 474.71611988 515.00004583 473.08679062C515.00004583 473.08679062 515.00004583 478.2547777 515.00004583 478.2547777C515.00004583 478.2547777 509.38805986 483.86409701 509.38805986 483.86409701" />
        <path id="DeathSavesCircles" d="M501.62941259 429.52556619C498.39342068 429.52556619 495.75742727 432.00955998 495.45076137 435.16555209C495.45076137 435.16555209 490.66010668 435.16555209 490.66010668 435.16555209C490.35344078 432.00955998 487.71744737 429.52556619 484.48145546 429.52556619C481.24546355 429.52556619 478.60947014 432.00955998 478.30280424 435.16555209C478.30280424 435.16555209 473.51214955 435.16555209 473.51214955 435.16555209C473.20548365 432.00955998 470.56949024 429.52556619 467.33349833 429.52556619C463.888988922 429.528505741 461.097189566 432.319708559 461.09351393 435.76421726C461.097188307 439.208942359 463.888773231 442.000527283 467.33349833 442.00420166C470.03349158 442.00420166 472.31615254 440.27087266 473.18281704 437.86554534C473.18281704 437.86554534 478.63347008 437.86554534 478.63347008 437.86554534C479.50013458 440.27087266 481.78279554 442.00420166 484.48145546 442.00420166C487.18144871 442.00420166 489.46277634 440.27087266 490.33077417 437.86554534C490.33077417 437.86554534 495.78009388 437.86554534 495.78009388 437.86554534C496.64675838 440.27087266 498.92941934 442.00420166 501.62941259 442.00420166C505.07361698 441.999792681 507.864390701 439.208422513 507.86806366 435.76421726C507.865122959 432.31918785 505.07310867 429.527173561 501.62807926 429.52423286M467.33349833 440.80687132C464.550256621 440.803197165 462.295115739 438.547459843 462.2921776 435.76421726C462.295114123 432.981494349 464.549444031 430.725971674 467.332165 430.7215632C470.11614396 430.724501341 472.372478233 432.980239174 472.37615239 435.76421726C472.372479792 438.547675537 470.116956607 440.803198722 467.33349833 440.80687132M473.36814991 437.26688017C473.44148306 436.97354757 473.48281629 436.67088166 473.51214955 436.36288243C473.51214955 436.36288243 478.30280424 436.36288243 478.30280424 436.36288243C478.3321375 436.66954833 478.37347073 436.97354757 478.44680388 437.26688017C478.44680388 437.26688017 473.36814991 437.26688017 473.36814991 437.26688017M484.48145546 440.80687132C481.697997183 440.803198722 479.442473998 438.547675537 479.4388014 435.76421726C479.442473998 432.980758983 481.697997183 430.725235798 484.48145546 430.7215632C487.264913737 430.725235798 489.520436922 432.980758983 489.52410952 435.76421726C489.520436922 438.547675537 487.264913737 440.803198722 484.48145546 440.80687132M490.51610704 437.26688017C490.58944019 436.97354757 490.63077342 436.67088166 490.66010668 436.36288243C490.66010668 436.36288243 495.45076137 436.36288243 495.45076137 436.36288243C495.48009463 436.66954833 495.52142786 436.97354757 495.59476101 437.26688017C495.59476101 437.26688017 490.51610704 437.26688017 490.51610704 437.26688017M501.62941259 440.80687132C498.845954313 440.803198722 496.590431128 438.547675537 496.58675853 435.76421726C496.590431128 432.980758983 498.845954313 430.725235798 501.62941259 430.7215632C504.412870867 430.725235798 506.668394052 432.980758983 506.67206665 435.76421726C506.668394052 438.547675537 504.412870867 440.803198722 501.62941259 440.80687132M501.62941259 449.52418286C498.39342068 449.52418286 495.75742727 452.00817665 495.45076137 455.16550209C495.45076137 455.16550209 490.66010668 455.16550209 490.66010668 455.16550209C490.35344078 452.00817665 487.71744737 449.52551619 484.48145546 449.52551619C481.24546355 449.52551619 478.60947014 452.00817665 478.30280424 455.16550209C478.30280424 455.16550209 473.51214955 455.16550209 473.51214955 455.16550209C473.20548365 452.00817665 470.56949024 449.52551619 467.33349833 449.52551619C463.889508791 449.528454434 461.097924279 452.318845961 461.09351393 455.76283393C461.097188307 459.207559029 463.888773231 461.999143953 467.33349833 462.00281833C470.03349158 462.00281833 472.31615254 460.26948933 473.18281704 457.86416201C473.18281704 457.86416201 478.63347008 457.86416201 478.63347008 457.86416201C479.50013458 460.26948933 481.78279554 462.00281833 484.48145546 462.00281833C487.18144871 462.00281833 489.46277634 460.26948933 490.33077417 457.86416201C490.33077417 457.86416201 495.78009388 457.86416201 495.78009388 457.86416201C496.64675838 460.26948933 498.92941934 462.00281833 501.62941259 462.00281833C505.07361698 461.998409351 507.864390701 459.207039183 507.86806366 455.76283393C507.864388024 452.318325229 505.072588668 449.527122411 501.62807926 449.52418286M467.33349833 460.80548799C464.550256621 460.801813835 462.295115739 458.546076513 462.2921776 455.76283393C462.295114123 452.980111019 464.549444031 450.724588344 467.332165 450.72017987C470.11614396 450.723118011 472.372478233 452.978855844 472.37615239 455.76283393C472.372479792 458.546292207 470.116956607 460.801815392 467.33349833 460.80548799M473.36814991 457.26549684C473.44148306 456.97216424 473.48281629 456.66949833 473.51214955 456.3614991C473.51214955 456.3614991 478.30280424 456.3614991 478.30280424 456.3614991C478.3321375 456.66949833 478.37347073 456.97216424 478.44680388 457.26549684C478.44680388 457.26549684 473.36814991 457.26549684 473.36814991 457.26549684M484.48145546 460.80548799C481.697997183 460.801815392 479.442473998 458.546292207 479.4388014 455.76283393C479.442473998 452.979375653 481.697997183 450.723852468 484.48145546 450.72017987C487.264913737 450.723852468 489.520436922 452.979375653 489.52410952 455.76283393C489.520436922 458.546292207 487.264913737 460.801815392 484.48145546 460.80548799M490.51610704 457.26549684C490.58944019 456.97216424 490.63077342 456.66949833 490.66010668 456.3614991C490.66010668 456.3614991 495.45076137 456.3614991 495.45076137 456.3614991C495.48009463 456.66949833 495.52142786 456.97216424 495.59476101 457.26549684C495.59476101 457.26549684 490.51610704 457.26549684 490.51610704 457.26549684M501.62941259 460.80548799C498.845954313 460.801815392 496.590431128 458.546292207 496.58675853 455.76283393C496.590431128 452.979375653 498.845954313 450.723852468 501.62941259 450.72017987C504.412870867 450.723852468 506.668394052 452.979375653 506.67206665 455.76283393C506.668394052 458.546292207 504.412870867 460.801815392 501.62941259 460.80548799" />

        <path
          fill={this.props.success >= 1 ? "green" : "white"}
          id="DeathSaveSuccessOne"
          d="m 465.78545,440.48868 c -0.85273,-0.30971 -1.47662,-0.73492 -2.14681,-1.46313 -0.93673,-1.01784 -1.16805,-1.66061 -1.16805,-3.24568 0,-1.20497 0.0403,-1.4308 0.37866,-2.11975 1.84649,-3.76019 7.20842,-3.75849 8.97151,0.003 0.31501,0.67205 0.36011,0.93715 0.36011,2.11691 0,1.19437 -0.0419,1.43402 -0.3665,2.0949 -0.46655,0.94998 -1.44116,1.92629 -2.38283,2.38701 -0.93492,0.45741 -2.70766,0.56773 -3.64609,0.2269 z" />

        <path
          fill={this.props.success >= 2 ? "green" : "white"}
          id="DeathSaveSuccessTwo"
          d="m 483.01649,440.52233 c -1.40214,-0.52316 -2.45571,-1.47631 -3.06265,-2.77073 -0.30648,-0.65363 -0.35513,-0.93428 -0.3535,-2.03916 0.002,-1.1169 0.0487,-1.37702 0.36716,-2.02813 1.78747,-3.65513 6.96122,-3.8312 8.83792,-0.30077 1.36817,2.57377 0.39342,5.58687 -2.22118,6.86608 -0.61338,0.3001 -0.98371,0.38012 -1.91746,0.4143 -0.74548,0.0273 -1.33268,-0.0231 -1.65029,-0.14159 z" />

        <path
          fill={this.props.success >= 3 ? "green" : "white"}
          id="DeathSaveSuccessThree"
          d="m 499.88112,440.39294 c -1.37358,-0.57957 -2.19782,-1.35894 -2.80402,-2.65137 -0.29644,-0.63201 -0.3508,-0.93601 -0.3508,-1.9617 0,-1.05228 0.0516,-1.32544 0.38762,-2.05297 0.70321,-1.5224 2.19678,-2.64202 3.81792,-2.86202 2.53991,-0.34467 4.86927,1.24685 5.51522,3.76823 0.29901,1.16715 0.18114,2.10212 -0.41995,3.33103 -0.84557,1.72874 -2.24936,2.62267 -4.24338,2.70218 -0.96829,0.0386 -1.26382,-0.004 -1.90261,-0.27338 z" />

        <path
          fill={this.props.failure >= 1 ? "red" : "white"}
          id="DeathSaveFailureOne"
          d="m 466.47962,460.6486 c -1.53061,-0.25762 -2.90082,-1.30298 -3.61533,-2.75822 -0.35532,-0.72368 -0.3937,-0.93332 -0.3937,-2.15049 0,-1.10111 0.0539,-1.46543 0.29391,-1.98484 0.41304,-0.89407 1.44661,-1.94678 2.4012,-2.44567 0.75206,-0.39305 0.90999,-0.42407 2.16003,-0.42432 1.1954,-2.3e-4 1.43353,0.0415 2.09556,0.36688 0.95345,0.46865 1.92522,1.4404 2.39308,2.39304 0.32457,0.66089 0.3665,0.90054 0.3665,2.09491 0,1.17976 -0.0451,1.44485 -0.36011,2.1169 -0.63229,1.34891 -2.09444,2.51753 -3.42356,2.73629 -1.02616,0.16888 -1.21203,0.17427 -1.91758,0.0555 z" />

        <path
          fill={this.props.failure >= 2 ? "red" : "white"}
          id="DeathSaveFailureTwo"
          d="m 483.66469,460.65586 c -1.51539,-0.25428 -2.99318,-1.38035 -3.69485,-2.81547 -0.32115,-0.65684 -0.36784,-0.91402 -0.3695,-2.03512 -0.002,-1.17707 0.0344,-1.357 0.43641,-2.17437 0.51957,-1.05634 1.36537,-1.88468 2.43767,-2.38736 0.66042,-0.30959 0.94107,-0.35879 2.0466,-0.35879 1.13222,0 1.37123,0.0442 2.05526,0.3801 3.66156,1.79803 3.82107,6.94314 0.27363,8.82631 -0.63441,0.33678 -2.13084,0.75758 -2.45481,0.6903 -0.042,-0.009 -0.37069,-0.0652 -0.73041,-0.1256 z" />

        <path
          fill={this.props.failure >= 3 ? "red" : "white"}
          id="DeathSaveFailureThree"
          d="m 500.82223,460.66153 c -1.56317,-0.2677 -3.0316,-1.40365 -3.70831,-2.86868 -0.33626,-0.72798 -0.38762,-1.00039 -0.38762,-2.0558 0,-1.10005 0.042,-1.30193 0.4383,-2.10694 0.51963,-1.05551 1.36608,-1.88423 2.43767,-2.38657 0.66043,-0.30959 0.94107,-0.35879 2.0466,-0.35879 1.12083,0 1.37458,0.0459 2.02707,0.36631 1.16116,0.57026 1.8176,1.2137 2.35117,2.30456 0.59999,1.22667 0.71833,2.16196 0.42203,3.33551 -0.63863,2.52937 -3.12911,4.19815 -5.62691,3.7704 z" />

        <text
          transform="matrix(1.33333 0 0 1.33333 419.69 438.577)"
          fontWeight={this.state.hovered === "success" ? 700 : 400}
          fontSize={5.75}
          fontFamily="Zelda"
        >
          <tspan
            y={0}
            x="0 3.0704999 7.0955 10.57425 14.053 17.15225 20.22275 23.293249 26.3925"
          >
            SUCCESSES
          </tspan>
        </text>
        <text
          transform="matrix(1.33333 0 0 1.33333 426.398 458.576)"
          fontWeight={this.state.hovered === "failure" ? 700 : 400}
          fontSize={5.75}
          fontFamily="Zelda"
        >
          <tspan
            y={0}
            x="0 2.8864999 6.3077502 8.0327501 10.879 14.904 18.261999 21.36125"
          >
            FAILURES
          </tspan>
        </text>
        <text
          transform="matrix(1.33333 0 0 1.33333 440.729 479.016)"
          fontWeight={400}
          fontSize={5.75}
          fontFamily="Zelda"
        >
          <tspan
            y={0}
            x="0 4.0882502 7.1875 10.32125 13.4205 17.85375 19.29125 22.36175 25.609924 28.962175 32.061424"
          >
            DEATH SAVES
          </tspan>
        </text>
        <rect
          fill="transparent"
          x="412"
          y="425"
          width="105"
          height="20"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={() => this.onMouseOver("success")}
          onClick={() => this.props.modulateSave("success")}
        />

        <rect
          fill="transparent"
          x="412"
          y="448"
          width="105"
          height="20"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={() => this.onMouseOver("failure")}
          onClick={() => this.props.modulateSave("failure")}
        />
      </g>
    );
  }
}

const mapSateToProps = (state) => ({
  success: state.homePageReducer.deathSavesReducer.success,
  failure: state.homePageReducer.deathSavesReducer.failure,
});

const mapDispatchToProps = (dispatch) => ({
  modulateSave: (save) => dispatch(modulateDeathSaves(save))
});

export default connect(mapSateToProps, mapDispatchToProps)(DeathSaves);
