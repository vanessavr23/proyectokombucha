import React from "react";
import closeIcon from "../../Resources/icons/fi-rr-cross-small.svg"
import Button from "../button/button";

const Modal =({setModalState})=>{
    return (
        <div className="fixed inset-0 flex z-50 ">
        <div className="px-12 py-9 max-w-[936px] rounded-xl m-auto relative  w-full bg-white z-20">
            <div className="gap-3 pb-5 border-b border-Grey-grey-40 flex flex-col">
                <p className="Subtitle-20-M"> Elige dónde recibir tus Kombuchachas </p>
                <span className='Paragraph-16-S text-Grey-grey-80'>Podrás ver costos y tiempos de entrega</span>
            </div>
            <div className="flex flex-row gap-7 pt-6 pb-6 mobile:flex-col">
                    <div className="flex flex-col w-full gap-4">
                        <label className="Paragraph-16-S">Región</label>
                        <select className="border rounded-lg border-Grey-grey-60 p-6 "><option>Elige una opción</option></select>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <label className="Paragraph-16-S text-Grey-grey-80">Comuna</label>
                        <select className="border rounded-lg border-Grey-grey-60 p-6"><option>Elige una opción</option></select>
                    </div>
            </div>
            <div className="flex flex-row justify-end">
                <div className=' gap-1 w-[240px] pt-12'>
                    <Button type={"primary"}> <div>{"Seguir Comprando"}</div> </Button>
                </div>
            </div>
            <img onClick={() =>(setModalState(false))} className="absolute top-7 right-7 cursor-pointer" alt="cerrar" src={closeIcon} /> 
        </div>
        <div onClick={() =>(setModalState(false))} className={`w-full h-full z-10 absolute top-0 z-10 opacity-20 bg-black `}>

        </div>
        </div>
    )
}
export default Modal;