import React from 'react'
import Container from '../componets/Container';
import Footer from '../componets/Footer';
import Navbar from '../componets/Navbar';
import SideBar from '../componets/Sidebar';

const Home = () => {
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
                    <Container 
                        titulo={"Dashboard"}    
                    />
                </div>
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Home;