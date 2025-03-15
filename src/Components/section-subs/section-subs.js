import React from "react";
import Button from "../button/button";
import ImgSubs from '../../Resources/arts/img-suscripcion.png';

const SectionSubs=() => {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-row max-w-[1280px] items-center w-full py-8 mobile:justify-center mobile:px-6">
                    <div className="flex flex-col gap-10 max-w-[526px]">
                        <div className="flex flex-col gap-4">
                            <p className="Title-32 text-primary-primary-130">Ofertas <span>exclusivas</span> para <span>Suscriptores</span></p> 
                            <p className="Paragraph-16-S">Únete a nuestra comunidad y disfruta de ofertas exclusivas y productos 
                                especiales solo para suscriptores</p>
                        </div>
                        <div className="flex flex-row gap-3">
                            <input
                            className="focus:outline-none placeholder: bg-Grey-grey-30 text-Grey-grey-80 Paragraph-16-S py-[14px] px-5 
                            rounded-xl max-w-[390px] w-full" 
                            type={"text"}  placeholder="Escribe tu correo aquí"/>
                            <Button onClickFunction={() =>(alert("lalala"))} type={"primary"}> 
                                <div className="flex flex-row gap-1 p-7">{"Enviar"} </div> 
                            </Button>
                        </div>
                    </div>
                    <div className="w-full flex items-end flex-row justify-end mobile:hidden">
                        <img className="" alt="logo" src={ImgSubs} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionSubs;