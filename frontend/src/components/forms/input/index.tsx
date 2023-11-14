import React from "react";
import { inputProps } from "../../../types";


const Input:React.FC <inputProps> =({placeHolder,value,onChange})=>{
    return(
        <>
            <input type="text" placeholder={placeHolder} className="form-control" value={value} onChange={onChange}></input>
        </>
    )
}

export default Input