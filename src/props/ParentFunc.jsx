import React from "react";
import ChildFunc from "./ChildFunc";
    function ParentFunc(){
        return(
            <div>
                <ChildFunc dataFromParentFunc='Learning Functional Props in React' name='Soduppp'/>
            </div>
        )
    }
export default ParentFunc;