import React, { Component } from "react";
import SvgParameter from "./SvgParameter";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <svg
      width="100"
      height="100"
        id={this.props.data.id}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        {/* <g fill="#61DAFB"> */}
          <SvgParameter data={this.props.data} />
          {console.log(this.props.data.tag)}
        {/* </g> */}
      </svg>
    );
  }
}

export default Layout;
