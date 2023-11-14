import React from "react";
interface ButtonProps{
    buttonValue?:string,
    additionalClass?:string,
    icon?: string;
    onClick?: () => void;
}
const Button:React.FC <ButtonProps> =({buttonValue,additionalClass,icon,onClick})=>{
    return(
        <>
            <button className={`btn border-0 ${additionalClass}`} onClick={onClick}><i className={icon}></i>{buttonValue}</button>
        </>
    )
}

export default Button