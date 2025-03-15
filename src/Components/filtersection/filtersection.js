import React, { useEffect, useState } from "react";
import CheckboxComponent from "../checkbox/checkbox";
import Button from "../button/button";

const FilterSection=({setFilterProperties,productsSelected}) =>{
    const [arrayOptions,setArrayOptions] =useState([]);
    const handlerState = (value, isChecked) => {
        setArrayOptions(prevArrayOptions => 
            isChecked
                ? [...prevArrayOptions, value]  
                : prevArrayOptions.filter(option => option !== value)
        );
    };
    useEffect(() => {
       if(arrayOptions?.length >0){
        setFilterProperties(arrayOptions)
    }else{
        setFilterProperties([])
    }
    }, [arrayOptions]);  

    
    return(
        <>
        <div className="gap-10 flex flex-col p-6 bg-Grey-grey-0 rounded-xl">
            
            <div className="gap-4 flex flex-col">
                <div className="pb-4 Subtitle-20-M border-b border-Grey-grey-70">Presentación</div>
                <div className="flex flex-col gap-3">
                    <CheckboxComponent value={'lata'} productsSelected={productsSelected} handlerState={handlerState} text={"Latas - 350 ml."}/>
                    <CheckboxComponent value={'botella'} productsSelected={productsSelected} handlerState={handlerState} text={"Botellas - 500 ml."}/>
                    <CheckboxComponent value={'all'} productsSelected={productsSelected} handlerState={handlerState} text={"KombuClub"}/>
                </div>
            </div>
            
            <div className="gap-4 flex flex-col">
                <div className="pb-4 Subtitle-20-M border-b border-Grey-grey-70">Tipo</div>
                <div className="flex flex-col gap-3">
                    <CheckboxComponent value={'cero'} productsSelected={productsSelected} handlerState={handlerState} text={"Cero Calorías"}/>
                    <CheckboxComponent value={'calorias'} productsSelected={productsSelected} handlerState={handlerState} text={"Infusiones"}/>
                    <CheckboxComponent value={'te'} productsSelected={productsSelected} handlerState={handlerState} text={"Té"}/>
                </div>
            </div>
            <div className="gap-4 flex flex-col">
                <div className="pb-4 Subtitle-20-M border-b border-Grey-grey-70">Sabores</div>
                <div className="flex flex-col gap-3">
                    <CheckboxComponent value={'te-negro'} productsSelected={productsSelected} handlerState={handlerState} text={"Enfoca - Té negro"}/>
                    <CheckboxComponent value={'arandano'} productsSelected={productsSelected} handlerState={handlerState} text={"Proteje - Arándano "}/>
                    <CheckboxComponent value={'jengibre'} productsSelected={productsSelected} handlerState={handlerState} text={"Activa - Jengibre"}/>
                    <CheckboxComponent value={'cedron'} productsSelected={productsSelected} handlerState={handlerState}  text={"Calma - Cedrón"}/>
                    <CheckboxComponent value={'te-verde'} productsSelected={productsSelected} handlerState={handlerState} text={"Revive - Té verde"}/>
                </div>
            </div>
            <div className="buttons flex flex-col items-center justify-center w-full hidden">
                <Button onClickFunction={() =>(alert("lalala"))} type={"secondary"}> <div className="flex flex-row gap-1">{"Quitar Filtros"} </div> </Button>
                <Button onClickFunction={() =>(alert("lalala"))} type={"secondary"}> <div className="flex flex-row gap-1">{"Aplicar"} </div> </Button>
            </div>
        </div>
        </>
    )
}
export default FilterSection;