import React, { useEffect, useState } from "react";
import EtiquetaLata from '../../Resources/arts/etiqueta-latas.svg';
import EtiquetaBotella from '../../Resources/arts/etiqueta-botellas.svg';
import EtiquetaKombuclub from '../../Resources/arts/etiqueta-vector.svg';
import ProductTag from "../producttag/producttag";
import ImgJusta from '../../Resources/arts/justa.svg';
import ImgNatural from '../../Resources/arts/natural.svg';
import ImgViva from '../../Resources/arts/viva.svg';
import Button from "../button/button";
import FondoBotella from '../../Resources/arts/fondo-botella.png';
import BotellaKombucha from '../../Resources/arts/botella-kombucha.png';
import "./pageHome.css";
import ProductCard from "../productcard/productcard";
import productJson from "../../Resources/Json/productos.json";
import BannerImage from '../../Resources/arts/banner1.png';
import RotaBotellas from '../../Resources/arts/botellas-rotar.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import {  useAppContext } from '../../Utils/AppContextProvider';
import { formatPrice } from "../../Utils/Utils";
import BannerSmall1 from "../../Resources/arts/bannersmall1.png";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const PageHome = ({ setProductsSelected }) => {
    const [products, setProducts] = useState(productJson.slice(0, 5));
    const { globalProducts, setGlobalProducts, productSelected,setProductSelected } = useAppContext();

    const selectItemHandler = (product) =>{
        setProductSelected(product);
    }

    useEffect(() => {
        setProductsSelected(null)
    }, []);

    return (
        <>
            <div>
                <div className="h-[548px] items-center overflow-hidden relative mobile:hidden">
                    <img alt="banner" src={BannerImage} />
                    <img className="absolute top-[-50px] left-[20%] animate-spin" alt="banner" src={RotaBotellas} />
                </div>
                <div className="h-[304px] items-center overflow-hidden relative hidden mobile:block">
                    <img className="w-full" alt="banner" src={BannerSmall1} />
                </div>
                <div className="flex flex-col items-center">
                    <div className="max-w-[1280px] w-full flex mobile:px-6">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full pt-20">
                            <div onClick={() => (setProductsSelected("lata"))} className="bg-expanded-red-20 flex PY-7 w-full items-center rounded-xl cursor-pointer">
                                <div className="py-6 px-20 mx-auto">
                                    <img alt="boton-latas" className="w-full" src={EtiquetaLata} />
                                </div>
                            </div>
                            <div onClick={() => (setProductsSelected("botella"))} className="bg-secondary-green-20 flex PY-7 w-full items-center rounded-xl cursor-pointer">
                                <div className="py-6 px-20 mx-auto">
                                    <img alt="boton-latas" className="w-full" src={EtiquetaBotella} />
                                </div>
                            </div>
                            <div onClick={() => (setProductsSelected("all"))} className="bg-secondary-purple-20 flex PY-7 w-full items-center rounded-xl cursor-pointer">
                                <div className="py-6 px-20 mx-auto">
                                    <img alt="boton-latas" className="w-full" src={EtiquetaKombuclub} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="py-[100px] max-w-[698px] gap-10 flex flex-col mobile:px-6">
                        <h2 className="Title-32 text-primary-primary-130 text-center">¡Bienvenido a la tienda online de Kombuchacha Chile!</h2>
                        <p className="Paragraph-16-S text-center"> <span className="Subtitle-16-L">Kombuchacha</span> es una bebida <span className="Subtitle-16-L">natural,</span> burbujeante y saludable. Hecha en la Patagonia,
                            es la única <span className="Subtitle-16-L">kombucha</span> certificada orgánica de Chile.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-Grey-grey-30 pt-[100px] ">
                    <div className="max-w-[1280px] w-full flex flex-col gap-6">
                        <h2 className="Title-32 text-primary-primary-130 text-center pb-6">Nuestros Productos</h2>
                        
                        <div className="w-full mobile:pl-6">

                            {  <Swiper
                                loop={true}
                                navigation={{
                                    clickable: true,
                                }}
                                slidesPerView={2}
                                spaceBetween={24}
                                modules={[Pagination, Navigation]}
                                className={"mySwiper"}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3, // 2 slides en pantallas pequeñas (móviles)
                                    },
                                    720: {
                                        slidesPerView: 2, // 2 slides en pantallas menores o iguales a 720px
                                    },
                                    921: {
                                        slidesPerView: 4, // 4 slides en pantallas mayores a 920px
                                    },
                                }}
                            >

                                {productJson.filter(productos => productos?.type === "botella")?.map((producto) => (
                                    <SwiperSlide className="max-w-[302px] ">
                                        <div onClick={() => selectItemHandler(producto) } className="gap-5 pt-5 pb-7 flex flex-col justify-end items-center min-h-[374px] rounded-xl bg-Grey-grey-0  w-full relative">
                                        <div>
                                            <img className="w-[80px] hover:blur-[1.8px] cursor-pointer" alt="product-image" src={producto?.productImage} />
                                        </div>
                                        <div className="flex flex-col gap-2 self-stretch">
                                            <div className="flex flex-col justify-center gap-[10px] items-start px-6">
                                                <ProductTag text={producto?.tagText} type={producto?.tagType} />
                                            </div>
                                            <div className="self-stretch Subtitle-20-L px-6" dangerouslySetInnerHTML={{ __html: producto?.subtitleText }}>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>

                                ))}
                            </Swiper>}

                        </div>
                        <div className="w-full mobile:pl-6">
                            <Swiper
                                loop={true}
                                navigation={{
                                    clickable: true,
                                }}
                                slidesPerView={2}
                                spaceBetween={24}
                                modules={[Pagination, Navigation]}
                                className={"mySwiper"}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1.3, // 2 slides en pantallas pequeñas (móviles)
                                    },
                                    720: {
                                        slidesPerView: 2, // 2 slides en pantallas menores o iguales a 720px
                                    },
                                    921: {
                                        slidesPerView: 4, // 4 slides en pantallas mayores a 920px
                                    },
                                }}
                            >

                                {productJson.filter(productos => productos?.type === "lata")?.map((producto) => (
                                    <SwiperSlide className="max-w-[302px] ">
                                        <div onClick={() => selectItemHandler(producto) } className="gap-5 pt-5 pb-7 flex flex-col justify-end items-center min-h-[374px] rounded-xl bg-Grey-grey-0  w-full relative">
                                        <div>
                                            <img className="w-[80px] hover:blur-[1.8px] cursor-pointer" alt="product-image" src={producto?.productImage} />
                                        </div>
                                        <div className="flex flex-col gap-2 self-stretch">
                                            <div className="flex flex-col justify-center gap-[10px] items-start px-6">
                                                <ProductTag text={producto?.tagText} type={producto?.tagType} />
                                            </div>
                                            <div className="self-stretch Subtitle-20-L px-6" dangerouslySetInnerHTML={{ __html: producto?.subtitleText }}>
                                            </div>
                                        </div>
                                    </div></SwiperSlide>

                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-Grey-grey-30 py-[100px]">
                    <div className="max-w-[1280px] w-full flex flex-col gap-10 items-center mobile:px-6">
                        <h2 className="Title-32 text-primary-primary-130 text-center max-w-[524px]">¡Kombuchacha® más que una marca es</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
                            <div className="bg-expanded-red-20 text-expanded-red-100 w-full py-12 px-11 items-center gap-10 flex flex-col">
                                <img className="mx-auto" alt="justa" src={ImgJusta} />
                                <p className="Paragraph-16-S mx-auto w-[212px] text-center">Por la Dignidad Humana, la Solidaridad & Justicia Social y la Transparencia.</p>
                            </div>
                            <div className="bg-secondary-green-20 text-secondary-green-100 w-full py-12 px-11 items-center gap-10 flex flex-col">
                                <img className="mx-auto" alt="justa" src={ImgNatural} />
                                <p className="Paragraph-16-S mx-auto w-[212px] text-center">Comprometidos con la Sustentabilidad Medioambiental.</p>
                            </div>
                            <div className="bg-secondary-purple-20 text-secondary-purple-100 w-full py-12 px-11 items-center gap-10 flex flex-col">
                                <img className="mx-auto" alt="justa" src={ImgViva} />
                                <p className="Paragraph-16-S mx-auto w-[212px] text-center">Elaboramos bebidas saludables velando por su calidad en toda la cadena.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-r-Grey-grey-0 py-[80px] flex flex-col items-center">
                    <div className="max-w-[1280px] flex w-full mobile:px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 w-full">
                            <div className="gap-7 flex flex-col max-w-[620px] py-7 px-10 justify-center">
                                <h2 className="Title-32 text-primary-primary-130">¿Qué es la Kombucha?</h2>
                                <p className="Paragraph-16-S">
                                    Explora la Kombucha, una bebida fermentada milenaria. Con su sabor único y una variedad de beneficios para la salud,
                                    la Kombucha se ha convertido en una opción popular para quienes buscan mejorar su bienestar.
                                </p>
                                <div className="max-w-[276px] w-full">
                                    <Button onClickFunction={() => alert("lalala")} type={"primary"}>
                                        <div className="flex flex-row gap-1">{"Conoce más aquí"}</div>
                                    </Button>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-center mobile:hidden">
                                <img alt="Fondo Botella" src={FondoBotella} className="w-auto h-auto" />
                                <div className="absolute top-[50%] left-[50%] w-auto h-auto translate-x-[-50%] translate-y-[-50%]">
                                    <img alt="Botella Kombucha" src={BotellaKombucha} className="animate-spin-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center bg-Grey-grey-30 py-[100px] ">
                    <div className="max-w-[1280px] w-full flex flex-col gap-6 mobile:px-6">
                        <h2 className="Title-32 text-primary-primary-130 text-center pb-6">Los más vendidos</h2>
                        <div className="w-full mobile:pl-6">
                        <Swiper
                                loop={true}
                                navigation={{
                                    clickable: true,
                                }}
                                slidesPerView={2}
                                spaceBetween={24}
                                modules={[Pagination, Navigation]}
                                className={"mySwiper"}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1, // 2 slides en pantallas pequeñas (móviles)
                                    },
                                    720: {
                                        slidesPerView: 1, // 2 slides en pantallas menores o iguales a 720px
                                    },
                                    921: {
                                        slidesPerView: 4, // 4 slides en pantallas mayores a 920px
                                    },
                                }}
                            >
                            {
                            
                            
                            
                            
                            products.map((product) => (
                                <SwiperSlide className="max-w-[302px] ">
                                <div key={product.id}> {/* Asegúrate de que cada product tenga una propiedad id */}
                                    <ProductCard
                                        producto={product}
                                        subtitleText={product?.subtitleText}
                                        productimage={product?.productImage}
                                        tagType={product?.tagType}
                                        tagText={product?.tagText}
                                        paragraphSection={product?.paragraphSection}
                                        descriptionText={product?.descriptionText}
                                        price={formatPrice(product?.price)}
                                        priceDiscount={formatPrice(product?.priceDiscount)}
                                        newText={product?.newText}
                                    />
                                </div>
                                </SwiperSlide>
                            ))
                            
                            
                            }
                                    </Swiper>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default PageHome