import React,{Component} from 'react'; // react and react.component from react package
import './counter.css' // counter stylesheet


class Counter extends Component{ // counter class componet 
    // why class component mainly because we are dealing with setstate 
    constructor (props){
        super(props);
        this.state={
            count:0
        }
    }

    // increment and decrement arrow functions
  increment=()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  decrement=()=>{
      this.setState({
          count:this.state.count-1
      })
  }
render(){
    return(
        <div>
            <p>This is our current count  :  {this.state.count}</p>
            {/* creating a button  */}
            {/* this alway refers to current class */}
            <button className="button" onClick={this.increment}>Increment</button> 
            <button className="button2"onClick={this.decrement}>Decrement</button>
        </div>
    );
}
}

export default Counter; // exporting counter class or returning counter class 