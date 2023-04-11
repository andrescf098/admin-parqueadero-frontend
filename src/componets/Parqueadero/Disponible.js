import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import DisponibleContainer from './DisponibleContainer';

const Disponible = () => {
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
            <DisponibleContainer
              titulo={"Plazas disponibles"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default Disponible;