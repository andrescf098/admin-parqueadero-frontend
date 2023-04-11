import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import APIInvoke from '../../utils/APIInvoke';

const VehiculoEditarCotainer = ({titulo}) => {

    const navigate = useNavigate();

    const { idVehiculo } = useParams();
  
    let arreglo = idVehiculo.split('@');

    const idV = arreglo[0];
    const idP = arreglo[2]
    let tipoV = arreglo[1];
    let obsV = arreglo[3];
    
    function isAutomovilOrMotocicleta(motocicletaAutomovil) {
      if(motocicletaAutomovil === "Automovil"){
        return "Motocicleta"
      } else {
        return "Automovil"
      }
    }
  
    const [vehiculo, setVehiculo] = useState({
      idVehiculo: idV,
      tipoVehiculo:tipoV,
      idPlaza: idP,
      observaciones: obsV

    })

    const { tipoVehiculo, idPlaza, observaciones } = vehiculo;

    const onChange = (e) => {
        setVehiculo({
            ...vehiculo,
            [e.target.name]: e.target.value
        })
    }
    console.log(vehiculo)

    const [disponible, setDisponible] = useState([]);

    const plazasDisponibles = async () => {
      const response = await APIInvoke.invokeGET(`/parqueadero/disponibles`)
      setDisponible(response);
    }
    useEffect(() => {
      plazasDisponibles();
    }, []);

    const editarVehiculo = async () => {

      const data = {
        tipoVehiculo: vehiculo.tipoVehiculo,
        idPlaza: vehiculo.idPlaza,
        observaciones: vehiculo.observaciones
      }

      const response = await APIInvoke.invokePOST(`/vehiculo/edit/${idV}`, data)
      
      if(response.msg === "Se ha editado satisfactoriamente.") {
      const msg = "Se ha editado el vehículo.";
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
        } else {

        const msg = "No se ha podido editar el vehículo, revise que la información sea correcta.";
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

    const onSubmit = (e) => {
        e.preventDefault();
        editarVehiculo()

    }

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
                value={idV}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputStatus">Tipo de vehículo</label>
              <select 
                className="form-control custom-select"
                id="tipoVehiculo"
                name="tipoVehiculo"
                defaultValue={tipoVehiculo}
                onChange={onChange}
              >
                <option>{tipoV}</option>
                <option>{isAutomovilOrMotocicleta(tipoV)}</option>
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
                <option>{idP}</option>
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
            <button type="submit" className="btn btn-block btn-primary">Editar</button>
          </div>
        </div>
        </form>
      </div>
      </div>
    );
}
 
export default VehiculoEditarCotainer;