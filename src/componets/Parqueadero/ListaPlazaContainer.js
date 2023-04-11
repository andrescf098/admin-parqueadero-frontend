import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import APIInvoke from "../../utils/APIInvoke";

const ListaPlazaContainer = ({ titulo }) => {
  const [parqueadero, setParqueadero] = useState([]);

  const cargarParqueadero = async () => {
    const response = await APIInvoke.invokeGET(`/parqueadero/listar`);
    setParqueadero(response);
  };

  useEffect(() => {
    cargarParqueadero();
  }, []);

  const eliminarPlaza = async (e, idPlaza) => {
    e.preventDefault();
    const response = await APIInvoke.invokeDELETE(
      `/parqueadero/delete/${idPlaza}`
    );

    if (response.msg === "Se ha eliminado la plaza.") {
      const msg = "Se ha eliminado la plaza.";
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
      cargarParqueadero();
    } else {
      const msg = "No se ha podido eliminar la plaza.";
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
    }
  };

  return (
    <div className="card m-2">
      <div className="card-header">
        <h3 className="card-title">{titulo}</h3>
      </div>
      <div className="card-body col-12 col-md-4 offset-md-4">
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
                  <tr className="text-black ml-auto justify-content-center">
                    <th>Plaza</th>
                    <th>Disponible</th>
                    <th>Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {parqueadero.map((item) => (
                    <tr key={item.idPlaza} className="text-black ml-auto">
                      <td>{item.idPlaza}</td>
                      <td>{item.plazaDisponible ? "Sí" : "No"}</td>
                      <td>
                        <button
                          onClick={(e) => eliminarPlaza(e, item.idPlaza)}
                          className="btn btn-danger"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaPlazaContainer;
