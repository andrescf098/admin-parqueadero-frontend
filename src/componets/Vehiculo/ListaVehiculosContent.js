import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import moment from 'moment';
import APIInvoke from "../../utils/APIInvoke";
import { Link } from "react-router-dom";


const ListaVehiculosContent = ({ titulo }) => {

 
  const [vehiculo, setVehiculo] = useState([]);

  const cargarVehiculo = async () => {
    const response = await APIInvoke.invokeGET(`/vehiculo/listar`);
    setVehiculo(response);

  };
  

  useEffect(() => {
    cargarVehiculo();
  }, []);

  const eliminarVehiculo = async(e, idVehiculo) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(`/vehiculo/delete/${idVehiculo}`)

    if(response.msg === 'El vehículo ha sido eleminado.') {
        const msg = "El vehículo fue borrado correctamente.";
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
        cargarVehiculo();
    } else {
        const msg = "No se ha podido borrar el vehículo.";
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
    }

  }

  return (
    <div className="card m-2">
      <div className="card-header">
        <h3 className="card-title">{titulo}</h3>
      </div>
      <div className="card-body">
        <div className="card mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr className="text-black ml-auto justify-content-center"style={{fontSize:"13px"}}>
                    <th>Placa<b/></th>
                    <th>Tipo de vehículo</th>
                    <th>Plaza</th>
                    <th>Tiempo Entrada</th>
                    <th>Tiempo Salida</th>
                    <th>Tiempo Parqueo</th>
                    <th>Entrante</th>
                    <th>Ticket</th>
                    <th>Observaciones</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {vehiculo.map( 
                    item =>                
                    <tr key={item.idVehiculo} className="text-black ml-auto" style={{fontSize:"12px", justifyContent:"center"}}>
                      <td>{item.idVehiculo}</td>
                      <td>{item.tipoVehiculo}</td>
                      <td>{item.idPlaza}</td>
                      <td>{moment(item.tiempoEntrada).format("DD/MM/YYYY hh:mm:ss")}</td>
                      <td style={{justifyContent:"center"}}>{item.entrante ? "---" : 
                        moment(item.tiempoSalida).format("DD/MM/YYYY hh:mm:ss")
                        }</td>
                      <td>{item.tiempoParqueo}</td>
                      <td>{item.entrante ? "Sí" : "No"}</td>
                      <td>{item.ticket}</td>
                      <td>{item.observaciones}</td>
                      <td id="opciones">
                      <Link to={`/editarVehiculo/${item.idVehiculo}@${item.tipoVehiculo}@${item.idPlaza}@${item.observaciones}`} className="btn btn-warning"><i className="fas fa-pen"/></Link>
                        <button 
                        onClick={(e) => eliminarVehiculo(e, item.idVehiculo)} 
                        className="btn btn-danger">
                            <i className="fas fa-trash"/>
                        </button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaVehiculosContent;
