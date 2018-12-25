import React from 'react';
import electron from 'electron';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import SvgFilters from '../../svg-style/SvgFilters';

const {remote} = electron;

class PanZoom extends React.PureComponent {
  constructor() {
    super();
    this.resizeToBounds();
    remote.getCurrentWindow().on('resize', () => {
      this.resizeToBounds();
    });
  }

  state = {
    width: 0,
    height: 0
  };

  resizeToBounds() {
    setTimeout(() => {
      const bounds = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getContentBounds();
      this.setState({
        width: bounds.width,
        height: bounds.height
      });
    }, 0)
  };

  render() {
    return (
      <ReactSVGPanZoom
        toolbarProps={{
          SVGAlignX: 'center',
          SVGAlignY: 'center'
        }}
        detectAutoPan={false}
        width={this.state.width}
        height={this.state.height}
        scaleFactorOnWheel={1.3}
        tool='auto'
        miniaturePosition='none'
        toolbarPosition='none'
        scaleFactorMax={7}
        scaleFactorMin={0.5}
        value={this.props.value}
        onChangeValue={value => { this.props.setValue(value); }}
        disableDoubleClickZoomWithToolAuto
      >
        <svg height={1056} width={816}>
          <defs>
            <SvgFilters/>
          </defs>
          {this.props.children}
        </svg>
      </ReactSVGPanZoom>
    )
  }
}

export default PanZoom;
