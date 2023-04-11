import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgregarPlaza from './componets/Parqueadero/AgregarPlaza';
import AgregarVehiculo from './componets/Vehiculo/AgregarVehiculo';
import CrearCuenta from './pages/auth/CrearCuenta';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import ListaVehiculos from './componets/Vehiculo/ListaVehiculos';
import SalidaVehiculo from './componets/Vehiculo/SalidaVehiculo';
import ListaPlaza from './componets/Parqueadero/ListaPlaza';
import Disponible from './componets/Parqueadero/Disponible';
import Entrante from './componets/Vehiculo/Entrante';
import Saliendo from './componets/Vehiculo/Saliendo';
import VehiculoEditar from './componets/Vehiculo/VehiculoEditar';


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element = {<Login/>}/>
          <Route path='/crear-cuenta' exact element = {<CrearCuenta/>}/>
          <Route path='/home' exact element = {<Home/>}/>
          <Route path='/agregarVehiculo' exact element = {<AgregarVehiculo/>}/>
          <Route path='/agregarPlaza' exact element = {<AgregarPlaza/>}/>
          <Route path='/listaVehiculos' exact element = {<ListaVehiculos/>}/>
          <Route path='/salidaVehiculo' exact element = {<SalidaVehiculo/>}/>
          <Route path='/listaPlazas' exact element = {<ListaPlaza/>}/>
          <Route path='/plazasDisponibles' exact element = {<Disponible/>}/>
          <Route path='/vehiculosEntrantes' exact element = {<Entrante/>}/>
          <Route path='/vehiculoSaliendo' exact element = {<Saliendo/>}/>
          <Route path='/editarVehiculo/:idVehiculo' exact element = {<VehiculoEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
