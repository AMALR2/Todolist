import React from "react";
interface inputProps{
    placeHolder?:string,
    value?:string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input:React.FC <inputProps> =({placeHolder,value,onChange})=>{
    return(
        <>
            <input type="text" placeholder={placeHolder} className="form-control" value={value} onChange={onChange}></input>
        </>
    )
}

export default Input