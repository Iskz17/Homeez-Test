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
            return <img src={FurnitureSVG} className="furnitureImg"></img>;
        }
    }
    render() { 
        return (  <div>
                <div onClick={()=> this.props.onClick('hewo')} className={this.props.className}> 
                {this.props.text}
                </div>
                {this.toShowSVG()}
                
        </div>);
    }
}
 
export default ButtonFurniture;