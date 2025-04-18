import React, {Component} from "react";
class States extends Component{
    constructor(){
        super();
        this.state={
            oraganization: 'Google',
            ename: 'Swarup'
        }
    }

    changeCompany(event){
        this.setState({
            oraganization: 'Microsoft',
            ename: 'Soduppp'
        })
    }

    render(){
        return(
            <div>
                <h2>oraganization is {this.state.oraganization} and ename is {this.state.ename}</h2>
                <button onClick={(event)=>{this.changeCompany(event)}}>Change</button>
            </div>
        )
    }
}
export default States;