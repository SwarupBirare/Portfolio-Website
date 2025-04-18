import React from "react";
let Intro=()=>{
    const domain="react";
    var OTT={
        webseries: 'Squid Game',
        platform: 'NetFlix'
    }
    return(
        <div>
            <h2>
                We are learning Concept of Components in {domain}
            </h2>
            <p>
                We are watching {OTT.webseries} on {OTT.platform}
            </p>
        </div>
    )
}
export default Intro;