import React from "react";
import Footer from "../Footer";
import ListaVehiculosContent from "./ListaVehiculosContent";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";

const listaVehiculos = ({ titulo }) => {
  return (
    <div className='wrapper'>
    <div className="wrapper">
        <div className='wrapper'>    
            <Navbar></Navbar>
        </div>
        <div>
            <SideBar></SideBar>
        </div>
        <div className='content-wrapper'>
            <ListaVehiculosContent
                titulo={"Lista de vehículos"}    
            />
        </div>
    </div>
    <Footer></Footer>
</div>
  );
};

export default listaVehiculos;
