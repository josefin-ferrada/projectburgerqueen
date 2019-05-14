import React, { Component } from "react";

class CounterProduct extends Component {
    render() {
        return (
            <div id="input_div">
                <input type="button" value="-" id="moins" />
                <input type="text" size="35" defaultValue="1" id="count"/>
                <input type="button" value="+" id="plus" />
            </div>
        );
    }
}
export default CounterProduct;