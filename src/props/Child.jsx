import React, { Component } from "react";

class Child extends Component{
    render(){
        return(
            <div>
                {this.props.name} is {this.props.dataFromParent}
            </div>
        )
    }
}
export default Child;