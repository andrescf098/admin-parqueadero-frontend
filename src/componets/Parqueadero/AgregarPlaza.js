import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import AgregarPlazaContainer from './AgregarPlazaContainer';


const AgregarPlaza = () => {
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
            <AgregarPlazaContainer 
              titulo={"Agregar plaza"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default AgregarPlaza;