import React from "react";
import IconLocation from '../../Resources/icons/icon-marker.svg';
import IconShopingCart from "../../Resources/icons/icon-shopping-cart.svg";
import IconPersonal from "../../Resources/icons/icon-user.svg"

const PersonalNavBarSection =({toggleModalDireccion})=>{
    return(
        <div className="flex flex-row items-center gap-7 mobile:pb-6">
            <div onClick={toggleModalDireccion} className=" cursor-pointer flex flex-row items-center gap-2">
                <img src={IconLocation} alt="location-icon" />
                <div className="text-center Paragraph-16-S">{"Ingresa tu ubicación"} </div>
            </div>
            <div className=" flex flex-row items-center gap-2 mobile:hidden">
                <img src={IconShopingCart} alt="shopingcart-icon" />
                
            </div>
            <div className=" flex flex-row items-center gap-2 mobile:hidden">
                <img src={IconPersonal} alt="personal-icon" />
                
            </div>


        </div>
    )
}

export default PersonalNavBarSection;