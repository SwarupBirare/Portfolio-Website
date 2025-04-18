import React from "react";
function ChildFunc(props){
    return(
        <div>
            {props.name} is {props.dataFromParentFunc}
        </div>
    )
}
export default ChildFunc;