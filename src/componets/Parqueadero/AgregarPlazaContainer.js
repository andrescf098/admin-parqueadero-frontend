import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const AgregarPlazaContainer = ({ titulo }) => {

  const [parqueadero, setParqueadero] = useState({
    idPlaza:"",
    plazaDisponible:"",
  });
  const { idPlaza } = parqueadero;
  const onChange = (e) => {
    setParqueadero({
      ...parqueadero,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    document.getElementById("idPlaza").focus();
  }, []);

  const agregarPlaza = async () => {
    if(idPlaza.length > 3) {
      const msg = "El id de la plaza no puede ser mayor a 3 carácteres."
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
        idPlaza: parqueadero.idPlaza,
        plazaDisponible: true
      }
      const response = await APIInvoke.invokePOST(`/parqueadero/agregar`, data);
      const mensaje = response.msg;

      if(mensaje === "La plaza ya existe.") {
        const msg = "La plaza ya existe.";
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
        })
      } else if(mensaje === "La plaza se ha creado.") {
        const msg = "La plaza se ha creado.";
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
    agregarPlaza();
  };
  return (
    <div className="content p-0 mt-5 col-12 col-md-6 offset-md-3 shadow">
      <div>
        <form onSubmit={onSubmit}>
          <div className="card">
            <div className="card-header" style={{ backgroundColor: "#70747c" }}>
              <h3 className="card-title text-white">{titulo}</h3>
            </div>
            <div className="card-header">
              <i className="fas fas fa-exclamation-triangle text-warning width-80" style={{display:'flex', justifyContent:"center"}}></i>
              <h5 style={{display:'flex', justifyContent:"center"}}>INFORMACIÓN</h5>
              <p>Para agregar una plaza tenga en cuenta la siguiente información.</p>
              <p>El id de las plazas estan conformados por:</p>
              Letra: hace referencia al lugar donde se encuentra la plaza.<br/>
              Dos número: el número de identificación de la plaza.
              <p>EJEMPLO: "A33"</p>
              
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="inputName">Identificación de la plaza</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="idPlaza"
                  name="idPlaza"
                  value={idPlaza}
                  onChange={onChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-block btn-primary">Agregar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AgregarPlazaContainer;
