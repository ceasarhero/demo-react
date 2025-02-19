import React from "react";

interface graphTexts{
    textsForParagraph:string
}
const Showgraph:React.FC<graphTexts>=(props)=>{

    return(
        <>
        <div>
            {props.textsForParagraph}
        </div>
        </>
    )
}
export default Showgraph;