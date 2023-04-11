import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import SalidaVehiculoContainer from './SalidaVehiculoContainer';


const SalidaVehiculo = () => {
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
            <SalidaVehiculoContainer
              titulo={"Salida Vehiculo"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
}
 
export default SalidaVehiculo;