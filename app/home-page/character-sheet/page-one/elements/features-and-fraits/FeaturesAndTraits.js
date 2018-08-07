import React from 'react';
import {connect} from 'react-redux';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import {FeaturesAndTraitsDrawerRoute} from './FeaturesAndTraitsDrawer';
import styles from "./FeaturesAndTraits.css";
import {openModal, setPage} from './state/featuresAndTraitsActions';

const FeaturesAndTraits = (
  {
    pagedFeats,
    showEditor,
    setPage,
    currentPage,
    maxPage,
    openModal
  }) => (
  <g transform="translate(-250, 0)">
    <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
      <path id="FeaturesAndTraitsBorder" d="m 585,51.105 v 416.36815 l -0.439,0.136 c -1.116,0.35 -4.012,1.624 -4.012,3.323 v 0.625 H 409.453 v -0.625 c 0,-1.699 -2.897,-2.974 -4.014,-3.323 L 405,467.47215 V 51.635 c -0.637,-2.549 -3.125,-13.056 -2.34,-18.666 l 0.043,-0.308 0.296,-0.097 c 0.027,-0.009 0.855,-0.289 2.001,-0.793 v -3.284 l 0.439,-0.136 c 1.117,-0.347 4.014,-1.619 4.014,-3.323 v -0.625 h 171.096 v 0.625 c 0,1.7 2.896,2.974 4.012,3.323 L 585,28.488 v 3.34 c 1.075,0.466 1.845,0.727 1.87,0.736 l 0.296,0.097 0.043,0.308 c 0.739,5.277 -1.42,14.89 -2.209,18.135 M 406.25,460.76415 c 0.164,0.341 0.446,0.904 0.844,1.6 V 50.246 c 0,-3.393 -0.287,-7.24 -0.844,-11.466 z m 0,-425.48715 c 0.892,5.625 1.344,10.652 1.344,14.97 v 412.95615 c 1.655,2.67 4.601,6.385 8.483,7.104 h 157.845 c 3.88,-0.719 6.828,-4.437 8.484,-7.107 V 50.246 c 0,-4.317 0.452,-9.344 1.344,-14.969 v -2.912 c -2.704,-1.276 -6.45,-3.577 -7.099,-6.712 H 413.218 c -0.639,3.085 -4.275,5.362 -6.968,6.65 z m 176.656,427.08415 c 0.398,-0.695 0.68,-1.257 0.844,-1.599 V 38.78 c -0.557,4.226 -0.844,8.073 -0.844,11.466 z m 0.844,4.208 v -3.644 c -1.271,2.23 -3.622,5.633 -6.886,7.382 h 2.506 c 0.483,-2.086 3.278,-3.325 4.38,-3.738 m -173.118,3.738 h 2.504 c -3.264,-1.749 -5.615,-5.152 -6.886,-7.382 v 3.644 c 1.103,0.413 3.899,1.652 4.382,3.738 M 403.612,33.41 c -0.422,3.694 0.538,9.538 1.388,13.674 V 32.868 c -0.602,0.254 -1.093,0.437 -1.388,0.543 m 2.638,-4.02 v 1.79 c 2.392,-1.194 5.313,-3.108 5.943,-5.527 h -1.561 c -0.483,2.086 -3.279,3.325 -4.382,3.738 m 177.5,0 c -1.102,-0.413 -3.897,-1.652 -4.38,-3.738 h -1.694 c 0.641,2.46 3.66,4.402 6.074,5.593 z m 2.507,4.019 c -0.42275,-0.153536 -0.84187,-0.316913 -1.257,-0.49 v 13.516 c 0.813,-4.08 1.657,-9.52 1.257,-13.027" />
    </g>
    <text
      transform="matrix(1.33333 0 0 1.33333 621.98 1018.052)"
      fontWeight={700}
      fontSize={6.5}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 3.3929999 6.8965001 10.439 13.9425 18.4925 22.2885 25.792 29.263 30.888 35.4445 36.939499 40.443001 44.238998 48.106499 50.056499 53.560001"
      >
        FEATURES & TRAITS
      </tspan>
    </text>
    <foreignObject
      x={540}
      y={430}
      width={240}
      height={520}
    >
      <div className={styles.featsContainer}>
        {pagedFeats.map((feat) => (
          <div
            className={styles.featHeader}
            onClick={() => openModal(feat)}
          >
            {feat.name}
          </div>
        ))}
      </div>
    </foreignObject>
    <svg
      x={648}
      y={970}
      width={25}
      height={25}
      onClick={showEditor}
    >
      <use xlinkHref="#icon-add" />
    </svg>
    {currentPage !== 1 && <svg
      x={555}
      y={965}
      width={35}
      height={35}
      onClick={() => setPage(currentPage - 1)}
    >
      <use xlinkHref="#icon-arrow-left" />
    </svg>}
    {currentPage !== maxPage &&<svg
      x={730}
      y={965}
      width={35}
      height={35}
      onClick={() => setPage(currentPage + 1)}
    >
      <use xlinkHref="#icon-arrow-right" />
    </svg>}
  </g>
);

const mapStateToProps = (state) => ({
  pagedFeats: state.homePageReducer.featsAndTraitsReducer.pagedFeats,
  currentPage: state.homePageReducer.featsAndTraitsReducer.currentPage,
  maxPage: state.homePageReducer.featsAndTraitsReducer.maxPage
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(FeaturesAndTraitsDrawerRoute)),
  setPage: (page) => dispatch(setPage(page)),
  openModal: (feat) => dispatch(openModal(feat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesAndTraits);
