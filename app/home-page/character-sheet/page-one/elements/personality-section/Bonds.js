import React from 'react';
import ScrollableTextElement from '../../../ScrollableTextElement';
import withSimpleForm from '../../../../../form/withSimpleForm';

const Bonds = ({onClick, renderValue, setWrapperRef}) => (
  <ScrollableTextElement
    fillPath="M766.03541824 348.02176995C766.03541824 348.02176995 763.22075861 353.28842345 754.16078126 348.02176995C754.16078126 348.02176995 566.20125116 348.02176995 566.20125116 348.02176995C557.14127381 353.28842345 554.32661418 348.02176995 554.32661418 348.02176995C554.32661418 348.02176995 550.88662278 348.02176995 550.88662278 348.02176995C550.88662278 348.02176995 550.88662278 412.95627428 550.88662278 412.95627428C550.88662278 412.95627428 554.32661418 412.95627428 554.32661418 412.95627428C554.32661418 412.95627428 557.13994048 407.68962078 566.20125116 412.95627428C566.20125116 412.95627428 754.16078126 412.95627428 754.16078126 412.95627428C763.22075861 407.68962078 766.03541824 412.95627428 766.03541824 412.95627428C766.03541824 412.95627428 769.47407631 412.95627428 769.47407631 412.95627428C769.47407631 412.95627428 769.47407631 348.02176995 769.47407631 348.02176995C769.47407631 348.02176995 766.03541824 348.02176995 766.03541824 348.02176995"
    borderPah="M765.64075256 347.36043827C765.64075256 347.36043827 765.45008637 347.70310408 765.45008637 347.70310408C765.41008647 347.77643723 764.51275538 349.30976673 762.13676132 349.6284326C761.91240119 349.31698551 761.553900386 349.130070608 761.17009707 349.12443386C760.798260628 349.128604534 760.448869684 349.303054302 760.22209944 349.59776601C758.531437 349.38176655 756.61810845 348.68043497 754.49544709 347.44443806C754.49544709 347.44443806 754.34078081 347.35510495 754.34078081 347.35510495C754.34078081 347.35510495 566.02125161 347.35510495 566.02125161 347.35510495C566.02125161 347.35510495 565.86658533 347.44443806 565.86658533 347.44443806C563.74259064 348.68043497 561.83059542 349.38176655 560.13993298 349.59776601C559.913580545 349.303262443 559.564682994 349.128813667 559.19326868 349.12443386C558.808993276 349.12965079 558.449909704 349.316611658 558.2252711 349.6284326C555.84927704 349.30976673 554.95327928 347.77643723 554.91461271 347.7084374C554.91461271 347.7084374 554.72661318 347.35510495 554.72661318 347.35510495C554.72661318 347.35510495 550.21995778 347.35510495 550.21995778 347.35510495C550.21995778 347.35510495 550.21995778 413.62293928 550.21995778 413.62293928C550.21995778 413.62293928 554.72127986 413.61760596 554.72127986 413.61760596C554.72127986 413.61760596 554.91194605 413.27494015 554.91194605 413.27494015C554.95194595 413.201607 555.84927704 411.6682775 558.2252711 411.34961163C558.449201254 411.661554958 558.807971351 411.848610264 559.19193535 411.85361037C559.563301781 411.849033057 559.912117941 411.674624977 560.13859965 411.38027822C561.83059542 411.59627768 563.74259064 412.29760926 565.86658533 413.53360617C565.86658533 413.53360617 566.02125161 413.62293928 566.02125161 413.62293928C566.02125161 413.62293928 754.34078081 413.62293928 754.34078081 413.62293928C754.34078081 413.62293928 754.49544709 413.53360617 754.49544709 413.53360617C756.61810845 412.29760926 758.531437 411.59627768 760.22209944 411.38027822C760.448061739 411.675254507 760.79720533 411.849826303 761.16876374 411.85361037C761.56876274 411.85361037 761.91142855 411.64827755 762.13676132 411.34961163C764.51275538 411.6682775 765.40875314 413.201607 765.44608638 413.26960683C765.44608638 413.26960683 765.63541924 413.62293928 765.63541924 413.62293928C765.63541924 413.62293928 770.14074131 413.62293928 770.14074131 413.62293928C770.14074131 413.62293928 770.14074131 347.35510495 770.14074131 347.35510495C770.14074131 347.35510495 765.64075256 347.36043827 765.64075256 347.36043827M551.55462111 365.07906064C552.4119523 371.22571194 552.84661788 376.77903139 552.84661788 381.64568589C552.84661788 381.64568589 552.84661788 379.33235834 552.84661788 379.33235834C552.84661788 384.19901284 552.4119523 389.75233229 551.55328778 395.89898359C551.55328778 395.89898359 551.55462111 365.07906064 551.55462111 365.07906064M768.80741131 412.28960928C768.80741131 412.28960928 766.39408401 412.28960928 766.39408401 412.28960928C765.91408521 411.63761091 764.64075506 410.30028092 762.21676112 410.01094831C762.003588867 409.631233847 761.604187204 409.393930314 761.16876374 409.3882832C760.71443843 409.391992421 760.299811363 409.647858938 760.09276643 410.05228154C758.25277103 410.2816143 756.21277613 411.01227914 753.98211504 412.28960928C753.98211504 412.28960928 566.37991738 412.28960928 566.37991738 412.28960928C564.14925629 411.01227914 562.10792806 410.2816143 560.26926599 410.05228154C560.0617703 409.647648551 559.646655006 409.391797788 559.19193535 409.3882832C558.756836424 409.393856084 558.357798633 409.631245445 558.1452713 410.01094831C555.72127736 410.30028092 554.44794721 411.63761091 553.96794841 412.28960928C553.96794841 412.28960928 551.55462111 412.28960928 551.55462111 412.28960928C551.55462111 412.28960928 551.55462111 400.2949726 551.55462111 400.2949726C552.84795121 392.39099236 553.51328288 385.34034332 553.51328288 379.33235834C553.51328288 379.33235834 553.51328288 381.64568589 553.51328288 381.64568589C553.51328288 375.63770091 552.84928454 368.58705187 551.55328778 360.68307163C551.55328778 360.68307163 551.55328778 348.68843495 551.55328778 348.68843495C551.55328778 348.68843495 553.96661508 348.68843495 553.96661508 348.68843495C554.44661388 349.34043332 555.72127736 350.67776331 558.1452713 350.96709592C558.357830588 351.347407914 558.757613539 351.584937988 559.19326868 351.58976103C559.6652675 351.58976103 560.06259984 351.31509505 560.26926599 350.92576269C562.10792806 350.69642993 564.14925629 349.96576509 566.37991738 348.68843495C566.37991738 348.68843495 753.98211504 348.68843495 753.98211504 348.68843495C756.21277613 349.96576509 758.25410436 350.69642993 760.09276643 350.92576269C760.30026212 351.330395679 760.715377414 351.586246442 761.17009707 351.58976103C761.62209594 351.58976103 762.00342832 351.33242834 762.21676112 350.96709592C764.64075506 350.67776331 765.91408521 349.34043332 766.39408401 348.68843495C766.39408401 348.68843495 768.80741131 348.68843495 768.80741131 348.68843495C768.80741131 348.68843495 768.80741131 360.68307163 768.80741131 360.68307163C767.51141455 368.58705187 766.84741621 375.63770091 766.84741621 381.64568589C766.84741621 381.64568589 766.84741621 379.33235834 766.84741621 379.33235834C766.84741621 385.34034332 767.51141455 392.39099236 768.80741131 400.2949726C768.80741131 400.2949726 768.80741131 412.28960928 768.80741131 412.28960928M768.80741131 395.89898359C767.95008012 389.75233229 767.51408121 384.19901284 767.51408121 379.33235834C767.51408121 379.33235834 767.51408121 381.64568589 767.51408121 381.64568589C767.51408121 376.77903139 767.95008012 371.22571194 768.80741131 365.07906064C768.80741131 365.07906064 768.80741131 395.89898359 768.80741131 395.89898359"
    rectX="550"
    rectY="347"
    rectWidth="220"
    rectHeigth="65"
    onClick={onClick}
    value={renderValue}
    setWrapperRef={setWrapperRef}
  >
    <text
      transform="matrix(1.33333 0 0 1.33333 647.31 407.339)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
    >
      <tspan y={0} x="0 3.3982501 7.7855 12.14975 16.238001">
        BONDS
      </tspan>
    </text>
  </ScrollableTextElement>
);

export default withSimpleForm({formName:"bonds", label:"Bonds", type:"textarea"})(Bonds);

