import React from 'react';
import {getValue} from "../attributes/state/attributesReducer"
import {modifierWithSign} from '../attributes/AttributeBox';
import InteractiveElement from '../../../InteractiveElement';
import withSimpleForm from '../../../../../form/withSimpleForm';

const Initiative = ({initiativeBonus, dexterity, showEditor}) => {
  const value = modifierWithSign(parseInt(initiativeBonus) + parseInt(dexterity));

  return (
    <InteractiveElement
      fillPath="M438.967 187.364v52.09l-5.6 5.6h-56.371l-5.613-5.6v-52.09l5.613-5.613h56.37z"
      borderPah="M433.12425052 180.68618829C433.12425052 180.68618829 376.8390579 180.68618829 376.8390579 180.68618829C376.8390579 180.68618829 370.15640794 187.37017158 370.15640794 187.37017158C370.15640794 187.37017158 370.15640794 239.7087074 370.15640794 239.7087074C370.15640794 239.7087074 376.8390579 246.39135736 376.8390579 246.39135736C376.8390579 246.39135736 433.12558385 246.39135736 433.12558385 246.39135736C433.12558385 246.39135736 439.80956714 239.7087074 439.80956714 239.7087074C439.80956714 239.7087074 439.80956714 187.37150491 439.80956714 187.37150491C439.80956714 187.37150491 433.12425052 180.68618829 433.12425052 180.68618829M437.97490506 188.13016968C437.97490506 188.13016968 437.97490506 193.29682343 437.97490506 193.29682343C437.43090642 191.66749417 436.65890835 189.93016518 435.57624439 188.28883595C435.57624439 188.28883595 435.57624439 188.19550285 435.57624439 188.19550285C435.57624439 188.19550285 435.51491121 188.19550285 435.51491121 188.19550285C433.97491506 185.89150861 431.80558715 183.8021805 428.75492811 182.51951704C428.75492811 182.51951704 432.36425242 182.51951704 432.36425242 182.51951704C432.36425242 182.51951704 437.97490506 188.13016968 437.97490506 188.13016968M426.1722679 244.55669528C426.1722679 244.55669528 383.75637394 244.55669528 383.75637394 244.55669528C380.27104932 243.71403072 377.48172296 241.79403552 375.3857282 238.85137621C375.3857282 238.85137621 375.3857282 188.2555027 375.3857282 188.2555027C377.20839031 185.70217575 379.8790503 183.48351463 383.78970719 182.51951704C383.78970719 182.51951704 426.20560115 182.51951704 426.20560115 182.51951704C429.69092577 183.3621816 432.48025213 185.28084347 434.57624689 188.22350278C434.57624689 188.22350278 434.57624689 238.82070962 434.57624689 238.82070962C432.75491811 241.37403657 430.08292479 243.59403102 426.1722679 244.55669528M371.98840336 196.32481586C372.39106902 194.43548725 373.11106722 192.08482646 374.3857307 189.82749877C374.3857307 189.82749877 374.3857307 237.2687135 374.3857307 237.2687135C374.16306459 236.87271449 373.92839851 236.49671543 373.72573235 236.07004983C372.84973454 234.22472111 372.31640254 232.37005908 371.98840336 230.81806296C371.98840336 230.81806296 371.98840336 196.32481586 371.98840336 196.32481586M435.57624439 189.80749882C435.7989105 190.20349783 436.03490991 190.58083022 436.23624274 191.00482916C437.11224055 192.85149121 437.64690588 194.70615324 437.97490506 196.25814936C437.97490506 196.25814936 437.97490506 230.75139646 437.97490506 230.75139646C437.57090607 232.64072507 436.85090787 234.99271919 435.57624439 237.24738022C435.57624439 237.24738022 435.57624439 189.80749882 435.57624439 189.80749882M377.599056 182.51951704C377.599056 182.51951704 381.20838031 182.51951704 381.20838031 182.51951704C378.15638794 183.8021805 375.98839336 185.89284194 374.44839721 188.19416952C374.44839721 188.19416952 374.3857307 188.19416952 374.3857307 188.19416952C374.3857307 188.19416952 374.3857307 188.28883595 374.3857307 188.28883595C373.30306674 189.93016518 372.532402 191.66749417 371.98840336 193.29682343C371.98840336 193.29682343 371.98840336 188.13016968 371.98840336 188.13016968C371.98840336 188.13016968 377.599056 182.51951704 377.599056 182.51951704M371.98840336 238.94737597C371.98840336 238.94737597 371.98840336 233.77938889 371.98840336 233.77938889C372.53106867 235.40738482 373.30306674 237.14604714 374.3857307 238.78604304C374.3857307 238.78604304 374.3857307 238.8820428 374.3857307 238.8820428C374.3857307 238.8820428 374.44706388 238.8820428 374.44706388 238.8820428C375.98839336 241.18337038 378.15638794 243.27403182 381.20838031 244.55669528C381.20838031 244.55669528 377.599056 244.55669528 377.599056 244.55669528C377.599056 244.55669528 371.98840336 238.94737597 371.98840336 238.94737597M432.36425242 244.55669528C432.36425242 244.55669528 428.75492811 244.55669528 428.75492811 244.55669528C431.80558715 243.27403182 433.97491506 241.18337038 435.51491121 238.8820428C435.51491121 238.8820428 435.57624439 238.8820428 435.57624439 238.8820428C435.57624439 238.8820428 435.57624439 238.78604304 435.57624439 238.78604304C436.65890835 237.14604714 437.43090642 235.40738482 437.97623839 233.77938889C437.97623839 233.77938889 437.97623839 238.94737597 437.97623839 238.94737597C437.97623839 238.94737597 432.36425242 244.55669528 432.36425242 244.55669528"
      rectX="370"
      rectY="180"
      rectWidth="70"
      rectHeigth="70"
      onClick={showEditor}
    >
      <text
        transform="matrix(1.33333 0 0 1.33333 384.599 240.768)"
        fontWeight={700}
        fontSize={6.5}
        fontFamily="Scala Sans Offc"
      >
        <tspan
          y={0}
          x="0 1.95 6.8835001 8.8334999 12.337 14.287 17.8295 21.333 23.283001 27.0725"
        >
          INITIATIVE
        </tspan>
      </text>
      <foreignObject x="375" y="190">
        <div>
          <p style={{
            height: '30px',
            width: '60px',
            border: 'none',
            fontFamily: 'Scala Sans Offc',
            fontSize: 'x-large',
            textAlign: 'center'
          }}>
            {value}
          </p>
        </div>
      </foreignObject>
    </InteractiveElement>
  );
};



export default withSimpleForm({
  formName: "initiativeBonus",
  label: "Initiative Bonus",
  stateMapping: (state) =>
    ({
      dexterity: getValue(state, 'DexterityModifier') || 0
    })
  })
  (Initiative);
