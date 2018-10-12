import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './navigation.scss';
import classNames from 'classnames';


const Navigation = ({location}) => (
  <React.Fragment>
    <svg height="0" width="0">
      <defs>
        <filter id='shadow'>
          <feComponentTransfer in="SourceGraphic">
            <feFuncR type="discrete" tableValues="0" />
            <feFuncG type="discrete" tableValues="0" />
            <feFuncB type="discrete" tableValues="0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="1" />
          <feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer>
          <feOffset dx="5" dy="1" result="shadow" />
          <feComposite in="SourceGraphic" />
        </filter>

        <linearGradient id="tab-1-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{stopColor: 'rgba(136, 195, 229, 1.0)' }} />
          <stop offset="100%" style={{stopColor: 'rgba(118, 160, 192, 1.0)' }} />
        </linearGradient>

        <linearGradient id="tab-2-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{stopColor: 'rgba(149, 190, 233, 1.0)' }} />
          <stop offset="100%" style={{stopColor: 'rgba(112, 153, 213, 1.0)' }} />
        </linearGradient>

        <linearGradient id="tab-3-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{stopColor: 'rgba(61, 149, 218, 1.0)' }} />
          <stop offset="100%" style={{stopColor: 'rgba(43, 130, 197, 1.0)' }} />
        </linearGradient>

        <linearGradient id="tab-4-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{stopColor: 'rgba(72, 204, 243, 1.0)' }} />
          <stop offset="100%" style={{stopColor: 'rgba(71, 194, 243, 1.0)' }} />
        </linearGradient>
      </defs>
      <path id="tab-shape" d="m 116.486,29.036 c -23.582,-8 -14.821,-29 -42.018,-29 h -62.4 C 5.441,0.036 0,5.376 0,12.003 V 29.452667 H 122 V 29.036 Z" />
    </svg>
    <nav style={{ width: '100%' }} role="navigation" className={styles['main-navigation']}>
      <ul>
        <li className={classNames({[styles['tab-1']]: true, [styles.active]: location === "/"})} data-bg-color="rgba(118, 160, 192, 1.0)">
          <Link to="/">
            <span>Skills</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        <li className={classNames({[styles['tab-2']]: true, [styles.active]: location ===  "/equipment"})} data-bg-color="rgba(112, 153, 213, 1.0)">
          <Link to="/equipment">
            <span>Inventory</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        <li className={classNames({[styles['tab-3']]: true, [styles.active]: location === "/test"})} data-bg-color="rgba(43, 130, 197, 1.0)">
          <Link to="/background">
            <span>Depiction</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        <li className={classNames({[styles['tab-3']]: true, [styles.active]: location === "/test"})} data-bg-color="rgba(43, 130, 197, 1.0)">
          <Link to="/spells">
            <span>Spells</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  </React.Fragment>
);

const mapStateToProps = (state) => ({
  location: state.router.location.pathname
});

export default connect(mapStateToProps, () => ({}))(Navigation);
