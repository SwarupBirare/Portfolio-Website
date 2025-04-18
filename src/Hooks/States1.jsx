import React,{useState} from "react";

const States1 =() =>{
    const[count,setCount]=useState(0);
    
    const[name,setName]=useState('pankaj');
    
    const[age,setAge]=useState(23);

    function changeName(event){
        setName('Pankaj Pardeshi')
    }
    return(
        <div>
        <h1>{name} is Learning useState Hooks </h1>
        <h2>{name} age is {age}</h2>
        <h2>The count is = {count}</h2>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>

        <button onClick={()=>{setCount(count - 1)}}>Decrement</button>
        <button onClick={(event)=>{changeName(event)}}>change - Name</button>
        <button onClick={()=>{setAge(25)}}>change Age</button>
        
        
        </div>
    )

}
export default States1;