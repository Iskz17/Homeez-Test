import React, { Component } from 'react';
import './App.css';
import floor from './components/floorplan-sample.json';
import Layouts from './components/Layouts';
import ButtonFurniture from './components/ButtonFurniture';
import FurnitureSVG from '/Users/Iskz17/Homeez-Test/homeeztest/src/components/furniture-sample.svg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      toShowPicture: false,
      buttonText: 'Load'
    }
  }
  handleLoadButton = (test)=>{
    console.log(test);
    let toShowPicture = !this.state.toShowPicture;
    //console.log(toShowPicture);
    this.setState({toShowPicture});
    if(toShowPicture){
      this.setState({buttonText: 'Unload'});
    }else{
      this.setState({buttonText: 'Load'});
    }
    //return <img src={FurnitureSVG}></img>;
  }
  filterFloorData(){
    let tempFloor = [...floor.layout];
    let newFloor = tempFloor.filter((c) => !(c.id).toString().includes('-wall'))
    //console.log(newFloor);
    return newFloor;
  }
  render() { 
    return (  
    <div className="containerMain">
      <div className="floorDisplayContainer">
        <div className="floorDisplayLabelContainer">
          <span>The Floor Plan</span>
        </div>
        <div className="theFloorPlan">
        <Layouts floorData={this.filterFloorData()}/>
          {/* {this.filterFloorData()} */}
          <ButtonFurniture 
          onClick={this.handleLoadButton} 
          showPicture={this.state.toShowPicture} 
          className="buttonClass"
          text={this.state.buttonText}/>
        </div>        
      </div>      
    </div>);
  }
}
 
export default App;