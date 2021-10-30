import React,{Component} from 'react';
import Counter from "./counter"
import './App.css';

class App extends Component{

  render(){
    return(
      <div className="App">
        <h1> creating a counter button</h1>
        <Counter />
      </div>

    );
  }

}

export default App;
