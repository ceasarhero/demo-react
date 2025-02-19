import React from "react";
interface buttonProperty{
    textForButton:string
}
const Buttoncompo:React.FC<buttonProperty>=(props)=>{
return(
<>
<button>{props.textForButton}</button>
</>
)
}
export default Buttoncompo;