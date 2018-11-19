import React from 'react';
import withSimpleForm from '../../../../form/withSimpleForm';
import ScrollableTextElement from '../../ScrollableTextElement';

const Journal = ({onClick, renderValue, setWrapperRef}) => (
  <ScrollableTextElement
    value={renderValue}
    onClick={onClick}
    setWrapperRef={setWrapperRef}
    fontSize={16}
    rectX="43"
    rectY="815"
    rectWidth="750"
    rectHeigth="220"
    fillPath="m 52.072231,1041.1145 c -1.413599,-0.8583 -3.10028,-2.0656 -3.748179,-2.6828 l -1.178,-1.1223 V 930.97459 824.63982 l 1.820545,-1.57004 c 1.001299,-0.86353 2.591598,-1.97064 3.533997,-2.46025 l 1.713454,-0.89021 202.615862,-0.3269 c 111.43872,-0.1798 274.79311,-0.34067 363.00979,-0.35749 l 160.39393,-0.0306 1.84037,0.89093 c 1.01223,0.49001 2.80797,1.76083 3.99051,2.82406 l 2.15012,1.93313 v 105.92567 105.92568 l -1.88505,1.7376 c -1.03677,0.9557 -2.6272,2.1162 -3.5343,2.5789 -1.63091,0.8321 -4.10124,0.8443 -222.47024,1.1016 -121.45155,0.1431 -284.91487,0.3711 -363.25182,0.5067 l -142.430809,0.2465 z"
    borderPah="M44.55 820.41C44.55 820.41 41.19 823.78 41.19 823.78C41.19 823.78 41.19 1038.28 41.19 1038.28C41.19 1038.28 44.55 1041.65 44.55 1041.65C44.55 1041.65 47.95 1045.05 47.95 1045.05C47.95 1045.05 545.1 1044.55 545.1 1044.55C545.1 1044.55 787.35 1044.55 787.35 1044.55C787.35 1044.55 790.55 1041.28 790.55 1041.28C790.55 1041.28 793.75 1038.05 793.75 1038.05C793.75 1038.05 793.75 823.29 793.75 823.29C793.75 823.29 790.38 819.92 790.38 819.92C790.38 819.92 786.98 816.52 786.98 816.52C786.98 816.52 544.93 816.52 544.93 816.52C544.93 816.52 47.95 817.02 47.95 817.02C47.95 817.02 44.55 820.42 44.55 820.42M782.69 819.95C783.79 820.48 785.53 821.77 786.56 822.79C786.56 822.79 788.47 824.64 788.47 824.64C788.47 824.64 788.47 1036.34 788.47 1036.34C788.47 1036.34 786.75 1038.14 786.75 1038.14C785.63696 1039.3131 784.33147 1040.2871 782.89 1041.02C782.89 1041.02 780.72 1042.08 780.72 1042.08C780.72 1042.08 545.12 1042.18 545.12 1042.18C545.12 1042.18 54.65 1042.73 54.65 1042.73C54.65 1042.73 52.5 1041.68 52.5 1041.68C51.073489 1040.9392 49.754671 1040.0072 48.58 1038.91C48.58 1038.91 46.8 1037.22 46.8 1037.22C46.8 1037.22 46.8 824.7 46.8 824.7C46.8 824.7 48.54 823.15 48.54 823.15C49.47 822.29 50.42 821.47 50.62 821.34C50.99 821.04 53.3 819.95 54.39 819.56C54.65 819.46 415.77 818.9 545.26 818.93C545.26 818.93 780.72 819.0 780.72 819.0C780.72 819.0 782.7 819.95 782.7 819.95M45.44 931.26C45.44 931.26 45.41 1034.98 45.41 1034.98C45.41 1034.98 44.75 1033.49 44.75 1033.49C43.1 1029.89 43.16 1035.34 43.16 931.03C43.16 836.72 43.2 833.28 43.79 831.37C44.39 829.39 45.15 827.57 45.38 827.57C45.41 827.57 45.48 874.24 45.44 931.27M790.71 829.82C790.71 829.82 791.44 832.03 791.44 832.03C791.44 832.03 791.44 1028.94 791.44 1028.94C791.44 1028.94 790.74 1030.89 790.74 1030.89C790.46 1031.65 790.23 1032.43 790.05 1033.23C790.02 1033.46 789.89 1033.66 789.72 1033.66C789.59 1033.66 789.46 987.16 789.46 930.3C789.46 873.45 789.59 827.08 789.72 827.28C789.89 827.44 790.35 828.57 790.72 829.82"
  >
    <text
      transform="matrix(1.33333 0 0 1.33333 306.347 276.153)"
      fontWeight={700}
      fontSize={8}
      fontFamily="Scala Sans Offc"
      fill="black"
    >
      <tspan
        y="570"
        x="70"
      >
        Journal
      </tspan>
    </text>
  </ScrollableTextElement>
);

export default withSimpleForm({formName:"journal", label:"Back Story", type:"textarea", allowLineBreak: true})(Journal);
