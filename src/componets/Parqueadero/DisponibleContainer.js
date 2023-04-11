import React, { useEffect, useState } from 'react';
import APIInvoke from '../../utils/APIInvoke';

const DisponibleContainer = ({titulo}) => {

     const [parqueadero, setParqueadero] = useState([]);

    const cargarParqueadero = async () => {
        const response = await APIInvoke.invokeGET(`/parqueadero/disponibles`);
        setParqueadero(response);
    };

    useEffect(() => {
        cargarParqueadero();
    }, []);


    return (
        <div className="card m-2">
        <div className="card-header">
            <h3 className="card-title">{titulo}</h3>
        </div>
        <div className="card-body col-4 offset-4">
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
                    </tr>
                    </thead>
                    <tbody>
                    
                    {parqueadero.map( 
                        item =>                
                        <tr key={item.idPlaza} className="text-black ml-auto">
                        <td>{item.idPlaza}</td>
                        <td>{item.plazaDisponible ? "Sí" : "No"}</td>
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
 
export default DisponibleContainer;