import React, { Component } from "react";
import CounterProduct from "./CounterProduct";

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
                    <th scope="row"><CounterProduct/></th>
                    <td>Cafe americanon</td>
                    <td>$500</td>
                    
                    </tr>
                    <tr>
                    <th scope="row"><CounterProduct/></th>
                    <td>Cafe con leche</td>
                    <td>$700</td>
                    
                    </tr>
                    <tr>
                    <th scope="row"><CounterProduct/></th>
                    <td >Sandwich jamón-queso</td>
                    <td>$1000</td>
                    
                    </tr>
                </tbody>
            </table>
            <div>
                
            </div>

        </div>

        )}
}
export default Breakfast;