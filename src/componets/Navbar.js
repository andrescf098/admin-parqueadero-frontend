import React from "react";
import { Link } from "react-router-dom";
import DateTime from "./CurrentTime";

const Navbar = () => {
  return (
  <div>
    <div id="content">
      {/* Topbar */}
      <nav className="main-header navbar navbar-expand navbar-light topbar static-top bg-gradient-info shadow">
        {/* Topbar Navbar */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <h2 className="h4 mb-0 ml-3 text-white">Administrador Parqueadero</h2>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-white d-lg-inline small m-auto">
            <DateTime/>
          </li>
          <li>
            <div className="topbar-divider d-none d-sm-block"/>
          </li>
          <li className="nav-item dropdown no-arrow">
            <Link className="nav-link dropdown-toggle" to={"#"} id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="mr-2 fas fa-user-circle"/>
              <span className="mr-2 d-none d-lg-inline text-white small">Usuario</span>
            </Link>
            {/* Dropdown - User Information */}
            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
              <Link className="dropdown-item" to={"#"} data-toggle="modal" data-target="#logoutModal">
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Salir
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
      {/* Begin Page Content */}
      <div className="container-fluid">
      </div>
      {/* /.container-fluid */}
    </div>
  </div>
  )
};
export default Navbar;
