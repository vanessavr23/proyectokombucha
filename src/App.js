import logo from './logo.svg';
import './App.css';
import Head from './Components/Header/header';
import Menu from './Components/menu/menu';
import { useState, useEffect } from 'react';
import Modal from './Components/modal/modal';
import PageProducts from './Components/PageProducts/PageProducts';
import SectionSubs from './Components/section-subs/section-subs';
import Footer from './Components/footer/footer';
import PageHome from './Components/pageHome/pageHome';
import PageProducto from './Components/pageProducto/pageProducto';
import { AppProvider, useAppContext } from './Utils/AppContextProvider';
import productJson from "./Resources/Json/productos.json";
import ModalShopingCard from './Components/modalshopingCart/modalShopingCart';

function MainApp() {
  const [stateMenu, setStateMenu] = useState(false);
  const [stateModalDireccion, setStateModalDireccion] = useState(false);
  //const [productsSelected, setProductsSelected] = useState(null);
  const { globalProducts, setGlobalProducts, productSelected,setProductSelected,productsSelected, setProductsSelected,showModalShop,setShowModalShop } = useAppContext();

  useEffect(() => {
    setGlobalProducts(productJson);
  }, [setGlobalProducts]);
  useEffect(() => {
    console.log("context",productSelected)
 }, [productSelected]);

  useEffect(() => {
    console.log("global", globalProducts || {});
  }, [globalProducts]);

  const toggleMenu = () => {
    setStateMenu(prevState => !prevState);
  };

  const toggleModalDireccion = () => {
    setStateModalDireccion(prevState => !prevState);
  };

  return (
    <div className="App text-Grey-grey-100 font-montserrat">
      <Head toggleMenu={toggleMenu} toggleModalDireccion={toggleModalDireccion} />
      {productsSelected && !productSelected  && <PageProducts productsSelected={productsSelected} setProductsSelected={setProductsSelected} />}
      {productSelected && <PageProducto />}
      {!productsSelected  && !productSelected && <PageHome setProductsSelected={setProductsSelected} />}
      <SectionSubs />
      {stateMenu && <Menu setStateMenu={setStateMenu} />}
      {stateModalDireccion && <Modal setModalState={setStateModalDireccion} />}
      {showModalShop && <ModalShopingCard/>}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}

export default App;
