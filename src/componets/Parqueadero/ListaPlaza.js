import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import ListaPlazaContainer from './ListaPlazaContainer';

const ListaPlaza = () => {
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
            <ListaPlazaContainer
              titulo={"Lista plazas"}
            />
          </div>
          <Footer></Footer>
        </div>
      </div>
     );
}
 
export default ListaPlaza;