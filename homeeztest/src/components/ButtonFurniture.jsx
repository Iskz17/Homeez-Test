import React, { Component } from 'react';
import FurnitureSVG from '/Users/Iskz17/Homeez-Test/homeeztest/src/components/furniture-sample.svg'

class ButtonFurniture extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div>
                <img src={FurnitureSVG}></img>
        </div>);
    }
}
 
export default ButtonFurniture;