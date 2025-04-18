import React, {Component} from 'react';

class Counter extends Component{
    constructor(){
        super();
        this.state={
            func: 'Increment-Decrement',
            count: 0
        }
    }
    increment(event,num){
        this.setState({
            func: 'Increment',
            count: this.state.count+num
        })
    }
    decrement(event,num){
        this.setState({
            func: 'Decrement',
            count: this.state.count-1
        })
    }

    render(){
        return(
            <div>
                <h1>Count {this.state.func} :: {this.state.count}</h1>
                <button onClick={(event)=>{this.increment(event,1)}}>Increment</button>
                &nbsp;
                <button onClick={(event)=>{this.decrement(event,1)}}>Decrement</button>
                &nbsp;
                <button onClick={(event)=>{this.increment(event,3)}}>Increment + 3</button>
            </div>
        )
    }
}
export default Counter;