import React from "react";
import './button.css'


const Button=({type,children ,onClickFunction}) =>{

    return(
        <>
            <button onClick={onClickFunction} className={`${type} h-12 Subtitle-16-M w-full s cursor-pointer`}>
                    {children}
            </button>
        </>
    )
}
export default Button;