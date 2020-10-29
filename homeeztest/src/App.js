import React, { Component } from 'react';
import './App.css';
import floor from './components/floorplan-sample.json';
import Layouts from './components/Layouts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
    }
  }
  render() { 
    return (  <React.Fragment>
          <Layouts floorData={floor}/>
    </React.Fragment>);
  }
}
 
export default App;