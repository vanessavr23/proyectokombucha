import React,{useState} from "react";
import ProductTag from "../producttag/producttag";
import Button from "../button/button";
import { ReactComponent as IconShop } from "../../Resources/icons/icon-shopping-cart-add.svg";
import {  useAppContext } from '../../Utils/AppContextProvider';


const ProductCard = ({ tagText, tagType, subtitleText,descriptionText,paragraphSection,price,priceDiscount ,productimage,newText,producto}) => {
    const { globalProducts, setGlobalProducts, productSelected,setProductSelected,setShowModalShop } = useAppContext();
    const [buttonType, setButtonType] = useState("secondary");
    const selectItemHandler = (product) =>{
        setProductSelected(product);
    }
    return (
        <>
            <div className="gap-5 pt-5 pb-7 flex flex-col justify-end items-center rounded-xl bg-Grey-grey-0  w-full relative">
                <div className="hover:blur-[1.8px] cursor-pointer">
                    <img onClick={() => selectItemHandler(producto) } alt="product-image" src={productimage} />
                </div>
                <div className="flex flex-col gap-2 self-stretch">
                    <div className="flex flex-col justify-center gap-[10px] items-start px-6">
                        <ProductTag text={tagText} type={tagType} />
                    </div>
                    <div className="flex flex-col justify-center gap-3 self-stretch items-start px-6 ">
                        <div className="dataprices flex flex-col items-start self-stretch gap-2">
                            <div className="data flex flex-col items-start justify-center self-stretch gap-1">
                                <div className="titleproduct h-[68px] flex flex-col items-start self-stretch">
                                    <div className="sabor flex flex-col items-start justify-center self-stretch">
                                        <div className="self-stretch Subtitle-20-L" dangerouslySetInnerHTML={{ __html: subtitleText }}>
                                        
                                        </div>
                                        <div className="Paragraph-14-M">
                                            {paragraphSection}
                                        </div>
                                    </div>
                                </div>
                                <div className="Paragraph-14-M">
                                        {descriptionText}
                                    </div>
                            </div>
                            <div className="prices flex justify-center items-center gap-[10px] ">
                            <div className="Subtitle-24-L">{price} </div>
                            <div className="Subtitle-20-S line-through" > {priceDiscount} </div>
                            </div>

                        </div>
                        <div onMouseEnter={() => setButtonType("primary")} onMouseLeave={() => setButtonType("secondary")}  className="buttons flex items-center justify-center w-full">
                            <Button 
                                         onClickFunction={() =>(setShowModalShop(true))} type={buttonType}> <div className="flex flex-row gap-1">{"Agregar"} <IconShop className="fill-expanded-turquoise-140"/> </div> </Button>
                        </div>
                    </div>

                </div>
                {newText && <div className="absolute top-6 right-6 bg-secondary-green-100 rounded-lg uppercase text-Grey-grey-0 py-1 px-3 Subtitle-16-L">
                    {newText}
                </div>}
            </div>
        </>
    )
}
export default ProductCard;