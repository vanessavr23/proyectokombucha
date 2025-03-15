import React from "react";
const Alert = ()=>{
    return(
        <div className="flex bg-secondary-green-100 w-full flex-row py-[12px] gap-1  justify-center content-center mobile:px-7">
        <p className="text-center text-Grey-grey-0 .Paragraph-16-S">
            {"¡Recuerda! Los pedidos que"} <span className="font-bold ">
            {"BOTELLAS,"}
        </span>     {"incluyen sólo llegan a comunas principales."}
        </p>

    </div>
    )
}
export default Alert;