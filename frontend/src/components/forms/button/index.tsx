import React from "react";
import { ButtonProps } from "../../../types";

const Button: React.FC<ButtonProps> = ({ buttonValue, additionalClass, icon, onClick }) => {
    return (
        <button className={`btn border-0 ${additionalClass}`} onClick={onClick}>
            <i className={icon}></i>
            {buttonValue}
        </button>
    )
}

export default Button