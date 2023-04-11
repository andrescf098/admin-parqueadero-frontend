import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const Login = () => {
  //Para redireccionar de un componente a otro
  const navigate = useNavigate();

  //definimos el estado inicial de las variables
  const [usuario, setUsuario] = useState({
    email:'',
    password:''
  });
  const { idUser, password} = usuario;

  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion();
  }

  useEffect(() => {
    document.getElementById("idUser").focus();
  }, []);

  const iniciarSesion = async () => {
    if(password.length < 6) {
      const msg = "La contraseña debe ser de al menos de 6 carácteres.";
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
        password: usuario.password
      }
      const response = await APIInvoke.invokePOST(`/user/login`, data);
      const mensaje = response.msg;

      if(mensaje === "El usuario no existe." || mensaje ==="La contraseña es incorrecta.") {
        const msg = "No fue posible iniciar sesión, credenciales incorrectas.";
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
        //obtenemos el token de acceso jwt
        const jwt = response.token;

        //guardamos el token en el Localstorage
        localStorage.setItem('token', jwt);

        //redireccionamos al home la pagina principal
        navigate("/home");
      }
    }
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to={"#"}>
            <b>Iniciar</b> Sesión
          </Link>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">
              Bienvenido, ingrese sus credenciales.
            </p>
            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="idUser"
                  className="form-control"
                  placeholder="número de usuario"
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
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
              <div className="social-auth-links text-center mb-3">
                <button type="submit" className="btn btn-block btn-primary">
                  Ingresar
                </button>
                <Link to={"/crear-cuenta"} className="btn btn-block btn-danger">
                  Crear cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
