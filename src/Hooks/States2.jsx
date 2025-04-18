import React,{useState} from "react";

function States2() {   //functionalComponent
    const [numbers, setNumbers] = useState( [] );
    //const [new State, setter function ] = useState(intial state);

    const addNumber = () => {
        setNumbers([... numbers,{
            id: numbers.length,
            value: Math.floor(Math.random() * 10) +1

        }])
    };
    return(
        <div>
            <h1> useState() Hook with Array</h1>
            <h1>
                <button onClick={addNumber}> Add a Number</button>
                <ul>
                    {numbers.map((data) =>{ //map fun
                        return <li key={data.id}> {data.id} : {data.value} </li>
                    })}
                    
                </ul>
            </h1>
        </div>
    )
}
export default States2;