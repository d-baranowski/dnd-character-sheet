import React from 'react';
import MenuDrawer from '../../menu-drawer/MenuDrawer';
import PanZoom from '../PanZoom';
import GrayDecorations from '../../GrayDecorations';
import CharacterArt from './character-art/CharacterArt';
import CharacterArtPicker from './character-art/CharacterArtPicker';
import AlliesAndOrganisations from './allies-and-organisations/alliesAndOrganisations';
import BackStory from './back-story/backStory';
import Journal from './journal/Journal';
import Age from './top-bar/Age';
import Height from './top-bar/Height';
import Weight from './top-bar/Weight';
import Eyes from './top-bar/Eyes';
import Skin from './top-bar/Skin';
import Hair from './top-bar/Hair';

const Background = () => (
  <React.Fragment>
    <CharacterArtPicker/>
    <MenuDrawer>
      <PanZoom>
        <GrayDecorations/>
        <g transform="translate(50)" id="DnD-logo">
          <path
            d="M150.5 745.08c.28 0 .28-.41 0-.41h-.39v.41h.39m.27-.72c.66.15.52 1.15-.27 1.15h-.86v-1.8h.47v.56h.17l.43-.57h.5v.1l-.44.56m-.43-1.16c.85 0 1.33.62 1.33 1.4 0 .8-.48 1.41-1.33 1.41-.84 0-1.32-.62-1.33-1.4 0-.8.49-1.41 1.33-1.41m1.76 1.4c0-.96-.63-1.76-1.76-1.76-1.12 0-1.75.8-1.75 1.77 0 .95.63 1.76 1.75 1.76 1.13 0 1.76-.8 1.76-1.76"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            d="M145.47 759.26a9.53 9.53 0 0 1-4.3 1.05v.01h-3.5c-2.79 0-4.1.04-5.07.26-.84.2-1.58.68-1.59.68l-.21.14.02-.25c0-.08.2-1.97 2.45-3.61.44-.31.74-.62.74-1.73v-.73c.48.3 1.01.56 1.6.78-.2-.17-.44-.43-.64-.7a6.23 6.23 0 0 0 3.92.64v.28h1.96c2.57 0 4.05-1.65 4.05-4.52 0-2.85-1.48-4.48-4.05-4.48h-.77a3.26 3.26 0 0 0 1.1-2.41c0-.68-.22-1.3-.6-1.84 2.45.03 4.01.46 5.7 1.59.74.5 1.37 1.07 1.88 1.71a8.88 8.88 0 0 1 1.82 5.48 8.45 8.45 0 0 1-4.5 7.65m-10.58-12.24a.6.6 0 0 1 .07.56l-.57 1.55 1.42-.85c.14-.08.26-.17.38-.28l.86.06c.65.07 1.27-.03 1.83-.24v4.41a2.2 2.2 0 0 1-.68-.33l-.36-.33-.4.3c-.24.19-.62.3-1.02.3a2.3 2.3 0 0 1-1.72-.76c-.26-.3-.49-.6-.7-.9v-3.5c.35-.27.7-.26.9 0m-17.5.25l-.55-.76.2 2.15a5.86 5.86 0 0 0 1.98 3.7 4.87 4.87 0 0 1-.5-.07l-1.92-.4 1.39 1.4c.48.48 1.14.83 1.73 1.14l.2.12a8.27 8.27 0 0 1-4.01 4.72 9.54 9.54 0 0 1-4.3 1.05v.01h-3.52c-2.78 0-4.1.04-5.06.26-.83.2-1.58.68-1.59.68l-.21.14.02-.25c0-.08.2-1.97 2.45-3.61.44-.31.74-.62.74-1.73v-10.09c0-1.08-.2-1.38-.71-1.68l-1.66-.98-.4-.23h9.15c2.56 0 4.16.43 5.9 1.59.24.16.46.34.68.53a7.75 7.75 0 0 0-.01 2.31m21.48 7.87v.48c-.31-.1-.76-.25-.95-.37.32 0 .64-.04.95-.1m-27.59-8.06h-1.96v9h1.96c2.57 0 4.05-1.65 4.05-4.52 0-2.85-1.48-4.48-4.05-4.48"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            d="M137.02 746.9c.27-.05.77-.4.77-.88 0-.3-.13-.52-.4-.7a1.7 1.7 0 0 0-.43-.18c.08.28.12.58.11.9-.02.55-.05.86-.05.86m-.44 6.63c-2.6-.13-4.84-2.34-5.99-3.9.2-.07.42-.16.62-.33l.98-.8c.3.67 1 2.06 2.08 3.3.96 1.1 2.66 1.21 3.55.54.57.52 2.54 1 3.58.7a5.08 5.08 0 0 1-3.46 1.61c-1.23 0-1.92-.6-2.1-.33-.22.35.83.86.83.86-1.44-.06-2.5-1.76-2.93-1.55-.26.13.39.95.39.95a6.35 6.35 0 0 1-2.66-3.39c1.21 1.5 3.58 2.56 5.11 2.34m-6.01-8.43c-.52.46-1.29 1.1-1.87 1.56-.66-1.13-2.07-2.6-3.5-2.6-2.62 0-3.93 3.71-.99 6.75-.17.06-.34.06-.4.06-.25 0-.5-.06-.66-.18l-1.15-.8.26 1.48.1.23a6.37 6.37 0 0 1-1.58-1.08l-1.14-1.24.12 1.75.08.4c.06.28.13.63.09.75a.23.23 0 0 1-.08.09c-.55-.42-2.03-1.74-2.2-3.67 0 0 .28.4.53.5.16.06.31-.02.15-.5-.06-.19-1.5-4.07 1.33-6.76 0 0-.31.79-.13 1.03.1.12.21.13.38-.08l.38-.47c.24-.27.5-.52.77-.73.85-.6 2-1.07 3.3-1.07 3.49 0 5.34 2.4 6.36 4.43l-.15.15m10.03-.43c0 1.68-1.63 2.98-3.49 2.8.53-.08 1.27-.65 1.27-1.45 0-1.31-1.63-1.72-2.54-1.51.96.66.84 2.58-.32 3.27.4-1.08-.78-2.14-1.92-1.2-.64.51-2.1 1.74-2.76 2.26-.65.53-1.42.22-1.72.45-.34.26-.12 1-.6 1.27-.39.23-.78.1-1.23.25-.42.14-.73.47-.68.9-.17-.31-.18-.85.13-1.22.31-.36.84-.58 1.05-.98.28-.52-.19-1.23 1.05-2.2.6-.47 1.52-1.24 2.12-1.76 1-.89.47-2 .6-2.96a2.35 2.35 0 0 1 1.67-1.91c-.52.47-.72 1.66.01 2.4.04-.95.72-2.43 2.27-2.84 1.65-.44 3.4.5 3.77 1.15-.64-.28-1.84.03-2.33.49 1.93-.28 3.65 1.07 3.65 2.79m-12.77 8.08s-.25.8-1.09 1.1c.17-.57.39-1.1 1.09-1.1m-9.4.11c.83.83 2.53 1.35 2.65 1.8.1.45-.77 1.2-1.1 1.35 1.2.05 1.81-.18 1.81-.18a2.14 2.14 0 0 0-.24 1.75c.66-1.59 3.02-1.84 3.6-3.15-.08.56-.61 1.2-1.23 1.57-.34.86-.09 2.45.32 2.89-.14-2.29 3.12-3.6 3.8-5.25-.4 1.42-1.92 2.32-2.64 3.17-.24.57-.06 1.52.2 1.85-.08-1.53 1.58-2.72 2.46-3.58 1.04-1 1.33-1.9 1.2-2.62.22-.06.53-.29.48-.66.33.08.67.46.75.7.17-1.14-.5-2.35-1.25-2.7 0 0 .2.54-.14.95-.34.41-1.3.42-1.61.4 0 0 .4.58.23.88-.2.37-2.06.2-2.9-.1.29.03.96-.04 1.2-.14-.13-.2-.48-1.02-.23-1.27.23-.22.53.17.53.17s-.3-.9-.09-1.11c.21-.2.66-.06.66-.06-.28-.7-1.37-1.2-2.13-1.2.28.1.72.58.8.87-.2-.1-.73-.16-.93-.12.25.1.74.73.59 1.44-.23 1.04-1.67 1.17-2.4.67.23.7.94 1.35 1.49 1.56-.32.12-.7.21-1.1.28.46.38 1.62.7 2.21.66-.9.23-2.56-.06-3.31-.95.24 0 .86-.12 1.1-.2a6.76 6.76 0 0 1-2.87-1.6c.11.6.28 1.1.14 1.46-.2.51-.82.73-2.05.47m1.91 5.34a4.19 4.19 0 0 0 1.18 3.48 4.9 4.9 0 0 0 4.03 1.42c2.91-.15 4.31-2.16 4.31-4.31 0-1.04-.53-2.43-1.26-3.42l-.13.13c-.15.14-.31.3-.49.45a8.8 8.8 0 0 0-1.38 1.47c.8 1.45.34 3.51-1.34 3.51-.99 0-1.81-.9-1.74-2.1a4.75 4.75 0 0 1-.34-2.13c-.48.3-.89.64-1.08 1.1l-.62 1.49-.49-1.53a2.7 2.7 0 0 1-.09-1.17c-.23.33-.49.86-.56 1.61"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
        </g>
        <g>
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.94"
            d="M575.13 733.71v-38.14c14.56.08 16.46 0 18.94 3.23v37.5c-4.66-2.48-9.47-2.55-18.94-2.59"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.06"
            d="M574.52 730.88c16.24.05 17.69 1.17 19.16 2.3m-18.55-34.5c19.6-2.23 17.93 3.58 18.8 3.76"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path fill="#fff" d="M767.21 141.19H348.69V60.33H767.2v80.86"/>
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2.3599940999999998"
            d="M767.21 141.19H348.69V60.33H767.2v80.86"
          />
          <path
            fill="#fff"
            d="M259.42 753.06V679.8c1.04 2.52 2.1 3.57 2.1 3.57v66.13s-1.06 1.04-2.1 3.56"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.77"
            d="M259.42 753.06V679.8c1.04 2.52 2.1 3.57 2.1 3.57v66.13s-1.06 1.04-2.1 3.56"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.77"
            d="M261.51 738.87s1.07 10.33 8.4 10.33h22s7.17-2.45 20.5-2.45M261.51 694s1.07-10.33 8.4-10.33h22s7.17 2.44 20.5 2.44"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.77"
            d="M575.4 738.87s-1.06 10.33-8.4 10.33h-22s-7.16-2.45-20.5-2.45M575.4 694s-1.06-10.33-8.4-10.33h-22s-7.16 2.44-20.5 2.44"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="1.06"
            d="M553.5 746.75c-5.2-.9-11.46-1.92-17.2-1.92H300.62c-5.74 0-12 1.01-17.2 1.92m0-60.64c5.2.9 11.46 1.92 17.2 1.92H536.3c5.74 0 12-1.01 17.2-1.92"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="#fff"
            d="M577.5 753.06V679.8c-1.04 2.52-2.1 3.57-2.1 3.57v66.13s1.06 1.04 2.1 3.56"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            d="M577.5 753.06V679.8c-1.04 2.52-2.1 3.57-2.1 3.57v66.13s1.06 1.04 2.1 3.56"
            transform="matrix(1.33333 0 0 -1.33333 0 1056)"
          />
          <path
            fill="none"
            stroke="#b5b6b6"
            strokeWidth=".46666549999999996"
            d="M353.33 89.1h410.4M353.33 123.87h410.4"
          />
        </g>
        <g transform="translate(10, 10)">
          <path
            id="dragon"
            d="m 306.66,7.44 c -7.79,1.71 -15.4,7.72 -19.14,15.18 -2.97,5.97 -4.39,15.54 -3.36,22.74 0.2,1.28 0.4,2.34 0.43,2.37 0.3,0.33 17.06,-4.72 17.65,-5.31 0.1,-0.1 0.23,-1.29 0.3,-2.67 0.36,-8.42 5.28,-15.38 11.75,-16.67 3.63,-0.73 8.25,1.12 10.49,4.22 2.15238,3.185728 2.80277,7.15385 1.78,10.86 -0.26,0.9 -1.22,2.87 -2.14,4.42 -0.92819,1.577252 -1.7146,3.233746 -2.35,4.95 -0.94773,2.775562 -2.23054,5.425134 -3.82,7.89 l -1.16,1.78 2.67,-0.2 c 4.52,-0.36 8.58,-1.68 11.72,-3.82 0.52046,-0.388536 1.07236,-0.733059 1.65,-1.03 0.4,0 0.2,7.8 -0.2,8.32 -0.23,0.3 -1.06,0.63 -1.85,0.76 l -1.45,0.23 0.86,-1.25 c 0.79,-1.23 1.85,-3.8 1.85,-4.53 0,-0.16 -0.27,-0.1 -0.56,0.17 -0.83,0.73 -3.2,1.88 -5.02,2.44 -0.83,0.27 -4.49,0.7 -8.12,0.96 -8.84,0.66 -12.54,1.12 -14.49,1.85 -1.58,0.59 -1.58,0.59 -0.99,-0.07 1.03,-1.15 5.15,-2.94 7.76,-3.4 3,-0.53 3.23,-0.66 4.59,-2.34 1.87801,-2.512392 3.31516,-5.32582 4.25,-8.32 1.1,-3.17 1.69,-7.03 1.13,-7.03 -0.17,0 -0.8,0.73 -1.4,1.62 -3.13,4.85 -8.3,7.4 -21.8,10.73 -4,0.99 -8.52,2.3 -10.13,2.97 -0.97,0.43 -1.97,0.78 -3,1.05 -0.17,-0.2 3.03,-2.11 4.88,-2.94 2.2,-0.99 5.11,-1.84 11.65,-3.53 5.3,-1.38 7.42,-2.37 8.41,-4.02 0.92,-1.55 3.22,-6.85 2.7,-7.92 v -1.03 l -0.95,1.3 c -2,2.54 -4.53,4.6 -7.43,6.03 -3.33,1.62 -5.24,2.24 -13.43,4.49 -6.63,1.81 -10.3,3.23 -12.9,5.05 -2.18,1.48 -4.42,3.96 -5.28,5.74 -0.63,1.32 -0.9,1.58 -1.65,1.58 -1.29,0 -2.47,0.53 -3.37,1.49 -0.75,0.79 -0.75,0.79 -1.32,0.2 -0.86996,-1.213514 -1.39207,-2.641531 -1.51,-4.13 v -0.96 l -0.83,0.76 c -0.86,0.8 -1.91,3.27 -2.28,5.35 l -0.23,1.25 h -3.7 c -16.56,-0.03 -49,-1.88 -80.08,-4.62 -6.08,-0.52 -15.05,-1.25 -19.94,-1.65 l -8.87,-0.66 -4.99,-1.61 c -8.8,-2.84 -15.18,-3.86 -22.44,-3.57 -3.13,0.1 -5.21,0.4 -7.59,1.03 l -3.96,1.02 c -0.4,0.1 0.1,-0.2 1.1,-0.66 4.28,-2.01 11.21,-3.47 16.36,-3.47 4.32,0 10.92,1.1 15.84,2.54 2.28,0.7 -4.52,-4.38 -8.74,-6.5 -3.47499,-1.722906 -7.15919,-2.986827 -10.96,-3.76 -4.03,-0.82 -4.36,-0.72 -2.18,0.73 1.55,0.99 2.58,2.14 2.58,2.87 0,0.5 -2.64,0.4 -7.26,-0.36 -6.14,-1 -11.52,-1.2 -13.04,-0.5 -0.99,0.43 -0.96,0.46 2.11,1.16 3.53,0.79 4.26,1.38 3.14,2.5 -0.46,0.5 -1.55,0.86 -3.47,1.2 -4.88,0.82 -8.51,2.14 -11.84,4.25 -1.13,0.72 -1.46,0.76 -11.88,0.96 -17.43,0.36 -11.72,1.12 -21.95,2.54 -5.25,0.72 -11.28,1.88 -12.11,2.3 -0.5,0.27 -0.6,0.93 -0.66,4.5 l -0.1,4.19 -1.32,0.23 c -0.72,0.13 -4.39,0.69 -8.15,1.28 l -6.86,1.1 v 55.63 l 0.92,-0.13 c 1.09,-0.2 51.05,-6.44 51.55,-6.44 0.2,0 0.65,-1.73 0.33,-4.91 v -4.92 l 3.2,-0.26 c 4.91,-0.4 19.17,-0.3 29.96,0.16 18.71,0.76 37.46,1.95 55.28,3.53 17.12,1.49 28.11,2.38 37.12,2.97 l 8.91,0.6 4.3,4.02 c 16,15.08 28.77,22.01 44.21,24.1 11.58,1.54 26.63,-1.16 37.06,-6.64 2.74,-1.45 3.43,-1.72 3.56,-1.32 0.33,0.82 -0.5,3.46 -1.84,6.04 -1.39,2.67 -1.36,2.7 1.61,0.95 6.2,-3.63 11.36,-11.74 15.25,-23.99 1.22,-3.82 1.45,-4.29 2.11,-4.29 0.4,0 1.19,-0.1 1.72,-0.2 l 1.75,1.49 1.32,-0.5 v -1.38 l 2.08,-0.36 m 0,0 c 7.68,-3.53 2.41,12.46 4.4,-94.77 -2.7,-5.7 -6.7,-10.77 -14.06,-13.11 -4.56651,-1.4457903 -9.41696,-1.7547366 -14.13,-0.9 M 87.75,59.74 c -0.7,0.96 -0.8,1 -3.37,1 -4.65,0 -4.12,0.65 -9.1,0.98 -7.2,0.5 -16.83,1.62 -21.45,2.48 -2.28,0.4 -4.26,0.63 -4.4,0.5 -0.16,-0.14 -0.22,-0.6 -0.16,-1.03 0.07,-0.66 0.4,-0.82 2.08,-1.19 6.17,-1.28 16.8,-2.47 27.23,-3.07 9.7,-0.52 -8.06,-0.52 1.25,-0.6 l 8.68,-0.06 -0.76,1 m 44.78,0.2 c 15.03374,0.83629 30.05249,1.923107 45.05,3.26 32.63,2.77 57.58,4.22 78.87,4.55 l 4.45,0.07 0.1,1.12 0.1,1.12 -8.51,-0.23 c -23.53,-0.6 -44.72,-1.88 -74.85,-4.49 -19.93125,-1.810025 -39.90393,-3.130423 -59.9,-3.96 -4.78,-0.2 -8.77,-0.43 -8.87,-0.5 -0.07,-0.1 0.66,-0.52 1.65,-0.98 1.75,-0.86 1.85,-0.86 7.4,-0.66 3.1,0.1 9.63,0.43 14.51,0.7 m 157.57,1.08 c 0,0.43 -2.45,2.54 -3.67,3.2 -1.28,0.66 -3.8,0.73 -4.88,0.13 -0.8,-0.4 -0.8,-0.43 -0.17,-0.89 1.63257,-1.120313 3.45571,-1.933609 5.38,-2.4 2.15,-0.37 3.34,-0.37 3.34,-0.04 M 85.83,61.89 c 0,0.06 -0.6,1.05 -1.32,2.18 -1.497789,2.338443 -2.728804,4.83737 -3.67,7.45 -0.62,1.89 -0.62,1.89 1.42,0.4 1.62,-1.15 6,-3 9.67,-4.12 2.341519,-0.67138 4.76416,-1.017953 7.2,-1.03 l 4.19,-0.2 1.12,-1.51 c 0.58741,-0.790463 1.22541,-1.542037 1.91,-2.25 l 0.8,-0.76 8.57,0.33 c 16.8,0.63 33.8,1.69 51.12,3.14 5.28,0.43 14.85,1.25 21.29,1.78 24.35,2.05 54.61,3.66 68.7,3.66 h 4.2 l 0.36,1.75 c 0.20792,0.989029 0.55115,1.944686 1.02,2.84 l 0.66,1.12 0.76,-1.65 c 0.67352,-1.639649 2.03976,-2.895998 3.73,-3.43 1.48,-0.46 3.4,-0.1 7.22,1.45 l 2.71,1.1 0.17,-2.15 c 0.13,-1.85 0.3,-2.28 1.08,-2.94 1.13,-1 1.98,-0.86 5.58,0.89 3.3,1.58 10.83,7 10.36,7.43 -0.06,0.06 -1.45,-0.4 -3.07,-1.03 -2,-0.76 -3,-1.02 -3.16,-0.76 -0.14,0.2 -0.4,1.59 -0.63,3.07 -0.5,3.24 -1.06,4.42 -2.24,4.72 -0.73,0.2 -1.03,0.07 -1.75,-0.8 L 283,81.56 282.04,84.2 c -0.59,1.75 -1.18,2.8 -1.71,3.16 -0.76,0.47 -0.9,0.47 -2.44,-0.3 l -1.65,-0.82 v 1.26 c 0,2.87 3.13,8.11 6.17,10.33 0.51,0.4 1.07,0.76 1.65,1.05 0.06,-0.03 -0.2,-0.96 -0.6,-1.98 -0.36431,-1.027844 -0.5536,-2.109522 -0.56,-3.2 l 0.1,-1.29 1.65,1.2 c 2.8,2 2.77,2 2.41,0.02 -0.99,-5.21 1.58,-9.8 6,-10.75 3.34,-0.73 7.37,0.76 10.17,3.73 0.96,0.99 1.82,1.65 1.91,1.45 0.3,-0.5 -0.16,-4.62 -0.72,-6.64 -0.3,-0.95 -1.1,-2.77 -1.75,-4.05 l -1.25,-2.35 3.3,0.8 c 1.81,0.42 3.36,0.69 3.46,0.62 0.07,-0.1 -0.53,-1.12 -1.39,-2.3 -1.8478,-2.457982 -4.05994,-4.619538 -6.56,-6.41 -1.82,-1.22 -1.2,-1.29 1.15,-0.13 5.61,2.77 11.29,8.9 12.31,13.33 l 0.23,0.86 -3.07,-0.96 c -1.05935,-0.343896 -2.12629,-0.663976 -3.2,-0.96 -0.06,0 0.73,0.93 1.75,2.05 2.6,2.87 4.82,6.3 7.23,11.22 l 2.04,4.19 0.93,-2.87 c 1.09,-3.47 2.08,-4.98 3.86,-5.97 0.86502,-0.573922 1.91927,-0.789076 2.94,-0.6 2.14669,0.361497 4.19993,1.14676 6.04,2.31 l 0.89,0.63 -0.07,9.27 -0.1,9.3 m 0,0 -2.14,0.4 -2.21,0.3 -0.43,-3.53 c -0.6,-5.9 -2.71,-16.14 -3.37,-16.14 -0.86,0 -1.91,1.92 -3.37,6.1 -1.98,5.65 -2.77,7.6 -3.06,7.33 -0.53788,-1.16501 -1.02501,-2.35279 -1.46,-3.56 -1.94,-5.11 -5.7,-11.98 -8.44,-15.25 l -0.76,-0.95 v 1.15 c 0,2.8 -1.59,9.47 -2.28,9.47 -0.13,0 -0.63,-0.95 -1.16,-2.14 -1.25,-2.9 -3.46,-5.31 -5.97,-6.47 -2.3,-1.12 -3.27,-1.22 -3,-0.4 1.58,5.15 2.37,11.98 1.88,16.34 -0.56,4.95 -2.08,9.64 -3.53,10.86 -0.46,0.4 -3.7,0.5 -19.74,0.56 -33.2,0.2 -52.3,-0.73 -103.15,-5.02 -26.9,-2.28 -46.04,-3.33 -68.15,-3.8 -29.2,-0.59 -37.62,0.73 -50.75,3.47 -0.85,0.2 -1.71,0.35 -2.58,0.46 -0.16,0 0,-8.25 -0.3,-21.12 V 66.34 l 0.77,-0.3 c 0.82,-0.3 7.88,-1.48 11.94,-2 7.86,-0.96 5.25,-1.89 16.5,-2.09 l 6.04,-0.16 c 0.76,-0.03 1.39,0 1.39,0.1 m 247.5,16.56 c 0,4.66 -0.07,8.39 -0.14,8.32 -0.06,-0.07 -1.68,-2.67 -3.63,-5.77 -3.43,-5.55 -3.82,-6.47 -3.16,-7.73 0.59,-1.12 4.48,-3 6.7,-3.26 0.13,-0.04 0.23,3.76 0.23,8.44 M 46.57,73.27 c 0,0.56 -0.2,1.1 -0.4,1.16 -0.23,0.06 -3.37,0.56 -6.93,1.09 l -6.53,0.92 V 74.4 l 6.2,-1.03 c 8.09,-1.32 7.66,-1.32 7.66,-0.1 m 0,22.38 v 20.03 l 1.42,-0.07 c 2.07,-0.13 12.24,1.72 10.95,1.98 -0.53,0.13 -6.17,0.96 -12.54,1.88 -6.33,0.9 -12.04,1.72 -12.6,1.82 l -1.1,0.2 v -43.9 l 1.1,-0.2 C 36.07,77 45.12,75.72 45.84,75.62 l 0.73,-0.04 v 20.07 m 76.06,10.59 c 21.32,1.12 34.22,2.05 54.95,3.83 41.77,3.63 74.84,5.11 101.9,4.62 6.73,-0.13 12.28,-0.17 12.28,-0.07 0,0.1 -0.7,0.7 -1.55,1.29 l -1.59,1.09 -14.35,0.1 c -25.64,0.2 -55.18,-1.06 -86.63,-3.73 l -19.14,-1.65 c -56.6,-4.82 -87.68,-4.98 -114.44,-0.46 -2.21,0.4 -4.16,0.72 -4.36,0.72 -0.16,0.04 -0.33,-0.46 -0.33,-1.09 v -1.12 l 2.97,-0.6 c 6.63,-1.35 18.91,-2.6 31.35,-3.23 7.3,-0.36 30.4,-0.13 38.94,0.3 m -42.4,8.28 c 0,2.74 -0.1,3.57 -0.4,3.47 -0.23,-0.07 -5.77,-1.02 -12.3,-2.15 -4.175573,-0.65714 -8.336534,-1.40398 -12.48,-2.24 -0.37,-0.13 4.85,-0.76 12.04,-1.45 6.97,-0.63 12.74,-1.2 12.9,-1.22 0.14,0 0.24,1.58 0.24,3.6 m -12.7,4.12 c 1.64,0.3 3.32,0.6 3.79,0.72 0.69,0.17 -35.51,4.99 -37.85,5.05 -0.63,0 -0.76,-0.16 -0.76,-0.95 0,-0.96 0.03,-0.96 2.74,-1.36 1.48,-0.2 8.11,-1.15 14.75,-2.14 6.63,-0.96 12.57,-1.75 13.2,-1.78 0.62,0 2.5,0.2 4.12,0.46"
          />
        </g>

        <Journal/>
        <CharacterArt/>
        <AlliesAndOrganisations/>
        <BackStory/>

        <path
          id="path6"
          d="M269.11 79.95C243.726829581 79.3881929151 218.369426904 77.9807453379 193.08 75.73C163.81 73.23 150.15 72.29 130.08 71.41C120.84 71.01 119.68 70.94 119.41 70.81C119.26 70.72 119.48 70.54 120.16 70.2C121.96 69.3 122.14 69.26 125.01 69.27C133.52 69.32 163.31 71.17 183.54 72.93C216.78 75.8 241.13 77.28 263.73 77.78C267.59 77.86 270.77 77.95 270.79 77.97C270.81 77.98 270.87 78.47 270.93 79.02C270.93 79.02 271.04 80.05 271.04 80.05C271.04 80.05 270.54 80.02 270.54 80.02C270.54 80.02 269.11 79.95 269.11 79.95C269.11 79.95 269.11 79.95 269.11 79.95M263.58 126.9C237.73 126.28 220.64 125.28 187.78 122.45C158.21 119.91 143.55 118.91 124.71 118.18C118.34 117.94 98.8 117.93 93.81 118.18C83.2590498426 118.589617841 72.7464097135 119.691991925 62.34 121.48C59.34 121.98 59.4 122.0 59.47 120.64C59.47 120.64 59.51 119.81 59.51 119.81C59.51 119.81 61.17 119.48 61.17 119.48C68.26 118.04 77.51 117.01 91.01 116.14C94.37 115.93 97.33 115.88 107.59 115.89C121.45 115.9 128.29 116.07 138.41 116.62C154.47 117.52 165.99 118.32 185.36 119.95C202.76 121.41 209.69 121.95 219.44 122.6C246.61 124.4 268.57 125.08 289.84 124.75C295.9 124.66 300.99 124.64 301.16 124.7C301.46 124.8 301.45 124.82 301.11 125.12C300.92 125.3 300.26 125.79 299.64 126.22C299.64 126.22 298.52 126.99 298.52 126.99C298.52 126.99 281.85 126.96 281.85 126.96C272.68 126.94 264.45 126.91 263.58 126.89C263.58 126.89 263.58 126.9 263.58 126.9"
          fill="#fff"
        />
        <path
          id="path8"
          d="M42.77 109.53C42.77 109.53 42.77 87.65 42.77 87.65C42.77 87.65 43.72 87.48 43.72 87.48C44.97 87.26 56.05 85.65 56.33 85.65C56.53 85.65 56.55 88.3 56.55 105.73C56.55 105.73 56.55 125.81 56.55 125.81C56.55 125.81 57.5 125.71 57.5 125.71C59.02 125.56 66.5 126.67 68.44 127.35C69.1 127.57 69.92 127.44 53.52 129.8C53.52 129.8 43.19 131.32 43.19 131.32C43.19 131.32 42.77 131.42 42.77 131.42C42.77 131.42 42.77 109.53 42.77 109.53M42.77 85.42C42.77 85.42 42.77 84.47 42.77 84.47C42.77 84.47 43.73 84.3 43.73 84.3C48.06 83.55 55.09 82.47 55.67 82.47C56.24 82.47 56.4 82.53 56.47 82.77C56.6 83.15 56.42 84.08 56.2 84.27C56.04 84.39 49.49 85.44 45.2 86.02C44.24 86.15 43.3 86.28 43.11 86.32C42.79 86.36 42.77 86.32 42.77 85.42C42.77 85.42 42.77 85.42 42.77 85.42"
          fill="#fff"
        />

        <path
          fill="#fff"
          d="m 59.419944,74.620381 c -0.115281,-0.12828 -0.174918,-0.625098 -0.119441,-0.995038 0.09312,-0.620952 0.518686,-0.813574 2.788044,-1.261933 6.099603,-1.205105 15.642829,-2.263265 26.344346,-2.921081 2.122679,-0.13048 3.042281,-0.21145 3.148733,-0.27724 0.126821,-0.07838 -0.190997,-0.129835 -1.124376,-0.182039 -0.553847,-0.03098 -1.296139,-0.07317 -1.649539,-0.09377 -0.376276,-0.02193 1.474361,-0.05396 4.465855,-0.0773 2.80962,-0.02192 5.119641,-0.02861 5.133379,-0.01487 0.03681,0.03681 -1.023121,1.382707 -1.218166,1.546826 -0.335427,0.282243 -0.559428,0.312384 -2.671601,0.359481 -2.631747,0.05868 -2.850504,0.07871 -4.959831,0.454132 -1.94348,0.345901 -2.429264,0.401107 -5.649042,0.641971 -6.469757,0.483989 -14.51691,1.428928 -19.838577,2.32955 -2.068804,0.350117 -3.205487,0.509944 -4.015907,0.564669 -0.496612,0.03353 -0.542594,0.02821 -0.633877,-0.07337 z"
        />

        <path
          fill="#fff"
          d="m 42.95032,133.89462 c -0.253207,-0.68448 -0.07151,-1.19861 0.471328,-1.33367 0.534242,-0.13293 13.905734,-2.08573 22.895119,-3.34366 3.385604,-0.47376 6.6999,-0.86139 7.365106,-0.86139 1.224823,0 7.018095,0.84363 6.862406,0.99932 -0.197998,0.198 -14.852332,2.23426 -27.344056,3.79954 -11.110649,1.39222 -10.037241,1.31474 -10.249903,0.73986 z"
        />

        <path
          fill="#fff"
          d="m 42.88393,109.47139 c 0,-12.05468 0.07229,-21.917902 0.160637,-21.918273 0.08835,-3.71e-4 3.09656,-0.429776 6.684912,-0.954234 3.588352,-0.524458 6.576186,-0.901696 6.639632,-0.838308 0.06345,0.06339 0.144492,9.070769 0.180103,20.016405 l 0.06475,19.90115 1.220343,0.001 c 2.16771,0.002 11.230104,1.51919 10.921014,1.82828 -0.04043,0.0404 -4.793737,0.76121 -10.562905,1.60173 -5.769167,0.84061 -11.57369,1.69739 -12.898939,1.90404 l -2.409544,0.37573 z"
        />

        <path
          fill="#fff"
          d="m 81.793477,126.51528 c -14.054635,-2.46762 -15.41776,-2.71599 -15.849444,-2.88786 -0.33574,-0.13367 -0.351332,-0.17348 -0.07211,-0.18412 0.195941,-0.007 1.979003,-0.20302 3.962361,-0.43455 1.983357,-0.23153 6.73851,-0.71389 10.567008,-1.07191 3.828497,-0.35802 7.565807,-0.71225 8.305132,-0.78718 l 1.344228,-0.13624 -0.05914,3.3859 c -0.03561,2.03865 -0.144361,3.40258 -0.273319,3.42781 -0.1178,0.0231 -3.683925,-0.56728 -7.924722,-1.31185 z"
        />

        <path
          fill="#fff"
          d="m 42.705321,85.422179 c 0,-0.535437 0.03857,-0.973523 0.08571,-0.973523 0.04714,0 2.739616,-0.433718 5.983285,-0.963817 3.243669,-0.5301 6.289317,-0.963818 6.768108,-0.963818 0.840019,0 0.870413,0.0244 0.867249,0.696091 -0.0018,0.382849 -0.07409,0.801935 -0.160637,0.9313 -0.175641,0.262542 -0.121498,0.252851 -7.118261,1.274059 -2.768298,0.404046 -5.34651,0.788314 -5.729359,0.853929 l -0.696091,0.119302 z"
        />

        <path
          fill="#fff"
          d="m 292.75398,74.691834 c -0.80908,-0.11375 -1.77732,-0.547161 -1.77732,-0.79558 0,-0.235642 1.76798,-1.316133 3.10563,-1.897989 1.72319,-0.749557 3.12887,-1.082946 4.83001,-1.145546 0.85503,-0.03146 1.16708,0.01398 1.16708,0.169961 0,0.353891 -2.26317,2.367333 -3.42893,3.050565 -0.40176,0.235461 -0.94263,0.429384 -1.50531,0.539706 -0.52045,0.102044 -1.90219,0.147627 -2.39116,0.07888 z"
        />

        <path
          fill="#fff"
          d="M 259.52889,123.26144 c -18.34285,-0.35677 -36.57691,-1.45998 -71.96504,-4.35408 -23.0685,-1.88657 -30.38317,-2.42335 -42.19379,-3.09636 -16.46134,-0.93802 -37.90743,-1.5118 -49.475967,-1.32371 -14.097459,0.2292 -20.295508,0.84265 -31.879074,3.15519 -2.3962,0.47837 -4.393908,0.83259 -4.439351,0.78715 -0.04544,-0.0454 -0.148698,-9.52636 -0.229457,-21.068707 L 59.199378,76.37484 60.037383,76.129889 c 1.141154,-0.333563 4.873666,-0.980185 10.262,-1.777793 2.473798,-0.366185 5.798969,-0.938359 7.389267,-1.271498 1.590299,-0.33314 3.517934,-0.668452 4.283634,-0.745138 1.629265,-0.163173 13.56513,-0.542284 13.675738,-0.434374 0.04136,0.04035 -0.455334,0.931043 -1.103769,1.979313 -2.513876,4.063984 -4.719934,9.269721 -3.857844,9.103539 0.139672,-0.02692 0.921444,-0.480752 1.73727,-1.008508 2.452143,-1.586284 7.252693,-3.541822 10.859681,-4.423769 1.07274,-0.262297 3.27747,-0.512164 5.89611,-0.668219 l 4.18265,-0.249262 0.91063,-1.191369 c 0.50084,-0.655253 1.32503,-1.666115 1.83152,-2.246361 l 0.92089,-1.054992 7.05091,0.262133 c 19.13388,0.711346 34.55276,1.687418 59.63251,3.774957 28.37905,2.36216 40.2715,3.195938 57.93614,4.061893 7.39775,0.362652 19.62613,0.759016 25.35151,0.82173 l 3.93334,0.04308 0.40644,1.606362 c 0.42682,1.686914 1.37531,3.855271 1.68637,3.855271 0.10052,0 0.41969,-0.517572 0.70931,-1.150158 0.95011,-2.075351 2.62528,-3.538398 4.44155,-3.879131 1.06754,-0.200272 3.41472,0.350523 6.29803,1.477921 1.38016,0.539653 2.63807,0.981187 2.79535,0.981187 0.19728,0 0.32675,-0.448377 0.41744,-1.445726 0.0723,-0.795149 0.22695,-1.802317 0.3437,-2.23815 0.28107,-1.049489 1.28391,-1.769772 2.40189,-1.725189 1.16464,0.04644 5.0593,1.976423 8.1874,4.057221 2.7384,1.821565 5.99044,4.321339 5.83022,4.481556 -0.0532,0.05318 -1.18606,-0.291919 -2.51752,-0.766878 -1.33146,-0.474959 -2.68697,-0.863562 -3.01223,-0.863562 -0.54316,0 -0.609,0.09168 -0.80763,1.124454 -0.11894,0.61845 -0.37289,1.935512 -0.56433,2.926805 -0.43078,2.230683 -0.95619,3.301493 -1.78925,3.646557 -0.75482,0.312658 -1.22191,0.119432 -2.02852,-0.839174 -0.29959,-0.356055 -0.62322,-0.647193 -0.71918,-0.646972 -0.0959,2.14e-4 -0.49664,0.913713 -0.89039,2.029983 -0.88841,2.518468 -1.72763,3.752589 -2.5517,3.752352 -0.3232,-9.2e-5 -1.19869,-0.289238 -1.94552,-0.642545 -0.74683,-0.353308 -1.41113,-0.642376 -1.47622,-0.642376 -0.23624,0 0.15963,2.588876 0.57777,3.778548 0.69001,1.963223 2.14643,4.307643 3.73435,6.011243 1.39738,1.49919 3.0626,2.84693 3.51755,2.84693 0.11351,0 -0.0176,-0.70515 -0.29125,-1.56701 -0.53417,-1.68216 -0.88178,-4.03058 -0.65169,-4.40288 0.0867,-0.14027 0.69986,0.17071 1.59257,0.80769 1.35727,0.96848 2.24495,1.52111 2.4433,1.52111 0.0467,0 0.0771,-1.42163 0.0676,-3.15918 -0.0169,-3.113285 -0.007,-3.179789 0.6549,-4.577787 0.89511,-1.889172 1.97906,-3.041183 3.62303,-3.850511 3.49095,-1.718585 7.69964,-0.666558 11.61326,2.902905 0.97482,0.889117 1.86635,1.616577 1.98118,1.616577 0.2774,0 0.26511,-2.133796 -0.0243,-4.21459 -0.29257,-2.103585 -0.82884,-3.676872 -2.16656,-6.356326 -0.57959,-1.160907 -1.00669,-2.157834 -0.94914,-2.215393 0.0575,-0.05756 1.19599,0.140726 2.52987,0.440635 3.64743,0.820094 3.81738,0.845211 3.81738,0.564157 0,-0.518271 -2.28602,-3.527497 -3.95801,-5.210187 -0.95596,-0.962056 -2.42831,-2.275255 -3.27188,-2.918219 -0.8436,-0.642965 -1.49437,-1.20847 -1.44616,-1.256677 0.16916,-0.169154 2.8634,1.21462 4.42311,2.271735 2.78533,1.887768 5.76065,4.775491 7.49756,7.276765 0.71198,1.025337 2.00386,3.720856 2.19446,4.578826 l 0.12534,0.564175 -3.03652,-0.934554 c -1.6701,-0.514005 -3.07265,-0.898441 -3.11679,-0.854302 -0.0441,0.04414 0.58471,0.837291 1.39743,1.76256 3.08704,3.514533 4.81557,6.191202 7.63562,11.823941 1.01143,2.0202 1.91429,3.67309 2.00639,3.67309 0.0921,0 0.48966,-0.98791 0.8835,-2.19536 1.30629,-4.00502 2.37416,-5.601381 4.40449,-6.584246 0.83122,-0.402392 1.22131,-0.464719 2.24131,-0.35811 1.56063,0.163119 4.01008,1.028449 5.74077,2.028086 l 1.33864,0.77318 v 3.00759 c 0,1.65417 -0.0639,5.82313 -0.14143,9.26434 l -0.14101,6.25676 -1.09015,0.21357 c -0.59956,0.11746 -1.52491,0.27316 -2.05633,0.34598 l -0.9662,0.13241 -0.49311,-3.92547 c -0.8062,-6.4179 -2.45994,-14.5931 -3.14022,-15.52341 -0.27788,-0.38003 -0.31359,-0.37434 -0.87335,0.13923 -0.76409,0.70103 -1.65346,2.65296 -3.4156,7.49636 -0.79286,2.1793 -1.63489,4.34385 -1.87118,4.81011 l -0.42958,0.84776 -0.74169,-1.81157 c -1.84828,-4.51356 -2.54257,-6.05622 -3.85208,-8.55831 -1.65612,-3.16432 -3.61057,-6.299889 -5.09769,-8.178363 l -1.07091,-1.352716 -0.13898,1.974927 c -0.21733,3.087784 -1.54832,8.629582 -2.07176,8.626092 -0.0799,-4.3e-4 -0.66495,-1.02523 -1.30011,-2.27711 -1.58955,-3.132905 -3.23752,-4.873328 -5.85542,-6.183853 -1.83541,-0.918802 -2.79651,-1.168161 -3.03226,-0.786717 -0.0596,0.09644 0.0792,0.891585 0.30847,1.766999 1.27361,4.863171 1.88587,10.886561 1.49344,14.692641 -0.42828,4.15414 -1.87368,9.16307 -3.07483,10.65557 l -0.50292,0.62493 -4.7999,0.16294 c -4.29541,0.14582 -32.60044,0.18093 -39.39024,0.0489 z"
        />

        <Age />
        <Height />
        <Weight />
        <Eyes />
        <Skin />
        <Hair />
        <g>
          <text
            transform="rotate(1.9)"
            fontWeight={500}
            fontSize={30}
            fontFamily="Scala Sans Offc"
          >
            <tspan
              y={105}
              x={140}
            >
              Depiction
            </tspan>
          </text>
        </g>

      </PanZoom>
    </MenuDrawer>
  </React.Fragment>
);
export default Background;
