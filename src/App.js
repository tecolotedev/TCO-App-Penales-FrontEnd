import React,{Component} from 'react';
import Router from './Router.js';
import M from "materialize-css";

class App extends Component{
  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }
  render(){
    return (
      <div className="App">
          <Router/>
      </div>
    );
  }
}

export default App;
