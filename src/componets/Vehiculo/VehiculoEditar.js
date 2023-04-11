import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import VehiculoEditarCotainer from './VehiculoEditarCotainer';

const VehiculoEditar = () => {
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
            <VehiculoEditarCotainer
              titulo={"Editar vehículos"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default VehiculoEditar;