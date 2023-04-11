import moment from 'moment';
import React, { useEffect, useState } from 'react'
import APIInvoke from '../../utils/APIInvoke';

const SaliendoContainer = ({titulo}) => {

  const [vehiculo, setVehiculo] = useState([]);

  const cargarVehiculo = async () => {
    const response = await APIInvoke.invokeGET(`/vehiculo/saliendo`);
    setVehiculo(response);
  };

  useEffect(() => {
    cargarVehiculo();
  }, []);

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
                    <th>Ticket</th>
                    <th>Observaciones</th>
                    <th>Costo</th>
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
                      <td>{moment(item.tiempoSalida).format("DD/MM/YYYY hh:mm:ss")}</td>
                      <td>{item.tiempoParqueo}</td>
                      <td>{item.ticket}</td>
                      <td>{item.observaciones}</td>
                      <td>{item.costo}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default SaliendoContainer;