import React, { useEffect, useState } from "react";
import axios from"axios";
function AlbumApi(){

    const [albums, setAlbums]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums/")
        .then(res=>{
            console.log(res);
            console.log(res.data);
            setAlbums(res.data);
        });
    },[]);
    return(
        <div>
            <h1>Albums API</h1>
            {albums.map((value)=>{
                return(
                    <div key={value.id}>
                        <h4 >{value.id}</h4>
                        <h4>{value.title}</h4>
                        <h4>{value.userId}</h4>

                    </div>
                )
            })}
        </div>
    )
}
export default AlbumApi; 