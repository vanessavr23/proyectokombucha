import React from "react";
import { useAppContext } from '../../Utils/AppContextProvider';
const Navigation = () =>{
    const {setProductsSelected,setProductSelected,productSelected } = useAppContext();
    return (
        <>
            <div className="flex flex-row text-left w-full max-w-[1280px] Paragraph-12-M py-4 text-Grey-grey-80 gap-1 mobile:px-6 pt-6">
                <span className=" cursor-pointer " onClick={() => {setProductsSelected(null);setProductSelected(null)}} >Inicio</span>
                <span>/</span>
                <span className={`cursor-pointer ${!productSelected?.titleText && "text-Grey-grey-100"}`} onClick={() => {setProductsSelected("todos");setProductSelected(null)}} >Productos</span>
                {productSelected?.titleText && <span>/</span>}
                {productSelected?.titleText && <span className="text-Grey-grey-100">{productSelected?.titleText} </span>}
            </div>
        </>
    )
}

export default Navigation