import React, { Component } from "react";
import SvgParameter from "./SvgParameter";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <SvgParameter data={this.props.data} />    
    );
  }
}

export default Layout;
