import React,{useState, useEffect} from "react";

function Effects(){
    const [IsOn, setIsOn]=useState(false)
    useEffect(()=>  {
        console.log('Executed!'+Math.random()+10);
    })

    return(
        <div>
            <h1>useEffect() Effect Hook</h1>

            {
                !IsOn &&(
                    <button type="button" onClick={()=> setIsOn(true)}> <h1>Subscribe</h1> </button>
                )
            }

            {
                IsOn &&(
                    <button type="button" onClick={()=>setIsOn(false)}> <h1>Successfully subscribed</h1></button>
                )
            }
        </div>
    )
}
export default Effects;