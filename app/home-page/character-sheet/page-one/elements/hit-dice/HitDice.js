import React from 'react';
import InteractiveElement from '../../../InteractiveElement';
import {connect} from "react-redux";
import {setModalVisibility} from "./state/hitDiceActions";

const HitDice = ({hitDiceTotal, onClick, hitDiceString}) => (
  <g transform="translate(0, -75)">
    <InteractiveElement
      fillPath="M402.257 426.777v52.091l-5.6 5.6h-91.836l-5.613-5.6v-52.09l5.613-5.614h91.836z"
      borderPah="M396.72167486 419.93759016C396.72167486 419.93759016 304.72190486 419.93759016 304.72190486 419.93759016C304.72190486 419.93759016 298.0392549 426.62157345 298.0392549 426.62157345C298.0392549 426.62157345 298.0392549 479.0147758 298.0392549 479.0147758C298.0392549 479.0147758 304.72190486 485.69742576 304.72190486 485.69742576C304.72190486 485.69742576 396.72167486 485.69742576 396.72167486 485.69742576C396.72167486 485.69742576 403.40565815 479.0147758 403.40565815 479.0147758C403.40565815 479.0147758 403.40565815 426.62157345 403.40565815 426.62157345C403.40565815 426.62157345 396.72167486 419.93759016 396.72167486 419.93759016M401.5723294 427.38157155C401.5723294 427.38157155 401.5723294 432.5482253 401.5723294 432.5482253C401.02833076 430.91889604 400.25633269 429.18156705 399.17366873 427.54023782C399.17366873 427.54023782 399.17366873 427.44557139 399.17366873 427.44557139C399.17366873 427.44557139 399.11233555 427.44557139 399.11233555 427.44557139C397.5723394 425.14291048 395.40301149 423.05358237 392.35235245 421.77091891C392.35235245 421.77091891 395.96167676 421.77091891 395.96167676 421.77091891C395.96167676 421.77091891 401.5723294 427.38157155 401.5723294 427.38157155M389.76969224 483.86409701C389.76969224 483.86409701 311.64055423 483.86409701 311.64055423 483.86409701C308.15656294 483.02143245 305.36590325 481.10277058 303.27124182 478.16011127C303.27124182 478.16011127 303.27124182 427.50690457 303.27124182 427.50690457C305.0925706 424.95357762 307.76456392 422.73358317 311.67388748 421.77091891C311.67388748 421.77091891 389.80302549 421.77091891 389.80302549 421.77091891C393.28835011 422.61358347 396.07767647 424.53091201 398.17367123 427.47490465C398.17367123 427.47490465 398.17367123 478.12811135 398.17367123 478.12811135C396.35234245 480.6814383 393.68034913 482.90009942 389.76969224 483.86409701M299.87258365 435.57621773C300.27658264 433.68688912 300.99658084 431.334895 302.27257765 429.07890064C302.27257765 429.07890064 302.27257765 476.5747819 302.27257765 476.5747819C302.04857821 476.17878289 301.8125788 475.8014505 301.61124597 475.37745156C300.73391483 473.53078951 300.20058283 471.67612748 299.87258365 470.12413136C299.87258365 470.12413136 299.87258365 435.57621773 299.87258365 435.57621773M399.17366873 429.05890069C399.39633484 429.4548997 399.63233425 429.83089876 399.83366708 430.25623103C400.70966489 432.10289308 401.24433022 433.95755511 401.5723294 435.50955123C401.5723294 435.50955123 401.5723294 470.05613153 401.5723294 470.05613153C401.16833041 471.9481268 400.44833221 474.30012092 399.17366873 476.55611528C399.17366873 476.55611528 399.17366873 429.05890069 399.17366873 429.05890069M305.48323629 421.77091891C305.48323629 421.77091891 309.0925606 421.77091891 309.0925606 421.77091891C306.04190156 423.05358237 303.87257365 425.14291048 302.3325775 427.44557139C302.3325775 427.44557139 302.27124432 427.44557139 302.27124432 427.44557139C302.27124432 427.44557139 302.27124432 427.53890449 302.27124432 427.53890449C301.18724703 429.18156705 300.41524896 430.91889604 299.87258365 432.5482253C299.87258365 432.5482253 299.87258365 427.38157155 299.87258365 427.38157155C299.87258365 427.38157155 305.48323629 421.77091891 305.48323629 421.77091891M299.87258365 478.2547777C299.87258365 478.2547777 299.87258365 473.08679062 299.87258365 473.08679062C300.41524896 474.71611988 301.18724703 476.45344887 302.27257765 478.0947781C302.27257765 478.0947781 302.27257765 478.1881112 302.27257765 478.1881112C302.27257765 478.1881112 302.3325775 478.1881112 302.3325775 478.1881112C303.87257365 480.49210544 306.04190156 482.58143355 309.0925606 483.86409701C309.0925606 483.86409701 305.48323629 483.86409701 305.48323629 483.86409701C305.48323629 483.86409701 299.87258365 478.2547777 299.87258365 478.2547777M395.96167676 483.86409701C395.96167676 483.86409701 392.35235245 483.86409701 392.35235245 483.86409701C395.40301149 482.58143355 397.5723394 480.49077211 399.11233555 478.18944453C399.11233555 478.18944453 399.17366873 478.18944453 399.17366873 478.18944453C399.17366873 478.18944453 399.17366873 478.0947781 399.17366873 478.0947781C400.25633269 476.45344887 401.02833076 474.71611988 401.57366273 473.08679062C401.57366273 473.08679062 401.57366273 478.2547777 401.57366273 478.2547777C401.57366273 478.2547777 395.96167676 483.86409701 395.96167676 483.86409701"
      rectX="299"
      rectY="420"
      rectWidth="108"
      rectHeigth="70"
      onClick={onClick}
    >
      <text
        transform="matrix(1.33333 0 0 1.33333 306.347 436.932)"
        fontWeight={400}
        fontSize={7}
        fontFamily="Scala Sans Offc"
        fill="#969797"
      >
        <tspan y={0} x="0 3.073 6.8039999 8.967 12.299">
          Total
        </tspan>
      </text>
      <text
        transform="matrix(1.33333 0 0 1.33333 306.347 436.932) translate(17, 0)"
        fontWeight={400}
        fontSize={7}
        fontFamily="Scala Sans Offc"
        fill="#969797"
      >
        <tspan y={0} x="0">
          {hitDiceTotal}
        </tspan>
      </text>
      <text
        transform="matrix(1.33333 0 0 1.33333 335.342 479.016)"
        fontWeight={400}
        fontSize={5.75}
        fontFamily="Scala Sans Offc"
      >
        <tspan
          y={0}
          x="3"
        >
          Hit Dice
        </tspan>
      </text>
      <foreignObject x="304" y="440">
        <div>
          <p style={{
            height: '30px',
            width: '94px',
            fontFamily: 'Scala Sans Offc',
            overflow: 'hidden',
            fontSize: 'medium',
            textAlign: 'center' }}>
            {hitDiceString}
          </p>
        </div>
      </foreignObject>
    </InteractiveElement>
  </g>
);

const mapStateToProps = (state) => {
  const classes = Object.entries(state.homePageReducer.classesReducer.classes);
  const startValue = classes.reduce((result, val) => {
    result[val[1].hitDie] = 0;
    return result;
  }, {});

  const hitDiceTotal = classes.reduce((result, val) => {
    result[val[1].hitDie]+= parseInt(val[1].level);
    return result;
  }, {...startValue});

  const hitDice = classes.reduce((result, val) => {
    result[val[1].hitDie] = hitDiceTotal[val[1].hitDie] + state.homePageReducer.hitDiceReducer[val[1].hitDie];
    return result;
  }, {...hitDiceTotal});

  const hitDiceString = Object.entries(hitDice).filter((value) => value[1] > 0).reduce((result, val) => {
    result += val[1] + val[0] + " ";
    return result;
  }, "");

  const hitDiceStringTotal = Object.entries(hitDiceTotal).filter((value) => value[1] > 0).reduce((result, val) => {
    result += val[1] + val[0] + " ";
    return result;
  }, "");

  return {
    hitDiceTotal: hitDiceStringTotal,
    hitDiceString
  }
};

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(setModalVisibility(true))
});

export default connect(mapStateToProps, mapDispatchToProps)(HitDice);