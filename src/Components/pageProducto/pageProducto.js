import React, { useEffect, useState } from "react";
import Navigation from "../navigation/navigation";
import Image1 from '../../Resources/arts/imagenes-botella-arandano/image-1.png'
import Image2 from '../../Resources/arts/imagenes-botella-arandano/image-2.png'
import Image3 from '../../Resources/arts/imagenes-botella-arandano/image-3.png'
import Image4 from '../../Resources/arts/imagenes-botella-arandano/image-4.png'
import StarYellow from '../../Resources/icons/icon-star-yellow.svg'
import StarGrey from '../../Resources/icons/icon-star-grey.svg'
import IconMinus from '../../Resources/icons/icon-minus-small.svg'
import IconPlus from '../../Resources/icons/icon-plus-small.svg'
import Button from "../button/button";
import BannerProducto from '../../Resources/arts/banner-small.svg'
import BannerBotellas from '../../Resources/arts/botellas-bannersmal.png'
import { formatPrice } from "../../Utils/Utils";
import ImgAraucania from '../../Resources/arts/ilus-araucania.png';
import ImgSingluten from '../../Resources/arts/ilus-singluten.png';
import ImgVegana from '../../Resources/arts/ilus-vegana.png';
import ImgKosher from '../../Resources/arts/ilus-kusher.png';
import ImgHalal from '../../Resources/arts/ilus-halal.png';
import {  useAppContext } from '../../Utils/AppContextProvider';




const PageProducto = ({setProductsSelected}) =>{
    const [tabSelector,setTabSelector] = useState("tab1");
    const [cantProducto,setCantProductos]=useState(1);
    const { globalProducts, setGlobalProducts, productSelected,setProductSelected,setShowModalShop } = useAppContext();
    const [price,setPrice] = useState(productSelected?.price);
    const [priceDiscount,setPriceDiscont]=useState(productSelected?.priceDiscount);
    const [imageSelected,setImageSelected]=useState(Image1)
    useEffect(() => {
        console.log(tabSelector,"var")
    }, [tabSelector]);
    useEffect(() => {
      
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="bg-Grey-grey-30 flex flex-col items-center pb-[100px]">
                <Navigation setProductsSelected={setProductsSelected} />
                <div className="max-w-[1280px] w-full flex mobile:px-6 gap-6">
                    <div className="grid grid-cols-3 mobile:grid-cols-1 gap-6 w-full ">
                        <div className="flex flex-col col-span-2 gap-6">
                            <div className="flex flex-col  bg-Grey-grey-0 rounded-xl py-5">
                                <div className="flex flex-row">
                                    <div className="flex flex-col gap-3 p-6">
                                        <img className={`w-20 cursor-pointer ${ imageSelected !== Image1 && "opacity-60"} `} onClick={() => (setImageSelected(Image1))}  alt="" src= {Image1} />
                                        <img className={`w-20 cursor-pointer ${ imageSelected !== Image2 && "opacity-60"} `} onClick={() => (setImageSelected(Image2))} alt="" src= {Image2} />
                                        <img className={`w-20 cursor-pointer ${ imageSelected !== Image3 && "opacity-60"} `} onClick={() => (setImageSelected(Image3))} alt="" src= {Image3} />
                                        <img className={`w-20 cursor-pointer ${ imageSelected !== Image4 && "opacity-60"} `} onClick={() => (setImageSelected(Image4))} alt="" src= {Image4} />
                                    </div>
                                    <div className="flex flex-col items-center w-full">
                                        <img className="" alt="" src= {imageSelected} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col  bg-Grey-grey-0 rounded-xl py-9 px-6 gap-14" >

                                <div className="border rounded-xl">
                                    <div class="mb-4 grid grid-cols-3 Subtitle-16-M">
                                        <button onClick={()=>{setTabSelector("tab1")}} id="tab1" class={`mobile:Paragraph-12-M border-b border-Grey-grey-0 rounded-tl-lg tab-button bg-Grey-grey-0 px-4 py-3  ${tabSelector !=="tab1" && " text-Grey-grey-70 bg-Grey-grey-30 border-b border-r !border-Grey-grey-60" } `}>DESCRIPCIÓN</button>
                                        <button onClick={()=>{setTabSelector("tab2")}} id="tab2" class={`border-b border-Grey-grey-0 tab-button bg-Grey-grey-0 px-4 py-3  ${tabSelector !=="tab2" && "text-Grey-grey-70 bg-Grey-grey-30 border-b border-r border-l !border-Grey-grey-60" } `}>BENEFICIOS</button>
                                        <button onClick={()=>{setTabSelector("tab3")}} id="tab3" class={`border-b border-Grey-grey-0 rounded-tr-lg  tab-button bg-Grey-grey-0 px-4 py-3  ${tabSelector !=="tab3" && "text-Grey-grey-70 bg-Grey-grey-30 border-b border-l !border-Grey-grey-60" } `}>INFORMACIÓN ADICIONAL</button>
                                    </div>

                                    <div id="tab-content" class="Paragraph-16-S py-7 px-6">
                                    { tabSelector=== "tab1" && <div  id="tab1" >
                                            <p>Infusión mix de cedrón y té verde orgánicos certificados fermentados en agua del Sur de Chile, cultivo de kombucha, 
                                                azúcar de caña orgánica certificada, jugo concentrado de arándano orgánico certificado (2%), concentrado de jengibre. </p>
                                        </div>}
                                    { tabSelector=== "tab2" && <div id="tab2" className="gap-2 flex flex-col" >
                                            <p>– Contiene microorganismos vivos beneficiosos para la salud.</p>
                                            <p>– Fortalece tu microbiota.</p>
                                            <p>– Fortalece tu sistema inmune.</p>
                                            <p>– Fortalece tu sistema digestivo.</p>
                                            <p>– Antioxidante.</p>
                                            <p>– Antiinflamatoria.</p>
                                        </div>}
                                        {tabSelector=== "tab3" && <div id="tab3" >
                                            <table class="min-w-full border-collapse border border-gray-300">
                                                <thead>
                                                    <tr class="bg-Grey-grey-30 Paragraph-16-S">
                                                        <th class="border border-gray-300 px-4 py-2">Peso</th>
                                                        <th class="border border-gray-300 px-4 py-2">Dimenciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="border border-gray-300 px-4 py-2 text-center">9,58 kg</td>
                                                        <td class="border border-gray-300 px-4 py-2 text-center">29,2 x 21,7 x 19,8 cm</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>}
                                    </div> 
                                </div>
                                <div className="grid grid-cols-5 p-6 mobile:grid-cols-2">
                                        <div className="flex flex-col items-center w-full gap-7 mobile:py-6">
                                            <img alt="ícono Araucaía" src={ImgAraucania} />
                                            <p className="text-center Paragraph-16-S">Nacida en la Araucanía</p>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-7 mobile:py-6">
                                            <img alt="ícono Araucaía" src={ImgSingluten} />
                                            <p className="text-center Paragraph-16-S">Sin Glútén</p>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-7 mobile:py-6">
                                            <img alt="ícono Araucaía" src={ImgVegana} />
                                            <p className="text-center Paragraph-16-S">Vegana</p>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-7 mobile:py-6">
                                            <img alt="ícono Araucaía" src={ImgKosher} />
                                            <p className="text-center Paragraph-16-S">Kosher</p>
                                        </div>
                                        <div className="flex flex-col items-center w-full gap-7 mobile:py-6">
                                            <img alt="ícono Araucaía" src={ImgHalal} />
                                            <p className="text-center Paragraph-16-S">Halal</p>
                                        </div>
                                </div> 

                            </div>
                            <div className="flex flex-col  bg-Grey-grey-0 rounded-xl py-9 px-6 gap-5" >
                                <h2 className="Subtitle-16-M">Valoraciones (10) </h2>
                                <div className="flex flex-row ">
                                        <p className="Subtitle-24-L pr-4">4.7</p>
                                        <img className="w-7" alt="estrella" src= {StarYellow} />
                                        <img className="w-7" alt="estrella" src= {StarYellow} />
                                        <img className="w-7" alt="estrella" src= {StarYellow} />
                                        <img className="w-7" alt="estrella" src= {StarYellow} />
                                        <img className="w-7" alt="estrella" src= {StarYellow} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="border border-Grey-grey-60 rounded-lg flex flex-col px-4 py-2 gap-2">
                                        <div className="flex flex-row">
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <p className="Paragraph-14-M text-Grey-grey-70 pl-3 flex align-center">02 JUN 2024</p>
                                        </div>  
                                        <div className="flex flex-col">
                                            <h3 className="Subtitle-16-M">Martín</h3>
                                            <p>Muy buenos productos</p>
                                        </div>  
                                    </div>
                                    <div className="border border-Grey-grey-60 rounded-lg flex flex-col px-4 py-2 gap-2">
                                        <div className="flex flex-row">
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <p className="Paragraph-14-M text-Grey-grey-70 pl-3 flex align-center">02 JUN 2024</p>
                                        </div>  
                                        <div className="flex flex-col">
                                            <h3 className="Subtitle-16-M">Daniela</h3>
                                            <p>Lo mejor que he probado</p>
                                        </div>  
                                    </div>
                                    <div className="border border-Grey-grey-60 rounded-lg flex flex-col px-4 py-2 gap-2">
                                        <div className="flex flex-row">
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <img className="w-5" alt="estrella" src= {StarYellow} />
                                            <p className="Paragraph-14-M text-Grey-grey-70 pl-3 flex align-center">02 JUN 2024</p>
                                        </div>  
                                        <div className="flex flex-col">
                                            <h3 className="Subtitle-16-M">Sofía</h3>
                                            <p>Bebidas ricas y saludables</p>
                                        </div>  
                                    </div>
                                </div>
                                    <div className="items-center">
                                        <h2 className="Subtitle-16-M text-center">VER MÁS</h2>
                                    </div>
                            </div>
                            
                        </div>
                        <div className="flex flex-col gap-6 col-span-1 h-fit top-5 sticky">
                            <div className="flex flex-col bg-Grey-grey-0 rounded-xl h-fit">
                                <div className="p-6 gap-3 flex flex-col">
                                    <h1 className="Subtitle-24-L">{productSelected?.titleText} </h1>
                                    <p className="Paragraph-16-S">Caja de 12 botellas de 500 ml.</p>
                                    <div className="flex flex-row">
                                        <img className="w-4" alt="" src= {StarYellow} />
                                        <img className="w-4" alt="" src= {StarYellow} />
                                        <img className="w-4" alt="" src= {StarYellow} />
                                        <img className="w-4" alt="" src= {StarYellow} />
                                        <img className="w-4" alt="" src= {StarYellow} />
                                        <p className="Paragraph-12-M text-Grey-grey-70 pl-2">(10 Comentarios)</p> 
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="text-Grey-grey-120 Subtitle-24-L"> {formatPrice(price*cantProducto)}</p>
                                        <p className="text-Grey-grey-80 Subtitle-24-S line-through">{formatPrice(priceDiscount*cantProducto)} </p> 
                                    </div>
                                    <div className="flex flex-row">
                                        <div onClick={() =>{cantProducto >1 && setCantProductos(cantProducto-1)}} className="bg-Grey-grey-60 p-3 rounded-tl-xl rounded-bl-xl cursor-pointer">
                                            <img alt="más" src={IconMinus} />
                                        </div>
                                        <div className="py-2 px-3 items-center Subtitle-20-M bg-Grey-grey-30">
                                            <p className="w-8 h-6 text-center">{cantProducto} </p>
                                        </div>
                                        <div onClick={()=>{cantProducto <24 && setCantProductos(cantProducto+1)}} className="bg-Grey-grey-60 p-3 rounded-tr-xl rounded-br-xl cursor-pointer">
                                            <img alt="menos" src={IconPlus} />
                                        </div>
                                        <p className="Paragraph-12-M w-[104px] pl-3 flex items-center ">Máximo 24 unidades</p>
                                    </div>
                                    <div className="pt-7">
                                        <Button type={"primary"}> <div className="flex flex-row gap-1">{"Agregar"} </div> </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="relative overflow-hidden">
                                <img alt="banner-descuentos w-full" src={BannerProducto}/>
                                <img className="absolute top-0 rounded-bl-3xl" alt="banner-descuentos" src={BannerBotellas}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageProducto