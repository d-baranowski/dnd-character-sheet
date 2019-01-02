import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './navigation.scss';
import classNames from 'classnames';
import spellSlotsPerClass from '../home-page/character-sheet/spells/spellSlotsPerClass';

const Navigation = ({ location, classesWithSpellsSlots }) => (
  <React.Fragment>
    <svg height="0" width="0">
      <defs>
        <filter id="shadow">
          <feComponentTransfer in="SourceGraphic">
            <feFuncR type="discrete" tableValues="0" />
            <feFuncG type="discrete" tableValues="0" />
            <feFuncB type="discrete" tableValues="0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="1" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feOffset dx="5" dy="1" result="shadow" />
          <feComposite in="SourceGraphic" />
        </filter>

        <linearGradient id="tab-1-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{ stopColor: 'rgba(136, 195, 229, 1.0)' }} />
          <stop
            offset="100%"
            style={{ stopColor: 'rgba(118, 160, 192, 1.0)' }}
          />
        </linearGradient>

        <linearGradient id="tab-2-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{ stopColor: 'rgba(149, 190, 233, 1.0)' }} />
          <stop
            offset="100%"
            style={{ stopColor: 'rgba(112, 153, 213, 1.0)' }}
          />
        </linearGradient>

        <linearGradient id="tab-3-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{ stopColor: 'rgba(61, 149, 218, 1.0)' }} />
          <stop
            offset="100%"
            style={{ stopColor: 'rgba(43, 130, 197, 1.0)' }}
          />
        </linearGradient>

        <linearGradient id="tab-4-bg" x1="0%" y1="0%" x2="0%" y2="65%">
          <stop offset="0%" style={{ stopColor: 'rgba(72, 204, 243, 1.0)' }} />
          <stop
            offset="100%"
            style={{ stopColor: 'rgba(71, 194, 243, 1.0)' }}
          />
        </linearGradient>
      </defs>
      <path
        id="tab-shape"
        d="m 116.486,29.036 c -23.582,-8 -14.821,-29 -42.018,-29 h -62.4 C 5.441,0.036 0,5.376 0,12.003 V 29.452667 H 122 V 29.036 Z"
      />
    </svg>
    <nav
      style={{ width: '100%' }}
      role="navigation"
      className={styles['main-navigation']}
    >
      <ul>
        <li
          style={{
            strokeWidth: 2,
            fill: 'white',
            stroke: 'black',
            zIndex: location === `/` ? 100 : 10
          }}
        >
          <Link to="/">
            <span>Stats</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        <li
          style={{
            strokeWidth: 2,
            fill: 'white',
            stroke: 'black',
            zIndex: location === `/equipment` ? 100 : 9
          }}
        >
          <Link to="/equipment">
            <span>Inventory</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        <li
          style={{
            strokeWidth: 2,
            fill: 'white',
            stroke: 'black',
            zIndex: location === `/background` ? 100 : 8
          }}
        >
          <Link to="/background">
            <span>Depiction</span>
            <svg viewBox="0 0 122 40">
              <use xlinkHref="#tab-shape" />
            </svg>
          </Link>
        </li>
        {classesWithSpellsSlots.map((magicUser, index) => (
          <li
            key={magicUser}
            style={{
              strokeWidth: 2,
              fill: 'white',
              stroke: 'black',
              zIndex:
                location === `/spells-of-${magicUser}`
                  ? 100
                  : classesWithSpellsSlots.length - index + 3
            }}
          >
            <Link to={`/spells-of-${magicUser}`}>
              <span>{magicUser}</span>
              <svg viewBox="0 0 122 40">
                <use xlinkHref="#tab-shape" />
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </React.Fragment>
);

const mapStateToProps = state => {
  const classesWithSpellsSlots = Object.entries(
    state.homePageReducer.classesReducer.classes
  )
    .filter(
      ([key, value]) =>
        value.level > 0 &&
        Object.keys(spellSlotsPerClass).find(value => value === key)
    )
    .map(([key]) => key);

  return {
    location: state.router.location.pathname,
    classesWithSpellsSlots
  };
};

export default connect(mapStateToProps, () => ({}))(Navigation);
