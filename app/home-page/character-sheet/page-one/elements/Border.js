import React from 'react';

const Border = ({isHovered}) => (
  <g>
    <g>
      <g filter={isHovered && "url(#hardGlow)"}  >
        <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
          <path id="SavingThrowsBorders" d="M204.66 530.402l-.002 17.367c.316 5.13 1.078 19.529 2.257 23.355l.085.277-.246.152c-.017.01-.756.478-1.505 1.263.243 1.383.556 2.69.956 3.843l.05.139-1.015 11.302-.439.136c-1.03.32-3.969 1.605-3.969 3.264v.687H98.273v-.687c0-1.66-2.865-2.92-3.968-3.264l-.44-.137-1.014-11.301.05-.14c.4-1.151.71-2.453.953-3.833a8.613 8.613 0 0 0-1.503-1.272l-.246-.153.085-.276c1.177-3.821 1.94-18.195 2.255-23.333l.002-17.37c-.316-5.13-1.078-15.528-2.257-19.353l-.085-.277.246-.153a8.63 8.63 0 0 0 1.505-1.262c-.243-1.383-.555-2.69-.956-3.843l-.049-.14 1.014-11.301.44-.136c1.103-.345 3.968-1.604 3.968-3.264v-.687h102.56v.687c0 1.66 2.864 2.919 3.968 3.264l.44.136 1.013 11.3-.049.14c-.399 1.152-.71 2.455-.954 3.835a8.526 8.526 0 0 0 1.503 1.27l.246.155-.085.276c-1.177 3.82-1.939 14.195-2.255 19.334m-1.567-25.444c.005-.013.182-.431.415-1.052.103-.93.183-2.863-.544-4.99-1.205-3.524-4.152-6.102-8.539-7.536H104.65c-9.423 3.066-9.32 10.33-9.06 12.5.241.654.432 1.106.444 1.139.363 1.547-.142 2.885-.856 3.924 1.381 7.57.678 17.21.643 17.646l-.002 28.962c.037.479.741 10.138-.644 17.71.711 1.049 1.211 2.4.84 3.973-.006.013-.184.432-.417 1.052-.103.929-.183 2.862.544 4.99 1.206 3.524 4.152 6.103 8.54 7.536h89.775c9.423-3.066 9.32-10.331 9.061-12.501-.242-.653-.433-1.105-.445-1.138-.363-1.547.142-2.885.857-3.924-1.382-7.571-.679-17.211-.644-17.646l.002-28.963c-.037-.478-.74-10.137.644-17.711-.71-1.048-1.21-2.4-.838-3.971m3.026 66.117c-.699-2.471-1.243-7.063-1.633-11.436-.073 3.272-.024 8.035.614 12.264a9.799 9.799 0 0 1 1.02-.828m-2.338 5.864c.035.082.464 1.09.868 2.338l.207-2.31c-.277-.82-.51-1.706-.71-2.631-.386.76-.589 1.644-.365 2.603m.17 10.135l.507-5.657a16.997 16.997 0 0 0-.389-1.484 12.036 12.036 0 0 1-.634 3.504c-.823 2.408-2.816 5.459-7.534 7.375h3.637c.512-2.105 3.276-3.321 4.413-3.738m-104.386 3.738h3.632c-6.802-2.761-8.044-7.94-8.146-10.931-.156.503-.3 1.03-.406 1.535l.507 5.658c1.137.417 3.902 1.633 4.413 3.738m-5.318-13.844l.207 2.309c.4-1.236.822-2.225.848-2.276.228-.974.031-1.868-.35-2.638a24.325 24.325 0 0 1-.705 2.605m-.244-5.062c.638-4.223.688-8.983.615-12.265-.39 4.372-.934 8.963-1.633 11.434.233.163.608.446 1.018.83m-1.018-60.788c.7 2.47 1.243 7.062 1.633 11.435.073-3.271.024-8.035-.614-12.263a9.464 9.464 0 0 1-1.019.828m2.337-5.864c-.035-.083-.464-1.09-.868-2.338l-.207 2.308c.277.82.511 1.706.711 2.632.386-.762.588-1.644.364-2.602m-.17-10.135l-.507 5.657c.102.486.24.994.39 1.483a12.03 12.03 0 0 1 .633-3.503c.823-2.41 2.816-5.46 7.534-7.375h-3.637c-.51 2.105-3.276 3.32-4.413 3.738m104.386-3.738h-3.632c6.802 2.76 8.044 7.94 8.147 10.93.155-.503.3-1.03.405-1.534l-.507-5.658c-1.137-.417-3.9-1.633-4.413-3.738m5.318 13.843l-.207-2.308a27.29 27.29 0 0 1-.847 2.276c-.229.974-.032 1.867.35 2.638.198-.916.43-1.794.704-2.606m.244 5.063c-.638 4.222-.688 8.982-.615 12.264.391-4.372.934-8.962 1.633-11.433a9.556 9.556 0 0 1-1.018-.831 M204.66 530.402l-.002 17.367c.316 5.13 1.078 19.529 2.257 23.355l.085.277-.246.152c-.017.01-.756.478-1.505 1.263.243 1.383.556 2.69.956 3.843l.05.139-1.015 11.302-.439.136c-1.03.32-3.969 1.605-3.969 3.264v.687H98.273v-.687c0-1.66-2.865-2.92-3.968-3.264l-.44-.137-1.014-11.301.05-.14c.4-1.151.71-2.453.953-3.833a8.613 8.613 0 0 0-1.503-1.272l-.246-.153.085-.276c1.177-3.821 1.94-18.195 2.255-23.333l.002-17.37c-.316-5.13-1.078-15.528-2.257-19.353l-.085-.277.246-.153a8.63 8.63 0 0 0 1.505-1.262c-.243-1.383-.555-2.69-.956-3.843l-.049-.14 1.014-11.301.44-.136c1.103-.345 3.968-1.604 3.968-3.264v-.687h102.56v.687c0 1.66 2.864 2.919 3.968 3.264l.44.136 1.013 11.3-.049.14c-.399 1.152-.71 2.455-.954 3.835a8.526 8.526 0 0 0 1.503 1.27l.246.155-.085.276c-1.177 3.82-1.939 14.195-2.255 19.334m-1.567-25.444c.005-.013.182-.431.415-1.052.103-.93.183-2.863-.544-4.99-1.205-3.524-4.152-6.102-8.539-7.536H104.65c-9.423 3.066-9.32 10.33-9.06 12.5.241.654.432 1.106.444 1.139.363 1.547-.142 2.885-.856 3.924 1.381 7.57.678 17.21.643 17.646l-.002 28.962c.037.479.741 10.138-.644 17.71.711 1.049 1.211 2.4.84 3.973-.006.013-.184.432-.417 1.052-.103.929-.183 2.862.544 4.99 1.206 3.524 4.152 6.103 8.54 7.536h89.775c9.423-3.066 9.32-10.331 9.061-12.501-.242-.653-.433-1.105-.445-1.138-.363-1.547.142-2.885.857-3.924-1.382-7.571-.679-17.211-.644-17.646l.002-28.963c-.037-.478-.74-10.137.644-17.711-.71-1.048-1.21-2.4-.838-3.971m3.026 66.117c-.699-2.471-1.243-7.063-1.633-11.436-.073 3.272-.024 8.035.614 12.264a9.799 9.799 0 0 1 1.02-.828m-2.338 5.864c.035.082.464 1.09.868 2.338l.207-2.31c-.277-.82-.51-1.706-.71-2.631-.386.76-.589 1.644-.365 2.603m.17 10.135l.507-5.657a16.997 16.997 0 0 0-.389-1.484 12.036 12.036 0 0 1-.634 3.504c-.823 2.408-2.816 5.459-7.534 7.375h3.637c.512-2.105 3.276-3.321 4.413-3.738m-104.386 3.738h3.632c-6.802-2.761-8.044-7.94-8.146-10.931-.156.503-.3 1.03-.406 1.535l.507 5.658c1.137.417 3.902 1.633 4.413 3.738m-5.318-13.844l.207 2.309c.4-1.236.822-2.225.848-2.276.228-.974.031-1.868-.35-2.638a24.325 24.325 0 0 1-.705 2.605m-.244-5.062c.638-4.223.688-8.983.615-12.265-.39 4.372-.934 8.963-1.633 11.434.233.163.608.446 1.018.83m-1.018-60.788c.7 2.47 1.243 7.062 1.633 11.435.073-3.271.024-8.035-.614-12.263a9.464 9.464 0 0 1-1.019.828m2.337-5.864c-.035-.083-.464-1.09-.868-2.338l-.207 2.308c.277.82.511 1.706.711 2.632.386-.762.588-1.644.364-2.602m-.17-10.135l-.507 5.657c.102.486.24.994.39 1.483a12.03 12.03 0 0 1 .633-3.503c.823-2.41 2.816-5.46 7.534-7.375h-3.637c-.51 2.105-3.276 3.32-4.413 3.738m104.386-3.738h-3.632c6.802 2.76 8.044 7.94 8.147 10.93.155-.503.3-1.03.405-1.534l-.507-5.658c-1.137-.417-3.9-1.633-4.413-3.738m5.318 13.843l-.207-2.308a27.29 27.29 0 0 1-.847 2.276c-.229.974-.032 1.867.35 2.638.198-.916.43-1.794.704-2.606m.244 5.063c-.638 4.222-.688 8.982-.615 12.264.391-4.372.934-8.962 1.633-11.433a9.556 9.556 0 0 1-1.018-.831" />
        </g>
      </g>
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.45317754}}
        d="m 614.21342,273.25647 c -7.04681,-2.9469 -11.34086,-5.76387 -15.48883,-10.16094 -3.37827,-3.58114 -6.23167,-8.81722 -7.44324,-13.65856 -1.0617,-4.2425 -1.07054,-10.58107 -0.0186,-13.30794 1.20237,-3.11672 0.91189,-7.97513 -0.65772,-11.00048 -1.14493,-2.2068 -1.15647,-2.32257 -0.60699,-6.09034 1.35928,-9.3206 1.71113,-16.33462 1.55668,-31.03142 -0.2057,-19.57463 -0.20796,-99.159008 -0.003,-118.279344 0.15785,-14.750308 -0.2003,-21.852597 -1.5654,-31.042661 -0.55983,-3.76887 -0.54755,-3.900916 0.56894,-6.117897 1.56326,-3.104149 1.89557,-8.007047 0.74515,-10.993976 -1.10789,-2.876472 -1.0084,-9.078422 0.22202,-13.8403722 1.44511,-5.5928762 3.72818,-9.4931374 8.16721,-13.9524027 4.21278,-4.2319951 8.34632,-6.9457971 13.81236,-9.0682671 l 3.39766,-1.319317 132.23111,0.11558 132.23111,0.11558 4.46449,2.145643 c 8.75775,4.208995 13.90984,8.9682121 17.30074,15.9814586 3.35661,6.9423129 4.29812,14.6704974 2.43115,19.9555184 -1.23825,3.505229 -1.00154,7.274461 0.66524,10.592944 l 1.18493,2.359161 -0.94587,7.111421 c -0.92335,6.942113 -0.94831,8.929396 -1.04833,83.471841 -0.0564,41.99822 0.0665,78.90954 0.273,82.02513 0.20651,3.1156 0.68965,7.8695 1.07365,10.56424 l 0.69818,4.89951 -1.20269,2.54228 c -1.72143,3.6388 -1.9196,6.95405 -0.64469,10.78515 0.86598,2.60227 0.98636,3.69315 0.77224,6.99806 -0.56859,8.77631 -3.15303,14.6068 -9.16082,20.66682 -4.31587,4.35338 -7.69938,6.58391 -13.90371,9.16579 l -3.48062,1.44843 -131.56628,-0.0192 -131.56629,-0.0191 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.45317754}}
        d="M 908.1941,11.947309 C 906.83313,5.7582546 906.27958,3.9866761 904.72487,0.84445951 901.45455,-5.7651944 896.03381,-11.112377 888.68808,-14.974711 l -3.09658,-1.628165 4.45611,0.0065 4.45612,0.0065 1.21477,2.203233 c 1.48812,2.698997 4.1677,4.9497317 8.57801,7.2051637 l 3.34937,1.7128647 0.71372,8.1414611 c 0.39254,4.4778033 0.57194,8.6512855 0.39867,9.2744045 l -0.31504,1.132944 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.45317754}}
        d="m 588.18074,11.920136 c -0.28582,-1.796922 0.0272,-7.0368019 0.9086,-15.2112927 l 0.25047,-2.3229066 3.48655,-1.7217234 c 3.83138,-1.8920059 8.44257,-6.0519173 8.95013,-8.0742163 0.29901,-1.191327 0.30535,-1.192858 4.89534,-1.18095 l 4.59594,0.01192 -3.19849,1.698289 c -10.68212,5.6718501 -16.98767,14.10983837 -18.94776,25.35561 l -0.61208,3.51174 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.45317754}}
        d="m 587.02277,68.070709 c 0,-2.648209 -1.92459,-16.880782 -2.96256,-21.908495 l -1.02914,-4.984953 1.18508,-0.999595 c 0.65179,-0.549777 1.24694,-0.937733 1.32255,-0.862125 0.72117,0.721173 2.45538,30.185317 1.77666,30.185317 -0.16093,0 -0.29259,-0.643567 -0.29259,-1.430149 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.11329439}}
        d="m 585.32085,218.61892 c -0.15168,-0.16145 -0.67885,-0.60877 -1.17149,-0.99404 -0.49264,-0.38527 -0.9941,-0.77791 -1.11435,-0.87253 -0.21477,-0.169 -0.2126,-0.19605 0.1229,-1.52948 1.39924,-5.56124 2.77882,-15.12419 4.02036,-27.86832 l 0.25386,-2.60577 0.0729,2.71907 c 0.11726,4.37349 -0.11081,13.2012 -0.48442,18.75022 -0.28281,4.20026 -1.13688,12.16806 -1.34525,12.55006 -0.0574,0.10517 -0.15358,0.0647 -0.35451,-0.14921 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.11329439}}
        d="m 587.02478,240.03644 c -0.004,-0.18694 -0.12646,-1.63994 -0.2725,-3.22889 l -0.26553,-2.88901 0.44125,-1.41618 c 0.24268,-0.7789 0.69632,-2.43583 1.00809,-3.68206 0.31178,-1.24624 0.58261,-2.3167 0.60186,-2.3788 0.0454,-0.14651 0.70525,1.56508 0.92806,2.40736 0.26483,1.00112 0.37272,2.5307 0.2587,3.66747 -0.0769,0.76666 -0.21826,1.31074 -0.56519,2.17529 -0.25446,0.63411 -0.8373,2.17258 -1.29521,3.41882 -0.528,1.43698 -0.83511,2.14155 -0.83953,1.926 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.11329439}}
        d="m 602.03641,274.27967 c -0.74716,-2.13851 -1.3413,-3.13677 -2.75346,-4.62635 -2.11825,-2.23437 -5.44712,-4.3609 -9.02921,-5.768 -0.49849,-0.19582 -0.96183,-0.41622 -1.02964,-0.48978 -0.0708,-0.0768 -0.42953,-3.5974 -0.84284,-8.27186 -0.79712,-9.0155 -0.78954,-8.13626 -0.0926,-10.74128 l 0.37463,-1.40031 0.13955,1.47283 c 1.12079,11.82866 7.1325,20.94864 17.89647,27.14959 1.21978,0.7027 4.10934,2.13518 5.19405,2.57493 l 0.56609,0.22949 -5.18677,0.006 c -4.05199,0.005 -5.1976,-0.0248 -5.23626,-0.13544 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.05664719}}
        d="m 908.116,11.539623 c -0.7147,-3.2519516 -1.44453,-6.0192112 -1.96309,-7.443406 -0.7679,-2.1089824 -2.18088,-4.8821021 -3.47477,-6.8196004 -2.56032,-3.8338696 -5.8581,-7.1017476 -9.92873,-9.8386826 -1.57828,-1.06118 -2.636,-1.674466 -5.35673,-3.105945 l -1.77415,-0.933441 4.44038,0.01391 4.44037,0.01392 0.65923,1.189591 c 0.80372,1.450329 0.98786,1.755066 1.37454,2.274678 0.84438,1.13466 1.87658,2.149035 3.19063,3.1355373 1.51631,1.1383361 2.64292,1.8050396 5.72137,3.3857761 1.18393,0.6079275 2.16084,1.1120054 2.17091,1.1201722 0.019,0.015431 0.52558,5.69944747 0.77213,8.6641157 0.29013,3.4888865 0.46178,6.8331127 0.41122,8.0117787 -0.0237,0.552541 -0.067,0.835982 -0.19329,1.266275 l -0.16275,0.554386 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.05664719}}
        d="m 908.05359,30.693116 c -0.7567,-1.772416 -1.04123,-3.217296 -0.97503,-4.951285 0.0472,-1.23553 0.15478,-1.704856 0.7014,-3.058948 0.57935,-1.435155 0.92651,-2.362001 1.54614,-4.12793 l 0.49434,-1.408864 0.0346,0.304244 c 0.019,0.167334 0.15299,1.639086 0.29774,3.27056 l 0.26318,2.966316 -0.34533,1.112281 c -0.58589,1.887121 -0.99713,3.413947 -1.45366,5.396985 -0.13698,0.595009 -0.25922,1.091999 -0.27164,1.104421 -0.0124,0.01242 -0.14369,-0.261079 -0.29171,-0.60778 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{ fill:'#ffffff', strokeWidth: 0.05664719}}
        d="m 909.36543,73.132668 c -0.0594,-0.790782 -0.0476,-8.979528 0.0167,-11.589811 0.20452,-8.29657 0.72265,-15.25846 1.61681,-21.724198 0.0797,-0.576385 0.15656,-1.08241 0.17078,-1.124499 0.0172,-0.05082 0.14284,0.03178 0.3741,0.245886 0.44402,0.411089 1.40861,1.198242 2.04541,1.669167 0.27199,0.201135 0.49452,0.386812 0.49452,0.412615 0,0.0258 -0.11349,0.485774 -0.2522,1.022157 -1.51536,5.859808 -3.09577,17.009734 -4.32551,30.516752 l -0.10057,1.10462 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{fill: '#ffffff', strokeWidth: 0.05664719}}
        d="m 911.12074,218.66801 c -0.0182,-0.14799 -0.12283,-0.93185 -0.23246,-1.7419 -0.81603,-6.02945 -1.30527,-12.81859 -1.50632,-20.90282 -0.0596,-2.39444 -0.0648,-11.02377 -0.007,-11.66932 0.0346,-0.38693 0.0372,-0.37596 0.10932,0.45318 0.12737,1.46518 0.67949,6.93285 0.91807,9.09187 1.05037,9.5051 2.18358,16.69935 3.37338,21.416 0.16944,0.67169 0.30777,1.24525 0.3074,1.27456 -3.7e-4,0.0293 -0.13856,0.14901 -0.3071,0.266 -0.43401,0.30127 -1.6278,1.26454 -2.11578,1.70723 -0.22691,0.20585 -0.43366,0.37427 -0.45944,0.37427 -0.0258,0 -0.0618,-0.12108 -0.08,-0.26907 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{fill: '#ffffff', strokeWidth: 0.05664719}}
        d="m 909.61393,239.88042 c -0.33584,-1.03683 -1.1372,-3.21072 -1.70857,-4.63489 -0.65549,-1.63386 -0.73223,-1.96861 -0.7743,-3.37779 -0.0425,-1.42466 0.14079,-2.65176 0.58942,-3.94546 0.23942,-0.69041 0.58436,-1.50777 0.6363,-1.50777 0.0207,0 0.14808,0.49071 0.28312,1.09046 0.3181,1.41279 0.88317,3.52806 1.28848,4.82326 0.55144,1.76214 0.52868,1.19283 0.19489,4.87506 -0.16086,1.7745 -0.29909,3.23299 -0.30719,3.24109 -0.008,0.008 -0.0991,-0.24569 -0.20215,-0.56396 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
      <path
        style={{fill: '#ffffff', strokeWidth: 0.05664719}}
        d="m 885.25033,274.03476 c 1.91754,-0.83256 3.36128,-1.5536 5.02793,-2.51107 9.90908,-5.69267 15.94701,-14.38399 17.48537,-25.16936 0.16184,-1.13464 0.31552,-2.7509 0.31552,-3.31832 0,-0.22497 0.0208,-0.36393 0.0497,-0.3326 0.13318,0.14407 1.09625,3.86366 1.09929,4.24571 9.9e-4,0.12462 -0.32655,3.89017 -0.72788,8.36789 l -0.72969,8.14129 -0.86662,0.34347 c -4.97471,1.97163 -8.86513,4.74324 -10.73418,7.64726 -0.60172,0.93491 -1.04508,1.88456 -1.23638,2.64826 l -0.0745,0.2974 -5.21499,-0.002 -5.215,-0.002 z"
        transform="matrix(0.45516614,0,0,0.45516614,-141.2603,275.9145)" />
    </g>
  </g>
);

export default Border;
