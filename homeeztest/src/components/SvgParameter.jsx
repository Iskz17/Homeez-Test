import React, { Component } from "react";
class SvgParameter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <svg
        id={this.props.data.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3000 2000"
      >
        {/* <g fill="#61DAFB"> */}
        {this.determineParam()}
        {/* </g> */}
      </svg>
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
