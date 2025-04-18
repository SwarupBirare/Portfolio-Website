import React, { useEffect, useState } from "react";
import axios from "axios";
import  "./AlbumApi0.css";
function AlbumApi0(){
    const[Albums, setAlbums]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setAlbums(res.data);
        })
    },[])
    return(
        <div>
            <h1>AlbumAPI0</h1>
            {Albums.map((value)=>{
            return(
                <div className="card">
                <div key={value.id}  id="data">
                    <h3>{value.userId}</h3>
                    <h3>{value.title}</h3>
                    <h3>{value.id}</h3>
                    <h3>{value.completed}</h3>
                </div>
                </div>
            )
            })}
        </div>
    )

}
export default AlbumApi0;