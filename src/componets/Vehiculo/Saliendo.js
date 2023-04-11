import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import SaliendoContainer from './SaliendoCantainer';

const Saliendo = () => {
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
            <SaliendoContainer
              titulo={"Salida Vehiculos"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default Saliendo;