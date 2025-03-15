import React from "react";
import iconburger from '../../Resources/icons/icon-menu-burger.svg';

const MenuButton = ({onClick})=>{
    return (
        <>
        <div className="flex gap-2 cursor-pointer items-center" onClick={onClick}>
            <img className=" w-5 h-5" alt="icon-burger" src={iconburger} />
            <div className="text-center uppercase Paragraph-16-S mobile:hidden">
                {"Menú"}
            </div>
        </div>
        </>
    )
}
export default MenuButton;