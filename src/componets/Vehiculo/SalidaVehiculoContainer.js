import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';
import swal from "sweetalert";
import moment from 'moment';

const SalidaVehiculoContainer = ({titulo}) => {

    const [vehiculo, setVehiculo] = useState([]);

    const cargarVehiculos = async () => {
        const response = await APIInvoke.invokeGET(`/vehiculo/entrantes`);
        setVehiculo(response);
        console.log(response)
    }
    useEffect(() => {
        cargarVehiculos();
    }, [])

    const salidaVehiculo = async (e, idVehiculo) => {
        e.preventDefault();
        const response = await APIInvoke.invokePOST(`/vehiculo/exit/${idVehiculo}`)

        if(response.msg === 'Vehículo Saliendo.') {
            const msg = "Vehículo Saliendo.";
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
            cargarVehiculos();
        } else if(response.msg === 'Ha ocurrido un error.') {
            const msg = "Ha ocurrido un error, no puede salir el vehículo";
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
                  <tr className="text-black ml-auto justify-content-center"style={{fontSize:"14px"}}>
                    <th>Placa<b/></th>
                    <th>Tipo de vehículo</th>
                    <th>Plaza</th>
                    <th>Tiempo Entrada</th>
                    <th>Ticket</th>
                    <th>Observaciones</th>
                    <th>Opción</th>
                  </tr>
                </thead>
                <tbody>
                    {vehiculo.map(
                        item => 
                        <tr key={item.idVehiculo} className="text-black ml-auto" style={{fontSize:"12px"}}>
                            <td>{item.idVehiculo}</td>
                            <td>{item.tipoVehiculo}</td>
                            <td>{item.idPlaza}</td>
                            <td>{moment(item.tiempoEntrante).format("DD/MM/YYYY hh:mm:ss")}</td>
                            <td>{item.ticket}</td>
                            <td>{item.observaciones}</td>
                            <td>
                                <button 
                                onClick={(e) => salidaVehiculo(e, item.idVehiculo)}
                                className='btn btn-success'>
                                    <i className='fas fa-check'/>
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
}
 
export default SalidaVehiculoContainer;