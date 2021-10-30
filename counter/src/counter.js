import React,{Component} from 'react';
import './counter.css'


class Counter extends Component{
    constructor (props){
        super(props);
        this.state={
            count:0
        }
    }

    
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
            <button className="button" onClick={this.increment}>Increment</button>
            <button className="button2"onClick={this.decrement}>Decrement</button>
        </div>
    );
}
}

export default Counter;