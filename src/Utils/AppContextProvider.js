// AppContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const AppContext = createContext();

// Crear un provider para encapsular la lógica del estado
export const AppProvider = ({ children }) => {
    const [globalProducts, setGlobalProducts] = useState(false);
    const [productSelected,setProductSelected]= useState(null);
    const [productsSelected, setProductsSelected] = useState(null);
    const [showModalShop,setShowModalShop]=useState(null);


    return (
        <AppContext.Provider value={{
            globalProducts,setGlobalProducts,
            productSelected,setProductSelected,productsSelected, setProductsSelected,showModalShop,setShowModalShop
        }}>
            {children}
        </AppContext.Provider>
    );
};

// Hook para usar el contexto
export const useAppContext = () => {
    return useContext(AppContext);
};
