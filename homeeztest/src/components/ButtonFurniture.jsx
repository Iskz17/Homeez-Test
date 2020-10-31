import React, { Component } from 'react';
import FurnitureSVG from '/Users/Iskz17/Homeez-Test/homeeztest/src/components/furniture-sample.svg'

class ButtonFurniture extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    toShowSVG(){
        if(this.props.showPicture){
            //console.log('was here');
            return <img src={FurnitureSVG}></img>;
        }
    }
    render() { 
        return (  <div>
                <button onClick={()=> this.props.onClick('hewo')}> 
                Load
                </button>
                {this.toShowSVG()}
                
        </div>);
    }
}
 
export default ButtonFurniture;