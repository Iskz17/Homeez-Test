import React, { Component } from 'react';
import './App.css';
import floor from './components/floorplan-sample.json';
import Layouts from './components/Layouts';
import ButtonFurniture from './components/ButtonFurniture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }
  render() { 
    return (  
    <div>
          <Layouts floorData={floor}/>
          <ButtonFurniture/>
    </div>);
  }
}
 
export default App;