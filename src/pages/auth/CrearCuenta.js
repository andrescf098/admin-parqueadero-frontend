import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () => {
  const [usuario, setUsuario] = useState({
    idUser: "",
    email: "",
    password: "",
    confirmar: "",
    userRol: "",
  });

  const { email, password, confirmar, idUser } = usuario;
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    document.getElementById("idUser").focus();
  }, []);

  const crearCuenta = async () => {
    if (password !== confirmar) {
      const msg = "Las constraseñas son diferentes.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else if (password.length < 6) {
      const msg = "La contraseña debe de tener al menos 6 carácteres.";
      swal({
        title: "Error",
        text: msg,
        icon: "error",
        buttons: {
          confirm: {
            text: "Ok",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      const data = {
        idUser: usuario.idUser,
        email: usuario.email,
        password: usuario.password,
        userRol: "Admin",
      }
      const response = await APIInvoke.invokePOST(`/user/crearUsuario`, data);
      const mensaje = response.msg;

      if (mensaje === "El usuario ya existe.") {
        const msg = "El usuario ya existe.";
        swal({
          title: "Error",
          text: msg,
          icon: "error",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-danger",
              closeModal: true,
            },
          },
        });
      } else if (mensaje === "El usuario se ha creado.") {
        const msg = "El usuario se ha creado.";
        swal({
          title: "Exitoso",
          text: msg,
          icon: "success",
          buttons: {
            confirm: {
              text: "Ok",
              value: true,
              visible: true,
              className: "btn btn-success",
              closeModal: true,
            },
          },
        });
      }
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };
  return (
    <div>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <Link to={"#"}>
              <b>Crear</b> Cuenta
            </Link>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Ingrese los datos del usuario.</p>
              <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Id Usuario"
                    id="idUser"
                    name="idUser"
                    value={idUser}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Contraseña"
                    id="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirmar contraseña"
                    id="confirmar"
                    name="confirmar"
                    value={confirmar}
                    onChange={onChange}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mb-3">
                  <button type="submit" className="btn btn-block btn-primary">
                    Crear cuenta
                  </button>
                  <Link to={"/"} className="btn btn-block btn-danger">
                    Regresar al login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CrearCuenta;
