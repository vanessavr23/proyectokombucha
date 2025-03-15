import React from "react";
import Alert from "../alert/alert";
import Navbar from "../navbar/navbar";


const Head = ({toggleMenu,toggleModalDireccion}) => {
    return (
        <React.Fragment>
            <div className="flex w-full flex-col flex-wrap items-center">
               <Alert/>
               <Navbar toggleModalDireccion={toggleModalDireccion} toggleMenu={toggleMenu}/>
                

            </div>

        </React.Fragment>
    )

}

export default Head;