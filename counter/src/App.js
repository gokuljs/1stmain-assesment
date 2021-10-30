import React,{Component} from 'react'; // importing react and react.component from react package 
import Counter from "./counter" // importing child component from counter.js
import './App.css'; // styling for app.css

class App extends Component{ // creating a class component for react 

  render(){
    return(
      // app component 
      <div className="App"> 
        <h1> creating a counter button</h1>
        {/* create our child component Counter */}
        <Counter />
      </div>

    );
  }

}

export default App; // its is similiar to our return statement 
// here we are returning the entire component 
