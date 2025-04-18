import React, {Components} from "react";

class States extends React.Components{
    constructor(){
        super();
        this.state = {
            count:0,
            name:"Abhinav",
            age:22

        }
    }

    render(){
        return(
            <div>
                The Count is : {this.state.count}
                <button onClick={() =>{this.setState({count : this.state.count + 1})}}> INcrement</button>
                <button onClick={() =>{this.setState({count: this.state.count -1})}}> Decrement</button>
            </div>
        )
    }
}

export default States;