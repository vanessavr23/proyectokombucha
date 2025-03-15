import React from "react";
import logoKombuchacha from '../../Resources/Images/logo-kombuchacha.svg';
import MenuButton from "../menubutton/menubutton";
import Search from "../search/search";
import PersonalNavBarSection  from "../personalnavbar/personalnavbar"
import {  useAppContext } from '../../Utils/AppContextProvider';
const Navbar = ({toggleMenu,toggleModalDireccion}) => {
    const {setProductsSelected,setProductSelected } = useAppContext();
    return (
        <>
            <div className="mobile:px-7 flex w-full flex-row max-w-[1280px] justify-between py-2 mobile:flex-col ">
                <div className="flex flex-row items-center gap-10 mobile:gap-5 mobile:justify-between cursor-pointer ">
                    <img onClick={() => {setProductsSelected(null);setProductSelected(null)}} alt="logo" src={logoKombuchacha} />
                    <MenuButton onClick={toggleMenu}  />
                    
                </div>
               
                <div className="flex flex-row items-center max-w-[416px] mobile:max-w-full mobile:py-6 flex-grow">
                    <Search />
                </div>
                <>
                    <PersonalNavBarSection toggleModalDireccion={toggleModalDireccion}/>
                </>

            </div>
        </>
    )
}

export default Navbar;