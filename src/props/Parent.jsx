import React, { Component } from "react";
import Child from "./Child";
class Parent extends Component{
    render(){
        return(
            <div>
                <Child dataFromParent='Learning Class Props in React' name='Swarup'/>
            </div>
        )
    }
}
export default Parent;