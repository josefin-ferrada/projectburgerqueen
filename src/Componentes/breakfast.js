import React, { Component } from "react";

class Breakfast extends Component {
    render(){
        return (
        <div>
            <br/>

            <div>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                    </input>
                </div>
            </div>
            <table className="table table-sm">
                <thead>
                    <tr>
                    <th scope="col">Cant</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    
                    </tr>
                </tbody>
            </table>
            

        </div>

        )}
}
export default Breakfast;