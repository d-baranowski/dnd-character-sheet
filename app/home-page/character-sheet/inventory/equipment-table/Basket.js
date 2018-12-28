import React from 'react';
import PropTypes from 'prop-types';
import {paginate} from "../../page-one/elements/features-and-fraits/state/featuresAndTraitsReducer";
import styles from "./EquipmentTable.scss";
import LeftArrow from "../../../../form/LeftArrow";
import AddButton from "../../../../form/AddButton";
import RightArrow from "../../../../form/RightArrow";
import {
  addItem,
  decrementItem,
  decrementPage,
  incrementItem,
  incrementPage,
  openModal
} from "../state/equipmentActions";

import connect from "react-redux/es/connect/connect";

const Basket = ({basket, transform, basketPage, incrementItem, decrementItem, incrementPage, decrementPage, basketMax, openModal, addItem, basketName}) => (
  <g transform={transform}>
    <text  x="80.73" y="711.2" strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight="400">
      <tspan x="80.73" y="711.2">NAME</tspan>
    </text>
    <text  x="262.44" y="711.2" strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight="400">
      <tspan x="262.44" y="711.2">QUANTITY</tspan>
    </text>
    <text  x="327.92" y="711.2" strokeWidth="1.33" fontFamily="Scala Sans Offc" fontSize="9.33" fontWeight="400">
      <tspan x="327.92" y="711.2">WEIGHT</tspan>
    </text>

    <g fill="none" stroke="#000">
      <path
        strokeWidth="1.1599971"
        d="M 76.5,715 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z m 0,20 H 388 Z"
      />
      <path
        strokeWidth=".9599975999999999"
        d="M 324.7,714.7 V 935 Z M 388,715 V 935 Z M 260.5,714.95 V 933.87 Z M 76.5,715 v 220.42 z"
      />
    </g>

    {
      basket && paginate(Object.values(basket), 11, basketPage).map((val, index) => {
        return (
          <React.Fragment>
            <foreignObject x="76" y={715.20 + index * 20}>
              <div
                style={{
                  height: '20px',
                  width: '184px',
                  border: 'none',
                  fontFamily: 'Scala Sans Offc',
                  fontSize: 'medium',
                  textAlign: 'center',
                  overflow: 'hidden'
                }}
                onClick={() => openModal(val.id)}
                className={styles.presable}
              >
                {val.name}
              </div>
            </foreignObject>
            <foreignObject x="260" y={715.20 + index * 20}>
              <div style={{
                height: '20px',
                width: '65px',
                border: 'none',
                fontFamily: 'Scala Sans Offc',
                fontSize: 'medium',
                textAlign: 'center' }}
                   className={styles.presable}
                   onContextMenu={(e) => {e.preventDefault(); decrementItem(val.id); return false}}
                   onClick={() => incrementItem(val.id)}
              >
                {val.quantity}
              </div>
            </foreignObject>
            <foreignObject  x="325" y={715.20 + index * 20}>
              <div style={{
                height: '20px',
                width: '63px',
                border: 'none',
                fontFamily: 'Scala Sans Offc',
                fontSize: 'medium',
                textAlign: 'center' }}>
                {val.weight}
              </div>
            </foreignObject>
          </React.Fragment>
        )})
    }

    { basketPage !== 1 && <LeftArrow onClick={() => decrementPage(basketName)} x={219 - 93} y={945} /> }
    <AddButton onClick={() => addItem(basketName)} x={219} y={950} />
    { basketMax && basketPage < basketMax && <RightArrow onClick={() => incrementPage(basketName)} x={219 + 82} y={945}  /> }
  </g>
);

const mapStateToProps = (state, ownProps) => ({
  basket: state.equipmentReducer.inventory[ownProps.basketName],
  basketPage: state.equipmentReducer.pages[ownProps.basketName].number,
  basketMax: state.equipmentReducer.pages[ownProps.basketName].maxPage,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (basket) => dispatch(addItem(basket)),
  openModal: (id) => dispatch(openModal(id)),
  incrementItem: (id) => dispatch(incrementItem(id)),
  decrementItem: (id) => dispatch(decrementItem(id)),
  incrementPage: (basketName) => dispatch(incrementPage(basketName)),
  decrementPage: (basketName) => dispatch(decrementPage(basketName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
