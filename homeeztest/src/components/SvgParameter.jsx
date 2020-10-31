import React, { Component } from "react";
import FurnitureSVG from '/Users/Iskz17/Homeez-Test/homeeztest/src/components/furniture-sample.svg'
class SvgParameter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div id={this.props.data.id + '_div'} className="layoutSVG">
        <svg
        id={this.props.data.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800"
      >
        {/* <g fill="#61DAFB"> */}
        {this.determineParam()}
        {/* </g> */}
        
      </svg>
        </div>
      
      </React.Fragment>
      
    );
  }

  determineParam() {
    const tag = this.props.data.tag;
    return tag === "polygon"
      ? this.getPolygon(this.props.data)
      : this.getPath(this.props.data);
  }
  getPath(data) {
    return <path d={data.d} />;
  }
  getPolygon(data) {
    return <polygon points={data.points} />;
  }
}

export default SvgParameter;
