import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import EntranteContainer from './EntranteContainer';

const Entrante = () => {
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
            <EntranteContainer
              titulo={"Vehiculos Entrantes"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default Entrante;