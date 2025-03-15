import React, { useEffect, useState } from "react";
import FilterSection from "../filtersection/filtersection";
import ProductCard from "../productcard/productcard";
import productJson from "../../Resources/Json/productos.json";
import Navigation from "../navigation/navigation";
import ProductTag from "../producttag/producttag";
import { AppProvider, useAppContext } from '../../Utils/AppContextProvider';
import { formatPrice } from "../../Utils/Utils";
import IconAbajo from '../../Resources/icons/icon-angle-small-down.svg'
import IconSubir from '../../Resources/arts/Ilustration-up.svg'
import { isVisible } from "@testing-library/user-event/dist/utils";


const PageProducts=({setProductsSelected,productsSelected}) =>{
    const [filterProperties,setFilterProperties]=useState([]);
    const [products,setProducts]=useState(productJson);
    const [isVisible, setIsVisible] = useState(false);
    const { globalProducts, setGlobalProducts, productSelected,setProductSelected } = useAppContext();
    useEffect(() => {
      
        window.scrollTo(0, 0);
      }, []);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollThreshold = documentHeight * 0.23; // 30% del scroll total
    
        // Cambia la visibilidad según el scroll
        setIsVisible(scrollPosition > scrollThreshold);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        // Limpieza del efecto
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    useEffect(()=>{
        productsSelected && (productsSelected ==="all" || productsSelected ==="todos") ? setFilterProperties([]): setFilterProperties([productsSelected])

    },[])

    useEffect(() => {
        if(filterProperties.length >0)
        {
            let arrayfiltered= filteredProducts();

           setProducts(arrayfiltered)
        }else{
            setProducts(productJson);
        }
       
      }, [filterProperties]);
      useEffect(() => {
        if(products)
        {
          console.log(products)
        }
       
      }, [products]);
      const filteredProducts = () => {
        return productJson.filter(product => 
            filterProperties.length === 0 || 
            filterProperties.includes(product.type)
        );
    };
    
    return(
        <div className="bg-Grey-grey-30 flex flex-col items-center pb-[100px]">
        <Navigation setProductsSelected={setProductsSelected} />
            <div className="max-w-[1280px] w-full flex mobile:px-6">
                <div className="grid grid-cols-4 mobile:grid-cols-2 gap-6 w-full ">
                    <div className="col-span-1 mobile:hidden">
                    <FilterSection productsSelected={productsSelected} setFilterProperties={setFilterProperties} />
                    </div>
                    <div className="flex flex-col col-span-3 gap-5">
                        <h1 className="Title-32 bg-Grey-grey-0 p-3 rounded-xl">Productos</h1>
                        <div className="flex flex-row gap-7">
                            <p className="Paragraph-16-S">Ordenar por:</p>
                            <div className="flex flex-row gap-3">
                                <p className="Subtitle-16-M"> Recomendados</p>
                                <img alt="abajo" src={IconAbajo} />
                            </div>
                        </div>
                        <div className="gap-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-full">
                            { products.map( (product) =>(
                                    <div className="w-fit w-full" key={product.id}> {/* Asegúrate de que cada product tenga una propiedad id */}
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
                ) )}

                        </div>
                    </div>
                
                </div>
            </div>

           { isVisible && <img onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }} className={` fixed  right-[80px]  bottom-[80px] cursor-pointer`} alt="" src={IconSubir} />}
        
        </div>

    )
}
export default PageProducts;