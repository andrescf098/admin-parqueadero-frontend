import React from "react";
import AgregarVehiculoContainer from "./AgregarVehiculoContainer";
import Footer from "../Footer";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";

const AgregarVehiculo = () => {
  return (
    <div className="wrapper">
      <div>
        <div className="wrapper">
          <Navbar></Navbar>
        </div>
        <div>
          <SideBar></SideBar>
        </div>
        <div className="content-wrapper" style={{backgroundColor:"white"}}>
          <AgregarVehiculoContainer 
            titulo={"Agregar Vehiculo"}
          />
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default AgregarVehiculo;
