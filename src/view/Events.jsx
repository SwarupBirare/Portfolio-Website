import React, {Component} from "react";
class Events extends Component{
    message(event){
        alert('One Event')
    }
    render(){
        return(
            <div>
                <button onClick={(event) => {this.message(event)}}>Click meee</button>
            </div>
        )
    }
}
export default Events;