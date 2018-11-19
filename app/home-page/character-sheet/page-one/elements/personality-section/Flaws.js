import React from 'react';
import ScrollableTextElement from '../../../ScrollableTextElement';
import withSimpleForm from '../../../../../form/withSimpleForm';

const Flaws = ({onClick, renderValue, setWrapperRef}) => (
  <ScrollableTextElement
    fillPath="M556.63994173 486.03475825C556.63994173 486.03475825 763.35409161 486.03475825 763.35409161 486.03475825C763.35409161 482.65076671 769.2914101 480.80810465 769.2914101 480.80810465C769.2914101 480.80810465 769.2914101 421.10025392 769.2914101 421.10025392C769.2914101 421.10025392 765.85275203 421.10025392 765.85275203 421.10025392C765.85275203 421.10025392 763.03942573 426.36690742 753.97811505 421.10025392C753.97811505 421.10025392 566.01858495 421.10025392 566.01858495 421.10025392C556.9586076 426.36690742 554.14394797 421.10025392 554.14394797 421.10025392C554.14394797 421.10025392 550.7052899 421.10025392 550.7052899 421.10025392C550.7052899 421.10025392 550.7052899 480.80677132 550.7052899 480.80677132C550.7052899 480.80677132 556.63994173 482.65076671 556.63994173 486.03342492"
    borderPah="M550.50795706 481.44410306C552.02795326 481.91610188 555.97461006 483.66009752 555.97461006 486.03342492C555.97461006 486.03342492 555.97461006 486.70008992 555.97461006 486.70008992C555.97461006 486.70008992 764.02208994 486.70008992 764.02208994 486.70008992C764.02208994 486.70008992 764.02208994 486.03342492 764.02208994 486.03342492C764.02208994 483.66676417 767.96874674 481.91743521 769.48874294 481.44410306C769.48874294 481.44410306 769.9580751 481.29877009 769.9580751 481.29877009C769.9580751 481.29877009 769.9580751 420.43225559 769.9580751 420.43225559C769.9580751 420.43225559 765.45808635 420.43892224 765.45808635 420.43892224C765.45808635 420.43892224 765.26608683 420.78158805 765.26608683 420.78158805C765.22742026 420.85625453 764.33008917 422.3882507 761.95409511 422.7082499C761.729887474 422.395931283 761.370533507 422.208829631 760.98609753 422.20425116C760.614959541 422.208508417 760.266184965 422.382404473 760.03943323 422.67624998C758.35010412 422.46025052 756.43677557 421.76025227 754.31278088 420.52425536C754.31278088 420.52425536 754.1581146 420.43358892 754.1581146 420.43358892C754.1581146 420.43358892 565.8385854 420.43358892 565.8385854 420.43358892C565.8385854 420.43358892 565.68525245 420.52425536 565.68525245 420.52425536C563.56125776 421.76025227 561.64792921 422.46025052 559.9586001 422.67624998C559.732106552 422.382090569 559.383169109 422.208113309 559.0119358 422.20425116C558.627188447 422.209047585 558.267521694 422.396054508 558.04260489 422.7082499C555.66661083 422.3882507 554.77061307 420.8549212 554.73327983 420.78692137C554.73327983 420.78692137 554.54394697 420.43358892 554.54394697 420.43358892C554.54394697 420.43358892 550.03729157 420.43358892 550.03729157 420.43358892C550.03729157 420.43358892 550.03729157 481.30010342 550.03729157 481.30010342C550.03729157 481.30010342 550.50795706 481.44410306 550.50795706 481.44410306M552.66395167 474.60545349C552.196824209 473.796257286 551.765302065 472.96702298 551.37062157 472.12012637C551.37062157 472.12012637 551.37062157 438.15621128 551.37062157 438.15621128C552.23061942 444.30419591 552.66395167 449.85751536 552.66395167 454.72283653C552.66395167 454.72283653 552.66395167 474.60545349 552.66395167 474.60545349M557.24394022 485.36675992C556.69727492 482.51476705 552.75595144 480.83743791 551.3719549 480.33210584C551.3719549 480.33210584 551.3719549 475.06545234 551.3719549 475.06545234C553.06128401 478.09211144 556.37060907 483.01609913 561.03593074 485.36675992C561.03593074 485.36675992 557.24394022 485.36675992 557.24394022 485.36675992M762.75009312 485.36675992C762.75009312 485.36675992 758.96343592 485.36675992 758.96343592 485.36675992C763.62742426 483.01609913 766.93674932 478.09077811 768.62607843 475.06411901C768.62607843 475.06411901 768.62607843 480.33210584 768.62607843 480.33210584C767.24341522 480.83877124 763.29942508 482.51610038 762.75142645 485.36809325M768.62607843 472.1214597C768.231632067 472.969340901 767.800105523 473.799473407 767.33274833 474.60945348C767.33274833 474.60945348 767.33274833 454.72416986 767.33274833 454.72416986C767.33274833 449.85751536 767.76741391 444.30552924 768.62607843 438.15754461C768.62607843 438.15754461 768.62607843 472.1214597 768.62607843 472.1214597M553.78661553 421.76691892C554.265281 422.42025062 555.53861115 423.75758061 557.96393842 424.04557989C558.176497708 424.425891884 558.576280659 424.663421958 559.0119358 424.668245C559.48393462 424.668245 559.8786003 424.39357902 560.08793311 424.00424666C561.92526185 423.7749139 563.96792341 423.04424906 566.1985845 421.76691892C566.1985845 421.76691892 753.80078216 421.76691892 753.80078216 421.76691892C756.03144325 423.04424906 758.07277148 423.7749139 759.91143355 424.00424666C760.118478483 424.408669262 760.53310555 424.664535779 760.98743086 424.668245C761.422762372 424.663498794 761.822183067 424.425881641 762.03409491 424.04557989C764.45808885 423.75758061 765.731419 422.41891729 766.21008447 421.76558559C766.21008447 421.76558559 768.6247451 421.76558559 768.6247451 421.76558559C768.6247451 421.76558559 768.6247451 433.76288893 768.6247451 433.76288893C767.32874834 441.66553584 766.66608333 448.71618488 766.66608333 454.72283653C766.66608333 454.72283653 766.66608333 475.72945068 766.66608333 475.72945068C764.21275613 479.68544079 759.63676757 485.36809325 753.58344937 485.36809325C753.58344937 485.36809325 566.41591729 485.36809325 566.41591729 485.36809325C560.36659908 485.36809325 555.7852772 479.6814408 553.33061667 475.72545069C553.33061667 475.72545069 553.33061667 454.72416986 553.33061667 454.72416986C553.33061667 448.71618488 552.66795166 441.66553584 551.37062157 433.76288893C551.37062157 433.76288893 551.37062157 421.76691892 551.37062157 421.76691892C551.37062157 421.76691892 553.78661553 421.76691892 553.78661553 421.76691892"
    rectX="550"
    rectY="420"
    rectWidth="220"
    rectHeigth="65"
    onClick={onClick}
    value={renderValue}
    setWrapperRef={setWrapperRef}
  >
    <text
      transform="matrix(1.33333 0 0 1.33333 648.759 480.31)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
    >
      <tspan y={0} x="0 3.0014999 5.8477502 9.0965004 14.0645">
        FLAWS
      </tspan>
    </text>
  </ScrollableTextElement>
);


export default withSimpleForm({formName:"flaws", label:"Flaws", type:"textarea", allowLineBreak: true})(Flaws);

