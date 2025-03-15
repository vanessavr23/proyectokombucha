import React,{useState} from "react";
import closeIcon from "../../Resources/icons/fi-rr-cross-small.svg";
import { AppProvider, useAppContext } from '../../Utils/AppContextProvider';
import IconMinus from '../../Resources/icons/icon-minus-small.svg'
import IconPlus from '../../Resources/icons/icon-plus-small.svg'
import { formatPrice } from "../../Utils/Utils";
import Button from "../button/button";

const ModalShopingCard =({setModalState})=>{
    const { globalProducts, setGlobalProducts, productSelected,setProductSelected,productsSelected, setProductsSelected,showModalShop,setShowModalShop } = useAppContext();
    const [price,setPrice] = useState(24490);
    const [priceDiscount,setPriceDiscont]=useState();
    const [cantProducto,setCantProductos]=useState(1);
    
    return (
        <div className="fixed inset-0 flex z-50 ">
        <div className="px-12 py-9 max-w-[936px] rounded-xl m-auto relative  w-full bg-white z-20">
            <div className="gap-3 pb-5 border-b border-Grey-grey-40 flex flex-col">
                <p className="Subtitle-20-M text-Grey-grey-80"> Lo que llevas en tu carrito</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-7">
                <div className="flex flex-row">
                    <div className="pr-7">
                        <img className="w-8 " alt="" src="/productos/botella-arandano.png"/>                    
                    </div>
                    <div className="flex flex-col max-w-[145px] w-full">
                        <p className="Paragraph-14-M text-Grey-grey-80">Kombuchacha® Arándano </p>
                        <p className="Paragraph-14-M text-Grey-grey-100">Caja de 12 botellas de 473 ml. </p>
                    </div>
                </div>
                <div>
                    <p className="Subtitle-24-L">{formatPrice(price * cantProducto)} </p>
                </div>
                <div>
                        <div className="flex flex-row">
                            <div onClick={() => { cantProducto > 1 && setCantProductos(cantProducto - 1) }} className="bg-Grey-grey-60 p-3 rounded-tl-xl rounded-bl-xl">
                                <img alt="más" src={IconMinus} />
                            </div>
                            <div className="py-2 px-3 items-center Subtitle-20-M bg-Grey-grey-30">
                                <p className="w-8 h-6 text-center">{cantProducto} </p>
                            </div>
                            <div onClick={() => { cantProducto < 24 && setCantProductos(cantProducto + 1) }} className="bg-Grey-grey-60 p-3 rounded-tr-xl rounded-br-xl">
                                <img alt="menos" src={IconPlus} />
                            </div>
                            <p className="Paragraph-12-M w-[104px] pl-3 flex items-center ">Máximo 24 unidades</p>
                        </div>
                </div>
            </div>
            <div className="flex flex-row justify-end">
                <div className=' gap-1 w-[240px] pt-12 underline'>
                    <Button  onClickFunction={() =>(alert("lalala"))} type={"tiertiary"}> <div>{"Seguir Comprando"}</div> </Button>
                </div>
                <div className=' gap-1 w-[240px] pt-12'>
                    <Button  onClickFunction={() =>(alert("lalala"))} type={"primary"}> <div>{"ir al carrito"}</div> </Button>
                </div>
            </div>



        <img onClick={() =>(setShowModalShop(false))} className="absolute top-7 right-7 cursor-pointer" alt="cerrar" src={closeIcon} /> 
          
        </div>
            <div onClick={() =>(setShowModalShop(false))} className={`w-full h-full z-10 absolute top-0 z-10 opacity-20 bg-black `}>
        </div>
        </div>
    )
}
export default ModalShopingCard;