import react,{Component} from "react";
import C from './C';
class P extends Component{
    constructor(){
        super()
        this.state={
            name: "SwarupBirare"
        }
    }
    changeName(e){
        this.setState({name: "Pankaj"})
    }
    render(){
        return(
            <div>
                <C names={this.state.name}/>

            <h1>
                <button onClick={(e)=>{this.changeName(e)}}>Change</button>
            </h1>
            </div>
        )
    }
}
export default P;