import React from 'react';
import { connect } from 'react-redux';
import InteractiveElement from '../../InteractiveElement';
import { openModal } from '../state/backgroundActions';

const CharacterArt = ({ characterAvatar, openModal }) => (
  <g>
    <InteractiveElement
      fillPath="M 147.6669,493.2892 c -17.63174,-0.0876 -27.37924,-0.27377 -27.6333,-0.52783 -0.0981,-0.0981 0.35643,-0.16859 1.47043,-0.22816 2.65014,-0.1417 10.28463,-0.18551 37.60676,-0.21581 l 22.689,-0.0252 v 0.47348 0.47348 l -0.70992,0.0248 c -1.14594,0.0401 -26.5691,0.0592 -33.42297,0.0252 zM 161.73375,503.62113 c -5.64791,-0.10373 -11.66218,-0.5881 -14.46625,-1.16506 -0.41145,-0.0847 -1.26066,-0.18914 -1.88712,-0.23217 -0.62646,-0.043 -1.27533,-0.11756 -1.44192,-0.16561 -0.29725,-0.0857 -0.28948,-0.0885 0.41648,-0.14644 2.03586,-0.16722 33.91222,-0.18611 36.554,-0.0217 1.38126,0.086 1.108,0.23206 -0.56874,0.30404 -0.61415,0.0264 -1.16076,0.1004 -1.62548,0.22016 -0.38509,0.0992 -0.9387,0.20281 -1.23024,0.23016 -0.29154,0.0274 -1.56939,0.18223 -2.83967,0.34417 -2.72072,0.34687 -3.56034,0.427 -5.49004,0.524 -1.64977,0.0829 -5.63723,0.14119 -7.42102,0.10842 z m -27.14729,-4.08804 c -2.4498,-0.94043 -3.13795,-1.22016 -3.92311,-1.59475 -0.98263,-0.46881 -1.43904,-0.86267 -1.59172,-1.37361 -0.0536,-0.1794 -0.16779,-0.39649 -0.25373,-0.48243 -0.14573,-0.14573 -0.21089,-0.15272 -0.96678,-0.10373 -1.06333,0.0689 -1.47349,-0.036 -2.88169,-0.73705 l -1.09801,-0.54664 19.43611,-0.0191 c 10.68986,-0.0105 28.20497,-0.0105 38.92247,0 l 19.48637,0.0191 -0.83297,0.4274 c -1.10788,0.56846 -1.88482,0.80412 -2.96257,0.8986 -0.9366,0.0821 -1.23128,0.18546 -1.445,0.50683 -0.32053,0.48198 -0.84262,0.9036 -1.55574,1.25636 -0.85632,0.4236 -1.27084,0.59848 -3.45927,1.45945 l -1.62293,0.6385 -27.1903,-0.007 -27.19029,-0.007 z m 0.26504,0.1081 c -4.67971,-1.78721 -5.48422,-2.20887 -5.77254,-3.02548 -0.23646,-0.66973 -0.28844,-0.69602 -1.2617,-0.63829 -1.08002,0.0641 -1.41524,-0.0226 -2.84783,-0.73584 l -1.09801,-0.5467 19.43611,-0.0191 c 10.68986,-0.0105 28.20497,-0.0105 38.92247,0 l 19.48637,0.0191 -0.83297,0.42634 c -1.07283,0.5491 -1.87004,0.79684 -2.8902,0.89816 -1.12974,0.11221 -1.26155,0.16532 -1.62238,0.65377 -0.55744,0.75458 -1.23781,1.12034 -4.48057,2.40869 l -2.01402,0.80018 -27.20947,-0.005 -27.20946,-0.005 z m -1.2154,-0.47161 c -3.69692,-1.42979 -4.35352,-1.811 -4.58916,-2.6644 -0.0407,-0.14728 -0.14372,-0.33756 -0.22901,-0.42285 -0.14442,-0.14442 -0.21307,-0.15164 -0.99844,-0.10505 -1.08253,0.0642 -1.41674,-0.0221 -2.85006,-0.7357 l -1.09801,-0.5467 19.43611,-0.0191 c 10.68986,-0.0105 28.20497,-0.0105 38.92247,0 l 19.48637,0.0191 -0.83297,0.42634 c -1.09001,0.55789 -1.88064,0.80126 -2.9221,0.89948 -0.96028,0.0906 -1.27808,0.19775 -1.47944,0.49902 -0.55776,0.83449 -1.36423,1.28423 -4.59188,2.56074 l -2.02674,0.80156 -27.20297,-0.004 -27.20297,-0.004 z M 65.487984,498.88657 v -0.98442 l 17.549189,0.006 c 22.185517,0.008 40.963587,0.10465 42.081527,0.21648 1.0959,0.10963 1.32223,0.17809 1.74565,0.52798 0.49603,0.40989 0.86541,0.50058 1.60497,0.39403 0.42378,-0.0611 0.72776,-0.0623 1.08127,-0.004 0.60608,0.0992 1.1954,0.34532 1.08679,0.45393 -0.042,0.042 -0.4996,0.11031 -1.01681,0.15172 -1.31886,0.10558 -23.67623,0.2124 -45.636839,0.21805 l -18.495747,0.005 z m 19.082613,-2.11811 -11.699459,-0.0451 -1.476631,-0.58244 c -2.203682,-0.86922 -3.303859,-1.55566 -4.919749,-3.06961 l -0.71703,-0.6718 18.360876,-0.0505 c 10.098481,-0.0277 21.537966,-0.0505 25.421066,-0.0505 l 7.0602,-1e-5 2.70828,1.4442 c 2.89081,1.54154 5.0127,2.7285 5.01592,2.80584 0.004,0.10334 -0.5766,0.1536 -2.5348,0.21929 -2.19206,0.0735 -18.24097,0.0738 -37.218673,6e-4 z m 76.481903,6.83794 c -5.51506,-0.13096 -10.74349,-0.56283 -13.63156,-1.12595 -0.52469,-0.10231 -1.44617,-0.21924 -2.04772,-0.25985 -2.0712,-0.13982 -2.15722,-0.26593 -0.24124,-0.35365 1.96895,-0.0901 34.64228,-0.0695 35.83611,0.0226 0.84658,0.0653 0.92356,0.0828 0.72885,0.16484 -0.11973,0.0505 -0.75014,0.12348 -1.4009,0.16221 -0.76339,0.0454 -1.36322,0.12315 -1.69054,0.21902 -0.27903,0.0817 -0.73905,0.17131 -1.02228,0.19908 -0.867,0.085 -2.34023,0.26433 -3.77111,0.45901 -3.26177,0.44379 -7.86772,0.62886 -12.75961,0.51269 z m -17.31297,-6.33162 v -2.61034 h 29.02757 c 24.13335,0 29.01867,0.006 28.97477,0.0355 -0.0902,0.0607 -1.11111,0.59571 -1.35823,0.71179 -0.84654,0.39764 -1.61438,0.59169 -2.54985,0.64442 -0.26505,0.0149 -0.56343,0.0446 -0.66306,0.066 -0.41581,0.0892 -0.65253,0.26594 -0.83131,0.62054 -0.174,0.34511 -0.54878,0.63021 -1.38419,1.05296 -0.80259,0.40613 -1.26014,0.59889 -3.61978,1.52494 l -1.43831,0.56447 h -23.0788 -23.07881 z m 5.71597,-3.97516 c -2.22347,-0.0107 -4.41917,-0.0213 -4.87932,-0.0234 l -0.83665,-0.004 v -0.46524 -0.46523 l 4.04937,-0.0199 c 5.54949,-0.0273 44.06383,0.003 47.75582,0.0373 7.27675,0.0681 9.56161,0.14556 9.9305,0.33686 l 0.0648,0.0336 -0.0648,0.0417 c -0.36578,0.23541 -7.83263,0.39394 -23.6649,0.50244 -4.95198,0.0339 -27.02763,0.0516 -32.35482,0.0259 z m 55.7569,3.4137 -4.33718,-0.0354 0.91028,-0.49085 c 0.50065,-0.26997 2.31589,-1.25694 4.03387,-2.19326 l 3.12359,-1.70241 h 25.46631 25.4663 l -0.63919,0.65183 c -0.86403,0.88112 -1.73097,1.48757 -3.11901,2.18183 -1.69245,0.84653 -3.25032,1.33991 -4.63097,1.46663 -1.1066,0.10157 -37.13157,0.19627 -46.274,0.12164 z m -7.01445,2.96794 c -3.45959,-0.0908 -3.26627,-0.0785 -3.26627,-0.20618 0,-0.23443 1.09252,-0.46324 1.96762,-0.4121 1.01481,0.0593 1.38955,-0.0251 1.7823,-0.40135 0.18336,-0.17567 0.4929,-0.31125 0.86478,-0.37879 1.07513,-0.19524 14.16804,-0.30356 37.42514,-0.30961 l 23.1383,-0.006 -0.0964,0.82995 c -0.053,0.45648 -0.10419,0.83643 -0.11377,0.84433 -0.0755,0.0624 -59.38184,0.10063 -61.70173,0.0398 z M 65.467476,171.20435 v -0.76208 l 30.990316,0.0319 c 30.336798,0.0312 33.335628,0.0549 33.911408,0.26793 0.1469,0.0543 0.12015,0.0808 -0.237,0.23445 -0.42474,0.18272 -0.85369,0.2144 -2.11616,0.15633 -0.66844,-0.0308 -0.6912,-0.0242 -1.32673,0.37911 -0.6368,0.40416 -4.20297,0.45026 -35.002171,0.45251 l -26.219663,0.002 z m 0.84388,6.12483 c 1.729409,-1.92338 3.912505,-3.12832 6.274238,-3.46302 2.41211,-0.34185 5.122989,-0.39261 23.361057,-0.43745 19.672489,-0.0484 28.548989,0.008 28.316659,0.17939 -0.25754,0.19011 -2.4115,1.40429 -5.13606,2.89515 l -2.64151,1.44543 H 91.120033 65.754329 Z m 137.280814,-5.44271 c -3.43424,-0.069 -4.68185,-0.1839 -4.84382,-0.44598 -0.0275,-0.0445 -0.15861,-0.13763 -0.29132,-0.20693 -0.19481,-0.10171 -0.48209,-0.12728 -1.49076,-0.13271 -1.05766,-0.006 -1.30124,-0.0292 -1.58676,-0.15292 l -0.33729,-0.14619 0.22371,-0.0611 c 0.74464,-0.20323 4.60722,-0.23219 30.02136,-0.22503 14.38957,0.004 28.07648,0.0302 30.41535,0.058 l 4.25248,0.0506 0.0449,0.33031 c 0.0247,0.18167 0.0658,0.48365 0.0914,0.67107 l 0.0465,0.34076 -26.90979,-0.0126 c -14.80038,-0.007 -28.13652,-0.0373 -29.63587,-0.0674 z m 2.68823,4.54088 c -1.52017,-0.83662 -3.29213,-1.83331 -3.93768,-2.21485 l -1.17374,-0.69371 4.35417,-0.0499 c 2.39479,-0.0274 14.14427,-0.0184 26.10994,0.02 l 21.75578,0.0699 1.681,0.81825 c 2.32688,1.13263 3.7608,2.06116 4.31244,2.79251 0.28354,0.37591 0.26512,0.45899 -0.11358,0.5123 -0.9635,0.13564 -9.22862,0.20299 -28.60499,0.2331 l -21.61939,0.0336 z m -60.23897,-8.67408 c 4.13857,-0.83084 7.40764,-1.24679 11.81305,-1.50306 1.08286,-0.063 2.44591,-0.15601 3.02899,-0.2067 1.2649,-0.10997 1.33607,-0.10988 2.49891,0.003 0.49978,0.0485 2.10136,0.13943 3.55906,0.20204 4.99867,0.21472 7.17852,0.4552 11.39656,1.25726 1.10369,0.20987 2.04078,0.39366 2.08243,0.40843 0.0416,0.0148 -7.88105,0.0256 -17.60599,0.0242 l -17.6817,-0.003 z m -22.23961,7.69458 c 0.6531,-0.39818 1.96951,-1.00113 2.55825,-1.17174 0.5199,-0.15066 0.82293,-0.18939 1.48181,-0.18939 1.03806,0 1.25103,-0.0879 1.32435,-0.54644 0.11991,-0.74987 1.02503,-1.29911 4.02699,-2.44365 l 1.69093,-0.64469 h 27.86371 27.8637 l 1.97862,0.79578 c 2.76388,1.11161 3.14293,1.3431 3.64871,2.22831 0.17085,0.29903 0.32836,0.46151 0.57593,0.59409 0.32081,0.17182 0.38996,0.17972 1.18115,0.13501 0.76982,-0.0435 0.89065,-0.0311 1.43877,0.14696 0.3291,0.10695 1.0584,0.42997 1.62066,0.71783 l 1.02228,0.52338 -39.26324,0.004 -39.26323,0.004 z m -4.12172,2.15246 c 0.28561,-0.19161 0.62601,-0.39285 0.75644,-0.44722 0.39483,-0.16456 1.56266,-0.26669 3.94887,-0.34531 3.51715,-0.11588 55.90902,-0.17576 67.77234,-0.0775 9.51763,0.0789 11.55268,0.12914 12.52814,0.30946 0.36708,0.0679 1.11403,0.44559 1.55665,0.7872 0.13657,0.1054 -4.13247,0.11712 -43.46515,0.11929 l -43.61659,0.002 z M 52.080411,488.57469 c -1.044277,-0.63146 -2.636486,-1.79856 -3.538242,-2.5936 l -1.639556,-1.44553 V 335.16099 185.78641 l 1.687025,-1.59532 c 0.94548,-0.89408 2.702688,-2.09729 3.997672,-2.73731 l 2.310648,-1.142 H 162.7456 270.59325 l 2.35665,1.12531 c 1.55702,0.74347 2.91881,1.68745 4.01341,2.78205 l 1.65675,1.65676 v 149.32336 149.32337 l -1.82951,1.65561 c -1.00624,0.91061 -2.62689,2.08061 -3.60146,2.60005 l -1.77194,0.94444 H 162.69812 53.979097 Z"
      borderPah=""
      rectX="40"
      rectY="170"
      rectWidth="245"
      rectHeigth="330"
      onClick={openModal}
    >
      <text
        transform="matrix(1.33333 0 0 1.33333 306.347 276.153)"
        fontWeight={700}
        fontSize={8}
        fontFamily="Scala Sans Offc"
        fill="black"
      >
        <tspan y="155" x="-125">
          Character Art
        </tspan>
      </text>
      <image
        xlinkHref={characterAvatar}
        width="230"
        height="330"
        x="48"
        y="170"
      />
      <path d="m 156.19,165.43 c -1.72,0.16 -4.26,0.36 -5.61,0.43 -1.35,0.1 -4.62,0.63 -7.26,1.19 l -4.78,0.99 -37.36,0.03 c -23.17,0 -37.42,0.13 -37.56,0.3 -0.1,0.2 -0.23,1.05 -0.32,1.91 -0.02265,0.53461 -0.08955,1.06643 -0.2,1.59 -0.04,0 -0.07,0.36 -0.1,0.82 -0.07,1.02 -1.52,4.69 -1.98,5.02 -0.2,0.13 -3.27,0.26 -6.8,0.26 h -6.44 l -3.23,3.23 -3.2,3.2 v 301.46 l 3.23,3.23 3.2,3.2 h 6.5 c 5.45,0 6.57,0.07 7,0.53 0.3,0.27 0.53,0.63 0.53,0.76 0,0.17 0.23,0.86 0.56,1.55 0.3,0.73 0.6,2.05 0.66,2.94 0.07,0.92 0.23,2.11 0.36,2.64 l 0.27,0.99 37.95,0.2 c 32.9,0.16 39.9,0.26 39.9,0.63 0,0.03 0.46,0.13 0.99,0.2 0.56,0.06 2.4,0.39 4.12,0.75 1.72,0.37 6.07,0.9 9.67,1.16 5.74,0.43 7.26,0.43 13.03,0 3.57,-0.27 8.29,-0.83 10.47,-1.26 2.17,-0.43 4.95,-0.95 6.13,-1.15 1.49,-0.27 13.96,-0.03 39,-0.37 h 36.8 l 0.17,-1.08 c 0.1,-0.56 0.3,-1.79 0.43,-2.71 0.13,-0.9 0.66,-2.57 1.15,-3.7 l 0.93,-2.07 h 13.33 l 3.23,-3.24 3.27,-3.27 V 184.4 l -3.2,-3.2 -3.23,-3.23 -6.7,-0.07 -6.74,-0.1 -0.89,-2.14 c -0.61379,-1.57685 -1.06611,-3.21188 -1.35,-4.88 l -0.4,-2.71 h -37.35 l -37.33,-0.03 -4.78,-1 c -8.6,-1.6 -17.35,-2.13 -26.07,-1.61 m 11.58,0.82 c 3.24,0.1 6.57,0.47 9.21,0.96 l 4.13,0.8 h -36.64 l 3.97,-0.76 c 2.17,-0.4 6.1,-0.86 8.74,-1 2.64,-0.13 4.85,-0.3 4.92,-0.36 0.06,-0.06 0.23,-0.06 0.36,0.04 0.1,0.06 2.5,0.23 5.31,0.32 m -37.32,4.63 c -0.53,0.3 -1.25,0.42 -2.01,0.3 -0.83,-0.14 -1.29,-0.04 -1.62,0.32 -0.36,0.46 -3.7,0.53 -30.89,0.53 H 65.44 v -1.65 h 32.93 c 28.94,0.03 32.8,0.07 32.08,0.5 m 62.73,0.56 c 1.88,0.72 2.74,1.25 2.94,1.75 0.33,0.89 1.09,1.22 2.14,0.95 0.47,-0.1 1.36,0.13 2.35,0.66 l 1.61,0.83 h -78.86 l 1.58,-0.83 c 0.71321,-0.39306 1.49301,-0.65073 2.3,-0.76 1.33,0.14 1.89,-0.03 1.89,-0.5 0,-0.69 0.9,-1.28 3.43,-2.24 l 2.34,-0.89 h 27.82 l 27.82,-0.03 2.64,1.06 m 66.9,-0.17 0.1,0.76 h -30.5 c -27.52,0 -30.56,-0.07 -30.95,-0.53 -0.3,-0.36 -0.76,-0.46 -1.62,-0.33 -0.68,0.1 -1.36,0 -1.98,-0.3 -0.73,-0.4 3.56,-0.46 32.01,-0.4 l 32.84,0.07 0.1,0.73 m -135.57,2.21 c 0,0.07 -1.78,1.1 -4,2.31 l -3.99,2.18 H 65.64 l 1.15,-1.19 c 0.7,-0.72 1.5,-1.33 2.38,-1.81 3,-1.55 3.13,-1.59 30.03,-1.59 13.92,-0.03 25.31,0.04 25.31,0.1 m 131.01,1.06 c 2.38,1.12 4.39,2.67 4.1,3.13 -0.1,0.17 -10.63,0.3 -25.38,0.3 h -25.18 l -4,-2.18 c -1.35754,-0.71786 -2.68843,-1.48504 -3.99,-2.3 0,-0.1 11.78,-0.1 26.17,-0.07 l 26.13,0.1 2.15,1.02 m -50,2.77 1,0.66 h -87.46 l 1,-0.66 c 0.98,-0.66 1.64,-0.66 42.73,-0.66 41.09,0 41.75,0 42.74,0.66 m 66.03,3.3 c 2.34,0.8 5.05,2.6 6.2,4.13 l 0.86,1.12 v 298.71 l -1.68,1.69 c -1.06302,1.01121 -2.249,1.88473 -3.53,2.6 l -1.89,0.96 H 54.06 l -1.95,-0.99 c -1.343073,-0.755 -2.586114,-1.67552 -3.7,-2.74 l -1.78,-1.78 V 185.99 l 1.45,-1.52 c 1.63885,-1.74793 3.677076,-3.07243 5.94,-3.86 1.62,-0.6 6.3,-0.63 108.64,-0.63 106.49,-0.03 106.95,-0.03 108.9,0.63 m 10.3,157.9 c 0.06,97.1 -0.04,138.24 -0.24,139.13 -0.2,0.73 -0.62,2.02 -0.99,2.8 -0.62,1.46 -0.66,8.95 -0.66,-141.26 V 188.03 l 0.9,2.15 0.88,2.14 0.1,146.2 m -236.21,1.05 c 0,83.06 -0.1,142.5 -0.23,142.36 -0.137966,-0.12492 -0.241307,-0.28338 -0.3,-0.46 0,-0.13 -0.33,-1.25 -0.72,-2.5 l -0.73,-2.25 V 193.18 l 0.7,-1.91 0.79,-2.34 c 0.1,-0.2 0.23,-0.4 0.33,-0.4 0.1,0 0.16,67.95 0.16,151.04 m 74.55,154.6 c 1.41,0.73 2.8,1.5 4.16,2.32 0.56,0.4 -3.24,0.43 -25.41,0.36 l -26.07,-0.1 -2.08,-0.8 c -1.334412,-0.50506 -2.564795,-1.25075 -3.63,-2.2 l -1.55,-1.42 25.54,-0.03 h 25.54 l 3.5,1.88 m 85.3,-1.39 c -0.96,0.73 -84.48,0.73 -85.47,0 -0.56,-0.43 4.56,-0.46 42.74,-0.5 38.21,0 43.33,0.07 42.73,0.5 m 53.46,0.53 c -1.25,1.29 -4.42,2.84 -6.73,3.26 -1.16,0.2 -11.06,0.3 -26.7,0.27 l -24.91,-0.1 4.12,-2.21 4.1,-2.25 h 51.11 l -0.99,1.03 m -58.38,2.01 c -0.72,0.4 -1.9,0.73 -2.63,0.73 -1.03,0.03 -1.4,0.2 -1.62,0.76 -0.23,0.46 -1.29,1.05 -3.37,1.88 l -3.03,1.19 h -54.45 l -2.22,-0.83 c -3.2,-1.22 -4.02,-1.68 -4.22,-2.5 -0.16,-0.6 -0.36,-0.7 -1.29,-0.54 -0.75,0.1 -1.51,-0.06 -2.57,-0.62 l -1.48,-0.76 h 78.2 l -1.31,0.7 m -73.8,3.2 c 0.5,0.49 0.93,0.62 1.79,0.45 0.73,-0.1 1.48,0.04 2.08,0.37 0.89,0.46 -1.88,0.5 -32.11,0.52 H 65.44 V 497.9 H 95.8 c 29.63,0 30.36,0 30.99,0.63 m 133.28,0.27 -0.1,0.92 -33,0.07 c -30.16,0.06 -32.93,0.03 -32.04,-0.43 0.6,-0.33 1.35,-0.47 2.08,-0.37 0.83,0.17 1.25,0.04 1.68,-0.43 0.53,-0.59 1.75,-0.59 31.02,-0.62 l 30.46,-0.04 -0.1,0.9 m -78.14,3.13 c 0,0.17 -0.6,0.3 -1.32,0.3 -0.72929,-0.0392 -1.45929,0.0627 -2.15,0.3 -0.1,0.03 -0.56,0.13 -1.05,0.16 -0.53,0.03 -2.34,0.26 -4.06,0.5 -6.37,0.92 -21.05,0.46 -26.56,-0.8 -0.62518,-0.1 -1.25691,-0.15348 -1.89,-0.16 -0.69,-0.04 -1.25,-0.13 -1.25,-0.3 0,-0.13 8.61,-0.23 19.14,-0.23 10.53,0 19.14,0.1 19.14,0.23" />
    </InteractiveElement>
  </g>
);

const mapStateToProps = state => ({
  characterAvatar: state.homePageReducer.backgroundReducer.characterAvatar
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterArt);
