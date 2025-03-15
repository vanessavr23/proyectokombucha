import React from "react";
import  "./producttag.css"


const ProductTag=({type,text}) =>{

    return(
        <>
      <div className={`flex py-1 px-2 items-center rounded-lg Subtitle-16-M ${type}`}>
            {text}
      </div>
        </>
    )
}
export default ProductTag;