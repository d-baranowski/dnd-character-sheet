import React from 'react';
import PropTypes from 'prop-types';
import {
  insertCharacterAtPosition,
  removeCharacter
} from '../../../../../form/utils';

export const modifierWithSign = modifier =>
  (modifier && (modifier > 0 ? '+' : '') + modifier) || '0';

class AttributeBox extends React.Component {
  state = {
    value: this.props.value,
    cursor: 0,
    editing: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        value: props.value
      };
    }

    return null;
  }

  getCursorClass = index => {
    if (!this.state.editing) {
      return '';
    }

    return index === this.state.cursor - 1
      ? 'hasCursor blinks'
      : index === 0 && this.state.cursor === 0
        ? 'hasCursorStart blinks'
        : '';
  };

  onKeyPress = event => {
    const key = event.key;

    if (key === 'Backspace') {
      const startLenght = this.state.value.length;
      const newValue = removeCharacter(
        this.state.value,
        this.state.cursor - 1
      );
      if (!this.isValid(newValue)) {
        return;
      }
      this.setState(
        {
          value: newValue,
          cursor:
            newValue.length !== startLenght && this.state.cursor > 0
              ? this.state.cursor - 1
              : this.state.cursor
        },
        () => this.props.changeValue(newValue)
      );
    } else if (this.isValid(key)) {
      const newValue = insertCharacterAtPosition(
        this.state.value,
        this.state.cursor,
        key
      );
      if (!this.isValid(newValue)) {
        return;
      }
      this.setState(
        {
          value: newValue,
          cursor: this.state.cursor + 1
        },
        () => this.props.changeValue(newValue)
      );
    } else if (key === 'ArrowLeft') {
      this.setState({
        cursor: this.state.cursor !== 0 ? this.state.cursor - 1 : 0
      });
    } else if (key === 'ArrowRight') {
      this.setState({
        cursor:
          this.state.cursor !== this.state.value.length
            ? this.state.cursor + 1
            : this.state.value.length
      });
    } else if (key === 'Escape') {
      this.leaveEditMode();
    }
  };

  isValid = str => str.length === 0 || str.match(/^-{0,1}\d{1,2}$/);

  leaveEditMode = () => {
    this.setState({
      editing: false
    });

    document.removeEventListener('keydown', this.onKeyPress, false);
    document.removeEventListener('mousedown', this.handleClickOutside);
  };

  enterEditMode = () => {
    this.setState({
      editing: true
    });

    document.addEventListener('keydown', this.onKeyPress, false);
    document.addEventListener('mousedown', this.handleClickOutside);
  };

  setWrapperRef = node => {
    this.wrapperRef = node;
  };

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.onKeyPress, false);
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.leaveEditMode();
    }
  };

  render() {
    const {
      name,
      transformY,
      textTransform,
      onMouseEnter,
      onMouseLeave,
      isHovered,
      modifier
    } = this.props;

    return (
      <g transform={`translate(0 ${transformY})`}>
        <g filter={isHovered && 'url(#sofGlow)'}>
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path
              id="Fill"
              d="M31.32 630.224s2.232-11.25 1.5-21.5c0 0-3.124-3.125.25-8.187l-.28-5.472h48.796l-.281 5.472c3.375 5.062.25 8.187.25 8.187-.731 10.25 1.5 21.5 1.5 21.5l-1.437 1.062c.312.563 1.098 4.029 1.098 4.029l-.952 11.545c-2.853-1.177-4.693 3.139-4.693 3.139H37.305s-1.84-4.316-4.693-3.14l-.951-11.544s.785-3.466 1.097-4.03z"
              fill="#fff"
            />
            <path
              id="ModifierFill"
              d="M57.188 607.167c6.731 0 12.208-3.695 12.208-8.238 0-4.543-5.477-8.24-12.208-8.24-6.73 0-12.208 3.697-12.208 8.24s5.477 8.238 12.208 8.238"
              fill="#fff"
            />
            <path
              id="ModifierBorder"
              d="M57.188 591.94c-5.939 0-10.958 3.2-10.958 6.988 0 3.788 5.02 6.99 10.958 6.99 5.94 0 10.958-3.201 10.958-6.99 0-3.788-5.019-6.989-10.958-6.989m0-2.5c7.434 0 13.458 4.25 13.458 9.49s-6.024 9.489-13.458 9.489c-7.433 0-13.458-4.25-13.458-9.49s6.025-9.489 13.458-9.489"
              fill="#dedfdf"
            />
            <path
              id="Border"
              d="M33.534 641.741c-.641 1.551-.945 4.84-.945 4.84l.023.278.413.128c.968.3 3.725 1.507 3.725 3.063v.644h40.878v-.644c0-1.556 2.756-2.763 3.724-3.063l.412-.128.024-.279s-.304-3.288-.945-4.839l-.288 4.155c-1.067.391-3.66 1.532-4.14 3.508H37.963c-.481-1.976-3.074-3.117-4.14-3.508zm-1.444-43.269l-.001-.002c.055 0 .12-.004.18-.008.053.733.107 1.561.158 2.47-.75 1.167-1.33 2.48-1.451 3.868-.151 1.724.426 3.321 1.699 4.754 0 .252-.003.51-.005.767 0 0-.907 16.93-1.74 19.634l-.107.346.31.191c.014.01.736.468 1.445 1.227 0 0 .746.667 1.022 1.471.306.657.46 1.404.274 2.21-.031.072-.38.891-.733 1.948l-.17-1.876c.177-.517.327-1.07.468-1.636-.197-.403-.568-1.04-1.028-1.33-.195.948-.42 1.861-.703 2.678l-.047.13.812 9.054c-.01-1.353.912-4.294.912-4.294.305-1.85 1.342-4.289 1.376-4.382.363-1.538-.166-2.859-.887-3.868 1.083-6.09.028-27.819-.108-30.346-.503.638-.96 1.67-1.206 2.284.05 1.316.087 2.74.105 4.213-.591-.969-.85-2.003-.754-3.09.109-1.258.662-2.47 1.377-3.557l.1-.149a17.687 17.687 0 0 1 .334-.466v-.002c1.578-2.116 3.623-3.61 3.778-3.722a25.466 25.466 0 0 0 2.29-1.386h.013l.165-.119c.52-.353 1.024-.719 1.509-1.087l.118-.085h-.007a46.005 46.005 0 0 0 2.485-2.04 31.5 31.5 0 0 0 2.602-.148 10.879 10.879 0 0 0-2.096 2.188h-2.243l-1.634 1.291h1.522c-.344 1.02-.523 1.93-.58 2.736-.54-.736-1.694-1.846-3.423-1.182.392-.112 2.002-.347 3.448 2.687l.004-.016c.289 2.406 1.657 3.498 1.657 3.498-1.42-2.79-1.091-5.268-.63-6.764.008-.009.297-.41.878-.419a7.513 7.513 0 0 0-.551 2.785c0 5.621 6.354 10.191 14.16 10.191 7.81 0 14.163-4.57 14.163-10.19 0-.968-.2-1.899-.55-2.786.58.01.869.41.877.42.46 1.495.79 3.972-.63 6.763 0 0 1.369-1.092 1.657-3.498l.004.016c1.446-3.034 3.056-2.799 3.449-2.687-1.73-.664-2.884.446-3.425 1.182-.055-.806-.234-1.717-.58-2.736h1.523l-1.634-1.29H69.798a10.934 10.934 0 0 0-2.095-2.189c.79.075 1.688.138 2.602.148a45.616 45.616 0 0 0 2.485 2.04h-.007l.117.085c.486.368.988.734 1.51 1.087l.165.12h.012c.745.5 1.514.976 2.29 1.385.155.111 2.2 1.606 3.778 3.722v.002l.035.046a15.206 15.206 0 0 1 .399.57c.716 1.085 1.267 2.298 1.377 3.556.096 1.087-.162 2.121-.753 3.09.017-1.474.052-2.897.104-4.213-.247-.614-.703-1.646-1.206-2.284-.137 2.527-1.191 24.255-.107 30.346-.721 1.01-1.25 2.33-.887 3.868.032.093 1.07 2.532 1.376 4.382 0 0 .922 2.941.91 4.294l.813-9.054-.046-.13c-.284-.817-.508-1.73-.703-2.679-.46.291-.831.928-1.03 1.331.142.566.292 1.12.468 1.636l-.17 1.876a27.588 27.588 0 0 0-.731-1.948c-.188-.806-.033-1.553.273-2.21.277-.804 1.022-1.47 1.022-1.47a8.261 8.261 0 0 1 1.446-1.228l.31-.19-.108-.347c-.832-2.705-1.74-19.634-1.74-19.634-.001-.257-.004-.515-.004-.767 1.272-1.433 1.85-3.03 1.698-4.754-.123-1.388-.701-2.7-1.45-3.868.05-.909.104-1.737.155-2.47.062.004.127.008.183.008l-.001.002c.978.081 1.835-.462 1.419-1.146-.415-.686-1.126-.76-1.126-.76s.269.171.49.563c.11.197.024.288-.09.333-.082.014-.162.028-.251.036h-.002c-.18.015-.37.02-.551.017.117-1.52.21-2.438.217-2.488l.076-.715H74.373a43.11 43.11 0 0 1-2.652-2.067c2.842.025 4.626-1.39 4.626-1.39l-1.81-.719v.001c-.873-.37-2.258-.897-3.514-1.145l.02-.005-.218-.037c-.055-.01-.108-.02-.161-.028-6.348-1.099-7.011-.494-7.011-.494 2.73 0 4.453 1.781 4.453 1.781l.157.16c.065.062.407.406.954.92-.404-.023-.8-.05-1.184-.083h-.005l-.286-.028a5.908 5.908 0 0 1-.775-.147 6.053 6.053 0 0 1-.667-.212 4.792 4.792 0 0 1-.626-.289c-.025-.013-.047-.03-.071-.046a3.886 3.886 0 0 1-.651-.482 3.078 3.078 0 0 1-.492-.563l-5.187-.592.04.017a19.248 19.248 0 0 0-2.125-.129c-.722 0-1.43.052-2.125.13l.04-.018-5.186.592a3.072 3.072 0 0 1-.5.567c-.046.044-.095.085-.144.128-.167.135-.341.26-.52.365-.02.011-.038.025-.058.036a5.036 5.036 0 0 1-.741.33 6.283 6.283 0 0 1-.568.174 6.633 6.633 0 0 1-.75.14c-.096.008-.19.018-.286.027h-.005c-.384.032-.781.06-1.184.082.547-.513.889-.857.953-.92l.157-.159s1.722-1.78 4.452-1.78c0 0-.662-.606-7.01.493-.053.007-.106.018-.16.028-.076.013-.142.023-.218.037l.019.005c-1.257.248-2.641.775-3.514 1.145l-1.81.717s1.784 1.416 4.627 1.391a43.417 43.417 0 0 1-2.652 2.067h-8.098l.076.715c.006.05.1.968.218 2.488a5.954 5.954 0 0 1-.552-.017h-.002c-.09-.008-.17-.022-.251-.036-.113-.045-.201-.136-.091-.333.22-.392.49-.563.49-.563s-.71.074-1.124.76c-.417.684.44 1.227 1.419 1.146m48.949 19.948c.353 3.722.825 9.338 1.415 11.476a9.106 9.106 0 0 0-.84.684c-.516-3.485-.608-9.215-.575-12.16m-1.412-20.306a8.24 8.24 0 0 0 1.184.227c-.022.305-.046.636-.068.975a19.03 19.03 0 0 0-1.116-1.202m-3.298-2.51h4.71a104.46 104.46 0 0 0-.157 1.815c-1.41-.169-3-.884-4.553-1.816m-7.183-5.683a.35.35 0 0 1 .049-.033c.694-.39 2.98.294 4.804 1.042-.862.291-2.073.396-3.338.398a45.245 45.245 0 0 1-1.515-1.407m-11.958.223c4.573 0 8.58 1.672 10.832 4.17.182.201.353.408.513.618.017.023.03.047.048.07.144.195.282.394.405.6.613 1.027.957 2.15.957 3.327 0 4.843-5.722 8.785-12.755 8.785-7.032 0-12.754-3.942-12.754-8.785 0-1.177.344-2.3.957-3.327.123-.206.26-.405.407-.603l.047-.067c.16-.21.33-.417.51-.619 2.253-2.497 6.26-4.169 10.833-4.169m-13.471 1.184c-1.265-.002-2.476-.107-3.338-.398 1.824-.748 4.108-1.433 4.803-1.042a.3.3 0 0 1 .049.033c-.276.271-.806.776-1.514 1.407m-10.152 7.014a8.265 8.265 0 0 0 1.186-.227c-.364.358-.743.764-1.117 1.202a72.41 72.41 0 0 0-.07-.975m-.226-2.738h4.71c-1.552.932-3.143 1.647-4.552 1.816-.062-.76-.116-1.382-.158-1.816m0 22.817c.034 2.945-.06 8.675-.575 12.16a9.253 9.253 0 0 0-.84-.684c.59-2.138 1.062-7.754 1.416-11.476"
            />
          </g>
        </g>
        <text
          transform={textTransform}
          fontWeight={700}
          fontSize={6.5}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0">
            {name.toUpperCase()}
          </tspan>
        </text>
        <foreignObject x="46" y="205">
          <div>
            <p
              style={{
                height: '30px',
                width: '60px',
                border: 'none',
                fontFamily: 'Scala Sans Offc',
                fontSize: 'x-large',
                textAlign: 'center'
              }}
            >
              {modifierWithSign(modifier)}
            </p>
          </div>
        </foreignObject>
        <foreignObject x="47" y="247">
          <div>
            <p
              style={{
                height: '30px',
                width: '60px',
                border: 'none',
                fontFamily: 'Scala Sans Offc',
                fontSize: 'medium',
                textAlign: 'center'
              }}
            >
              {this.state.value.split('').map((letter, index) => (
                <span className={this.getCursorClass(index)} key={letter + index}>
                  {letter}
                </span>
              ))}
            </p>
          </div>
        </foreignObject>
        <rect
          ref={this.setWrapperRef}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onClick={this.enterEditMode}
          fill="transparent"
          x="45"
          y="190"
          width="65"
          height="80"
        />
      </g>
    );
  }
}

AttributeBox.propTypes = {
  changeValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  transformY: PropTypes.string.isRequired,
  textTransform: PropTypes.string.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovered: PropTypes.bool.isRequired,
  modifier: PropTypes.number.isRequired
};

export default AttributeBox;
