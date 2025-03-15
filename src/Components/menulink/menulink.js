import React from "react";

const MenuLink = ({ text, icon }) => {
return(
    <div className="flex flex-row items-start gap-3 px-6 py-7 w-full border-b border-Grey-grey-60 bg-Grey-grey-0  ">
    <img className="fill-Grey-grey-100" alt="icon menu" src={icon} />
    <span className=" uppercase Subtitle-16-M">{text} </span>
</div>
)
}

export default MenuLink