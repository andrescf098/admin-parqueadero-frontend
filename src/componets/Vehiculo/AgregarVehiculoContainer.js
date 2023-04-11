import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";


const AgregarVehiculoContainer = ({ titulo }) => {

  const [vehiculo, setVehiculo] = useState({
    idVehiculo:"",
    tipoVehiculo:"",
    idPlaza:"",
    tiempoSalida:"",
    entrante:"",
    observaciones:"",
    costo:"",
    tiempoParqueo:""
  })

  const { idVehiculo, tipoVehiculo, idPlaza, observaciones } = vehiculo;
  
  const onChange = (e) => {
    setVehiculo({
      ...vehiculo,
      [e.target.name]: e.target.value,
    });
  }
  
  useEffect(() => {
    document.getElementById("idVehiculo").focus();
  }, [])

  const [disponible, setDisponible] = useState([]);

  const plazasDisponibles = async () => {
    const response = await APIInvoke.invokeGET(`/parqueadero/disponibles`)
    setDisponible(response);
  }
  useEffect(() => {
    plazasDisponibles();
  }, []);
  const agregarVehiculo = async () => {
    console.log(vehiculo)
    if(idVehiculo.length>6){
      const msg = "La placa del vehículo no puede ser mayor a 6 carácteres."
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
      idVehiculo: vehiculo.idVehiculo,
      tipoVehiculo: vehiculo.tipoVehiculo,
      idPlaza: vehiculo.idPlaza,
      tiempoSalida: "0000-00-00",
      entrante: true,
      observaciones: vehiculo.observaciones,
      costo:0,
      tiempoParqueo:0
    }
      const response = await APIInvoke.invokePOST(`/vehiculo/agregar`, data)
      console.log(response)
      if(response.msg === "No se ha podido guardar el vehículo.") {
        const msg = "No se ha podido guardar el vehículo, revise que la información sea correcta.";
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
      } else if(response.msg === "Se ha agregado el vehículo.") {
          const msg = "Se ha agregado el vehículo.";
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
  }
  const onSubmit = (e) => {
    e.preventDefault();
    agregarVehiculo();
  };
  return (
    <div className="content p-0 mt-4 col-12 col-md-6 offset-md-3 shadow">
      <div onSubmit={onSubmit}>
        <form>
        <div className="card">
          <div className="card-header" style={{backgroundColor:"#70747c"}}>
            <h3 className="card-title text-white">{titulo}</h3>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="inputName">Placa del vehículo</label>
              <input 
                type="text"
                className="form-control"
                id="idVehiculo"
                name="idVehiculo"
                value={idVehiculo}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStatus">Tipo de vehículo</label>
              <select 
                className="form-control custom-select"
                id="tipoVehiculo"
                name="tipoVehiculo"
                value={tipoVehiculo}
                onChange={onChange}
              >
                <option>Seleccione uno tipo de vehículo</option>
                <option>Automovil</option>
                <option>Motocicleta</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputStatus">Plaza</label>
              <select 
                className="form-control custom-select"
                id="idPlaza"
                name="idPlaza"
                value={idPlaza}
                onChange={onChange}
              >
                <option>Seleccione una plaza disponible</option>
                {disponible.map(
                  item =>
                    <option key={item.idPlaza}>{item.idPlaza}</option>
                )}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription">Observaciones</label>
              <textarea
                className="form-control"
                style={{resize: "none"}}
                id="observaciones"
                name="observaciones"
                value={observaciones}
                onChange={onChange}
                rows={4}
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

export default AgregarVehiculoContainer;
