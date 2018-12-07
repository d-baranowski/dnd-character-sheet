import React, {Component} from 'react';
import DieBox from "../dice/DiceBox";
import createDie from "../dice/diceMeshCreator";
import {decrementDie, incrementDie} from "../../state/hitDiceActions";
import connect from "react-redux/es/connect/connect";
import {Header} from "semantic-ui-react";

const mapOver = (value, istart, istop, ostart, ostop) => {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};

class SceneComponent extends Component {
    static defaultProps = {
        width: window.innerWidth,
        height: window.innerHeight,
        dice: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']
    };

    componentDidMount() {
        this.box = new DieBox(this.canvas);
        this.diceReferences = {};


        const knownDieTypes = this.props.dice;
        const r = 200;

        for (let i = 0; i < knownDieTypes.length; ++i) {
            const die = createDie(knownDieTypes[i], this.box._scale);
            die.addCallback(() => {
              if (this.props[knownDieTypes[i]] > 0) {
                this.props.decrementDie(knownDieTypes[i]);
              }
            });

          die.addCallback(() => {
            if (this.props[knownDieTypes[i]] < 99) {
              this.props.incrementDie(knownDieTypes[i]);
            }
          }, true);

            const angle = mapOver(i, 0, knownDieTypes.length, 0, 2 * Math.PI);
            const x = r*Math.cos(angle) + 5;
            const y = r*Math.sin(angle) + 5;

            die.position.set(x, y, 10);
            this.diceReferences[knownDieTypes[i]] = die;
        }

        this.box.drawSelector(Object.values(this.diceReferences));

        this.animate();
    }

    animate = () => {
        requestAnimationFrame(this.animate);

        Object.values(this.diceReferences).forEach(obj => {
            obj.update();
        });

        this.box.render();
    };

    setCanvasRef = (ref) => {
        this.canvas = ref;
    };

    render() {
      const dieStlye = {
        textAlign: 'center',
        flexGrow: 1,
        width: '33%',
        userSelect: 'none',
        fontSize: '16px',
        fontWeight: 800,
        marginBottom: 15
      };
        return (
          <React.Fragment>
            <div style={{
              minWidth: 700,
              display: 'flex',
              flexWrap: 'wrap'
            }}>
              <div style={dieStlye}>D4: {this.props.d4}</div>
              <div style={dieStlye}>D6: {this.props.d6}</div>
              <div style={dieStlye}>D8: {this.props.d8}</div>
              <div style={dieStlye}>D10: {this.props.d10}</div>
              <div style={dieStlye}>D12: {this.props.d12}</div>
              <div style={dieStlye}>D20: {this.props.d20}</div>
            </div>
            <div
                ref={this.setCanvasRef}
                style={{height: this.props.height, width: this.props.width}}
            />
          </React.Fragment>
        );
    }
}

SceneComponent.propTypes = {};

const mapStateToProps = (state) => {
  const classes = Object.entries(state.homePageReducer.classesReducer.classes);
  const startValue = classes.reduce((result, val) => {
    result[val[1].hitDie] = 0;
    return result;
  }, {});
  const hitDice = classes.reduce((result, val) => {
    result[val[1].hitDie]+= parseInt(val[1].level);
    return result;
  }, startValue);

  return {
    d4: hitDice['d4'] + state.homePageReducer.hitDiceReducer.d4,
    d6: hitDice['d6'] + state.homePageReducer.hitDiceReducer.d6,
    d8: hitDice['d8'] + state.homePageReducer.hitDiceReducer.d8,
    d10: hitDice['d10'] + state.homePageReducer.hitDiceReducer.d10,
    d12: hitDice['d12'] + state.homePageReducer.hitDiceReducer.d12,
    d20: state.homePageReducer.hitDiceReducer.d20
  }
};

const mapDispatchToProps = (dispatch) => ({
  decrementDie: (die) => dispatch(decrementDie(die)),
  incrementDie: (die) => dispatch(incrementDie(die)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SceneComponent);
