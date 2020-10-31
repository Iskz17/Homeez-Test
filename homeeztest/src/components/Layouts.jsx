import React, { Component } from "react";
import Layout from "./Layout";

let idUni = 0;
class Layouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUnique: 0,
      floorData: this.props.floorData,
    };
  }
  getUniqueId(l) {
    const returnParam = idUni + l.id.toString();
    idUni++;
    return returnParam;
  }
  render() {
    return (
      <div>
        {this.props.floorData.map((l) => (
          // console.log(l.id),
          <Layout key={this.getUniqueId(l)} id={this.getUniqueId(l)} data={l} />
        ))}
      </div>
    );
  }
}

export default Layouts;
