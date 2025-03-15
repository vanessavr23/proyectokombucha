import React, { useState,useEffect } from "react";
import MenuLink from "../menulink/menulink";
import IconKombuchacha from '../../Resources/icons/icon-hand-holding-heart.svg';
import IconProducto from '../../Resources/icons/icon-coffee.svg';
import IconBlog from '../../Resources/icons/icon-comment-alt.svg';
import IconContacto from '../../Resources/icons/icon-envelope.svg';
import IconPersonal from "../../Resources/icons/icon-user.svg";
import closeIcon from "../../Resources/icons/fi-rr-cross-small.svg"
import "./menu.css";

const Menu=({setStateMenu})=>{
    const [isAninimationOut,setIsAnimationOut] = useState(false);
    const OnclickHandler= () =>{
        setIsAnimationOut(!isAninimationOut);
        setTimeout(() => setStateMenu(false), 400);

    }
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    return(
        <>
        <div className={`mobile:w-full w-[444px] fixed h-full z-50 top-0 flex flex-col bg-Grey-grey-0 items-start py-9 ${isAninimationOut ? 'animate-move-out-right' : 'animate-move-in-right' }`}>
             <div onClick={OnclickHandler} className="absolute cursor-pointer right-4 top-4">
                <img alt="close-icon" src={closeIcon} />
             </div>
            <p className="flex w-full  flex-col px-6 items-start border-b border-Grey-grey-60 
            Title-32 pb-6">Hola</p>
            <MenuLink text={"kombuchacha"} icon={IconKombuchacha}  />
            <MenuLink text={"Nuestros Productos"} icon={IconProducto}  />
            <MenuLink text={"Blog"} icon={IconBlog}  />
            <MenuLink text={"Contacto"} icon={IconContacto}  />
            <MenuLink text={"Ingresa o Regístrate"} icon={IconPersonal}  />
        </div>
        <div className={`w-full h-full absolute top-0 z-10 opacity-20 bg-black ${isAninimationOut && 'animate-fade-out' }`}>

        </div>
        </>
    )
}
export default Menu;