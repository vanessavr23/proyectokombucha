import React from "react";
import LogoFooter from '../../Resources/Images/logo-footer.svg';
import Instagram from '../../Resources/icons/sn-instagram.svg';
import Facebook from '../../Resources/icons/sn-facebook.svg';
import Youtube from '../../Resources/icons/sn-youtube.svg';
import  { ReactComponent as Correo } from '../../Resources/icons/icon-envelope.svg';

const Footer = () => {
    return (
        <>
            <div className="bg-primary-primary-100 text-Grey-grey-0 gap-12 flex w-full flex-row justify-center py-12 mobile:px-7">
                <div className="mobile:text-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1280px] w-full mobile:justify-center">
                    <div className="mx-auto">
                        <img alt="" src={LogoFooter}/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="Subtitle-16-L">Kombuchacha</h3>
                        <div className="flex flex-col Paragraph-12-M gap-2">
                            <p className="cursor-pointer">¿Quiénes somos?</p>
                            <p className="cursor-pointer">¿Cómo comprar?</p>
                            <p className="cursor-pointer">Preguntas Frecuentes</p>
                            <p className="cursor-pointer">Trabaja con nosotros</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="Subtitle-16-L">Enlaces de Interés</h3>
                        <div className="flex flex-col Paragraph-12-M gap-2">
                            <p className="cursor-pointer">Quiero vender KOMBUCHACHA</p>
                            <p className="cursor-pointer">Términos y Condiciones</p>
                            <p className="cursor-pointer">Politicas de privacidad</p>
                            <p className="cursor-pointer">Política de Calidad e Inocuidad</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h3 className="Subtitle-16-L">Contáctanos</h3>
                            <div className="flex flex-row gap-2 "><Correo className="w-5  fill-white" alt="Correo"/> <p className="Paragraph-12-M">contacto@kombuchacha.cl</p></div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="Subtitle-16-L">Venta a empresas</h3>
                            <div className="flex flex-row gap-2"><Correo className="w-5  fill-white" alt="Correo" src={Correo}/> <p className="Paragraph-12-M">contacto@kombuchacha.cl</p></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="Subtitle-16-L">Síguenos</h3>
                        <div className="flex flex-row gap-3 mobile:mx-auto">
                            <img alt="Instagram" src={Instagram}/>
                            <img alt="Facebook" src={Facebook}/>
                            <img alt="Youtube" src={Youtube}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary-primary-130 text-Grey-grey-0 flex w-full py-5 justify-center">
                <p className="Paragraph-12-M">2024 Kombuchacha®. Todos los derechos reservados.</p>
            </div>
        </>
    )

}

export default Footer;