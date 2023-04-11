import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <Link to={"/home"} className="brand-link">
          <span className="brand-text font-weight-light" style={{display:'flex', justifyContent:"center"}}>Home</span>
        </Link>
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="nav-icon fas fa-solid fa-car" />
              <p>
                Vehículos
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"/AgregarVehiculo"} className="nav-link">
                  <p>Agregar vehículo</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/salidaVehiculo"} className="nav-link">
                  <p>Salida vehículo</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/listaVehiculos"} className="nav-link">
                  <p>Lista de vehículos</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/vehiculosEntrantes"} className="nav-link">
                  <p>Entrantes</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/vehiculoSaliendo"} className="nav-link">
                  <p>Saliendo</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="nav-icon fas fa-parking"/>
              <p>
                Parqueadero
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"/agregarPlaza"} className="nav-link">
                  <p>Agregar plaza</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/listaPlazas"} className="nav-link">
                  <p>Lista de plazas</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/plazasDisponibles"} className="nav-link">
                  <p>Disponibles</p>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to={"#"} className="nav-link">
              <i className="nav-icon fas fa-cog" />
              <p>
                Configuración
                <i className="fas fa-angle-left right" />
              </p>
            </Link>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to={"#"} className="nav-link">
                  <p>Tarifa</p>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
