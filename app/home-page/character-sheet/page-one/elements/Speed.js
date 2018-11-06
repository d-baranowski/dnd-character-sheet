import React from 'react';
import InteractiveElement from '../../InteractiveElement';
import withSimpleForm from '../../../../form/withSimpleForm';


const Speed = ({showEditor, speed}) => (
  <InteractiveElement
    fillPath="M516.833 187.364v52.09l-5.6 5.6h-56.37l-5.614-5.6v-52.09l5.614-5.613h56.37z"
    borderPah="M511.27472181 180.68618829C511.27472181 180.68618829 454.98819586 180.68618829 454.98819586 180.68618829C454.98819586 180.68618829 448.3055459 187.37017158 448.3055459 187.37017158C448.3055459 187.37017158 448.3055459 239.7087074 448.3055459 239.7087074C448.3055459 239.7087074 454.98819586 246.39135736 454.98819586 246.39135736C454.98819586 246.39135736 511.27472181 246.39135736 511.27472181 246.39135736C511.27472181 246.39135736 517.9587051 239.7087074 517.9587051 239.7087074C517.9587051 239.7087074 517.9587051 187.37150491 517.9587051 187.37150491C517.9587051 187.37150491 511.27472181 180.68618829 511.27472181 180.68618829M516.12537635 188.13016968C516.12537635 188.13016968 516.12537635 193.29682343 516.12537635 193.29682343C515.58137771 191.66749417 514.80937964 189.93016518 513.72671568 188.28883595C513.72671568 188.28883595 513.72671568 188.19550285 513.72671568 188.19550285C513.72671568 188.19550285 513.6653825 188.19550285 513.6653825 188.19550285C512.12538635 185.89150861 509.95605844 183.8021805 506.9053994 182.51951704C506.9053994 182.51951704 510.51472371 182.51951704 510.51472371 182.51951704C510.51472371 182.51951704 516.12537635 188.13016968 516.12537635 188.13016968M504.32273919 244.55669528C504.32273919 244.55669528 461.90684523 244.55669528 461.90684523 244.55669528C458.42152061 243.71403072 455.63219425 241.79403552 453.53619949 238.85137621C453.53619949 238.85137621 453.53619949 188.2555027 453.53619949 188.2555027C455.3588616 185.70217575 458.02952159 183.48351463 461.94017848 182.51951704C461.94017848 182.51951704 504.35607244 182.51951704 504.35607244 182.51951704C507.84139706 183.3621816 510.63072342 185.28084347 512.72671818 188.22350278C512.72671818 188.22350278 512.72671818 238.82070962 512.72671818 238.82070962C510.9053894 241.37403657 508.23339608 243.59403102 504.32273919 244.55669528M450.13887465 196.32481586C450.54154031 194.43548725 451.26153851 192.08482646 452.53620199 189.82749877C452.53620199 189.82749877 452.53620199 237.2687135 452.53620199 237.2687135C452.31353588 236.87271449 452.0788698 236.49671543 451.87620364 236.07004983C451.00020583 234.22472111 450.46687383 232.37005908 450.13887465 230.81806296C450.13887465 230.81806296 450.13887465 196.32481586 450.13887465 196.32481586M513.72671568 189.80749882C513.94938179 190.20349783 514.1853812 190.58083022 514.38671403 191.00482916C515.26271184 192.85149121 515.79737717 194.70615324 516.12537635 196.25814936C516.12537635 196.25814936 516.12537635 230.75139646 516.12537635 230.75139646C515.72137736 232.64072507 515.00137916 234.99271919 513.72671568 237.24738022C513.72671568 237.24738022 513.72671568 189.80749882 513.72671568 189.80749882M455.74952729 182.51951704C455.74952729 182.51951704 459.3588516 182.51951704 459.3588516 182.51951704C456.30685923 183.8021805 454.13886465 185.89284194 452.5988685 188.19416952C452.5988685 188.19416952 452.53620199 188.19416952 452.53620199 188.19416952C452.53620199 188.19416952 452.53620199 188.28883595 452.53620199 188.28883595C451.45353803 189.93016518 450.68287329 191.66749417 450.13887465 193.29682343C450.13887465 193.29682343 450.13887465 188.13016968 450.13887465 188.13016968C450.13887465 188.13016968 455.74952729 182.51951704 455.74952729 182.51951704M450.13887465 238.94737597C450.13887465 238.94737597 450.13887465 233.77938889 450.13887465 233.77938889C450.68153996 235.40738482 451.45353803 237.14604714 452.53620199 238.78604304C452.53620199 238.78604304 452.53620199 238.8820428 452.53620199 238.8820428C452.53620199 238.8820428 452.59753517 238.8820428 452.59753517 238.8820428C454.13886465 241.18337038 456.30685923 243.27403182 459.3588516 244.55669528C459.3588516 244.55669528 455.74952729 244.55669528 455.74952729 244.55669528C455.74952729 244.55669528 450.13887465 238.94737597 450.13887465 238.94737597M510.51472371 244.55669528C510.51472371 244.55669528 506.9053994 244.55669528 506.9053994 244.55669528C509.95605844 243.27403182 512.12538635 241.18337038 513.6653825 238.8820428C513.6653825 238.8820428 513.72671568 238.8820428 513.72671568 238.8820428C513.72671568 238.8820428 513.72671568 238.78604304 513.72671568 238.78604304C514.80937964 237.14604714 515.58137771 235.40738482 516.12670968 233.77938889C516.12670968 233.77938889 516.12670968 238.94737597 516.12670968 238.94737597C516.12670968 238.94737597 510.51472371 244.55669528 510.51472371 244.55669528"
    rectX="449"
    rectY="180"
    rectWidth="70"
    rectHeigth="70"
    onClick={showEditor}
  >
    <text
      transform="matrix(1.33333 0 0 1.33333 470.658 240.768)"
      fontWeight={700}
      fontSize={6.5}
      fontFamily="Scala Sans Offc"
    >
      <tspan y={0} x="0 3.471 7.085 10.5885 14.092">
        SPEED
      </tspan>
    </text>
    <foreignObject x="452" y="190">
      <div>
        <p style={{
          height: '30px',
          width: '60px',
          border: 'none',
          fontFamily: 'Scala Sans Offc',
          fontSize: 'x-large',
          textAlign: 'center' }}>
          {speed}ft
        </p>
      </div>
    </foreignObject>
  </InteractiveElement>
);


export default withSimpleForm({formName: 'speed', label: 'Speed'})(Speed);
