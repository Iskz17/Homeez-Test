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
    }
  }
  handleLoadButton = (test)=>{
    console.log(test);
    let toShowPicture = !this.state.toShowPicture;
    //console.log(toShowPicture);
    this.setState({toShowPicture});
    //return <img src={FurnitureSVG}></img>;
  }
  render() { 
    return (  
    <div className="containerMain">
          <Layouts floorData={floor}/>
          <ButtonFurniture onClick={this.handleLoadButton} showPicture={this.state.toShowPicture}/>
    </div>);
  }
}
 
export default App;