import React from 'react';
import ScrollableTextElement from '../../../ScrollableTextElement';
import withSimpleForm from '../../../../../form/withSimpleForm';

const PersonalityTraits = ({onClick, renderValue, setWrapperRef}) => (
  <ScrollableTextElement
    fillPath="M763.35675827 181.35285329C763.35675827 181.35285329 556.64260839 181.35285329 556.64260839 181.35285329C556.64260839 184.73684483 550.7052899 186.57950689 550.7052899 186.57950689C550.7052899 186.57950689 550.7052899 265.21264364 550.7052899 265.21264364C550.7052899 265.21264364 554.14394797 265.21264364 554.14394797 265.21264364C554.14394797 265.21264364 556.9586076 259.94599014 566.01858495 265.21264364C566.01858495 265.21264364 753.97811505 265.21264364 753.97811505 265.21264364C763.0380924 259.94599014 765.85275203 265.21264364 765.85275203 265.21264364C765.85275203 265.21264364 769.2914101 265.21264364 769.2914101 265.21264364C769.2914101 265.21264364 769.2914101 186.57950689 769.2914101 186.57950689C769.2914101 186.57950689 763.35675827 184.73684483 763.35675827 181.35285329"
    borderPah="M769.49007627 185.94350848C767.96874674 185.47150966 764.02342327 183.72751402 764.02342327 181.35418662C764.02342327 181.35418662 764.02342327 180.68752162 764.02342327 180.68752162C764.02342327 180.68752162 555.97594339 180.68752162 555.97594339 180.68752162C555.97594339 180.68752162 555.97594339 181.35418662 555.97594339 181.35418662C555.97594339 183.72084737 552.02795326 185.47017633 550.50795706 185.94350848C550.50795706 185.94350848 550.0386249 186.08884145 550.0386249 186.08884145C550.0386249 186.08884145 550.0386249 265.88064197 550.0386249 265.88064197C550.0386249 265.88064197 554.53861365 265.87530865 554.53861365 265.87530865C554.53861365 265.87530865 554.73061317 265.53264284 554.73061317 265.53264284C554.76927974 265.45797636 555.66661083 263.92598019 558.04260489 263.60731432C558.267527855 263.918631098 558.626565485 264.105073504 559.01060247 264.10997973C559.381740459 264.105722473 559.730515035 263.931826417 559.95726677 263.63798091C561.64792921 263.85398037 563.56125776 264.55397862 565.68525245 265.78997553C565.68525245 265.78997553 565.83991873 265.88064197 565.83991873 265.88064197C565.83991873 265.88064197 754.1581146 265.88064197 754.1581146 265.88064197C754.1581146 265.88064197 754.31278088 265.78997553 754.31278088 265.78997553C756.43677557 264.55397862 758.35010412 263.85398037 760.03943323 263.63798091C760.265926778 263.932140321 760.614864221 264.106117581 760.98609753 264.10997973C761.370606286 264.105493874 761.730227009 263.919005549 761.95542844 263.60731432C764.3314225 263.92598019 765.22742026 265.45797636 765.2647535 265.52730952C765.2647535 265.52730952 765.45408636 265.88064197 765.45408636 265.88064197C765.45408636 265.88064197 769.95940843 265.88064197 769.95940843 265.88064197C769.95940843 265.88064197 769.95940843 186.08884145 769.95940843 186.08884145C769.95940843 186.08884145 769.49007627 185.94350848 769.49007627 185.94350848M767.33408166 192.78215805C767.800757018 193.591378001 768.231834113 194.420611958 768.62607843 195.26748517C768.62607843 195.26748517 768.62607843 248.15668628 768.62607843 248.15668628C767.76741391 242.00870165 767.33274833 236.4553822 767.33274833 231.59006103C767.33274833 231.59006103 767.33408166 192.78215805 767.33408166 192.78215805M762.75409311 182.02085162C763.30075841 184.87284449 767.24208189 186.55017363 768.62607843 187.0555057C768.62607843 187.0555057 768.62607843 192.3221592 768.62607843 192.3221592C766.93674932 189.2955001 763.62609093 184.37151241 758.96210259 182.02085162C758.96210259 182.02085162 762.75409311 182.02085162 762.75409311 182.02085162M557.24660688 182.02085162C557.24660688 182.02085162 561.03326408 182.02085162 561.03326408 182.02085162C556.37060907 184.37151241 553.05995068 189.29683343 551.3719549 192.32349253C551.3719549 192.32349253 551.3719549 187.0555057 551.3719549 187.0555057C552.75461811 186.5488403 556.69860825 184.87284449 557.24660688 182.02085162M551.3719549 195.26748517C551.51595454 194.95281929 551.95328678 194.02215495 552.66395167 192.77949139C552.66395167 192.77949139 552.66395167 231.5887277 552.66395167 231.5887277C552.66395167 236.45404887 552.23061942 242.00736832 551.37062157 248.15535295C551.37062157 248.15535295 551.3719549 195.26748517 551.3719549 195.26748517M766.2114178 264.54731197C765.731419 263.89398027 764.45942218 262.55665028 762.03409491 262.26731767C761.821192428 261.887519844 761.421474543 261.650536975 760.98609753 261.64598589C760.531858629 261.649994821 760.117374293 261.905773259 759.91010022 262.30998423C758.07277148 262.53931699 756.03010992 263.26998183 753.79944883 264.54731197C753.79944883 264.54731197 566.19725117 264.54731197 566.19725117 264.54731197C563.96659008 263.26998183 561.92526185 262.53931699 560.08659978 262.30998423C559.879554847 261.905561628 559.46492778 261.649695111 559.01060247 261.64598589C558.575270958 261.650732096 558.175850263 261.888349249 557.96393842 262.268651C555.53727782 262.55665028 554.265281 263.89398027 553.78661553 264.54731197C553.78661553 264.54731197 551.3719549 264.54731197 551.3719549 264.54731197C551.3719549 264.54731197 551.3719549 252.55267529 551.3719549 252.55267529C552.66795166 244.64869505 553.33061667 237.59804601 553.33061667 231.59006103C553.33061667 231.59006103 553.33061667 191.65949419 553.33061667 191.65949419C555.78394387 187.70350408 560.36126576 182.01951829 566.41458396 182.01951829C566.41458396 182.01951829 753.58211604 182.01951829 753.58211604 182.01951829C759.63143425 182.01951829 764.21275613 187.70750407 766.66741666 191.66349418C766.66741666 191.66349418 766.66741666 231.5887277 766.66741666 231.5887277C766.66741666 237.59671268 767.33008167 244.64736172 768.62607843 252.55134196C768.62607843 252.55134196 768.62607843 264.54597864 768.62607843 264.54597864C768.62607843 264.54597864 766.2114178 264.54731197 766.2114178 264.54731197"
    rectX="550"
    rectY="180"
    rectWidth="220"
    rectHeigth="88"
    onClick={onClick}
    value={renderValue}
    setWrapperRef={setWrapperRef}
  >
    <text
      transform="matrix(1.33333 0 0 1.33333 623.632 259.518)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 3.197 6.2962499 9.6542501 12.72475 17.112 21.47625 24.897499 27.74375 29.46875 32.568001 35.730499 37.053001 40.152248 43.51025 46.931499 48.656502 51.755749"
      >
        PERSONALITY TRAITS
      </tspan>
    </text>
  </ScrollableTextElement>
);

export default withSimpleForm({formName:"personalityTraits", label:"Personality Traits", type:"textarea", allowLineBreak: true})(PersonalityTraits);
