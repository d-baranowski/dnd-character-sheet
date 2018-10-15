import React from 'react';
import SpellsBucket from "./SpellsBucket";

class Cantrips extends React.PureComponent {
  render() {
    return (
      <SpellsBucket
        spellLevel={0}
        bucketSize={6}
        castingClass={this.props.spellCastingClass}
        arrowsY={345}
        arrowsX={39}
        spellsX={43}
        spellsY={227 + 670}
      />
    )
  }
}

export default Cantrips;
