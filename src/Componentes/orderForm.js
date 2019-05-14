import React, { Component } from "react";
import "./../App.css";
import Breakfast from "./breakfast";
import ButtonNavBar from "./GenericButton";
import ResumeTable from "./resumeTable"


class OrderForm extends Component {
    state= {
        view: "",
    
    }

    styleContainer = {
        marginLeft: "0px"
        
    }
    styleCol = {
        marginLeft: "inherit"
    }
    render(){
        return (
            
                <div className="container" style={this.styleContainer}>
                    <div className="row">
                        <div className="col" style={this.styleCol}>
                                    <br/>
                                    <ButtonNavBar 
                                    className="btn btn-link" 
                                    view="desayuno" 
                                    name="Desayuno"
                                    onClick={this.changeViewState}>Desayuno </ButtonNavBar>
                                    <ButtonNavBar 
                                    className="btn btn-link" 
                                    view="almuerzo" 
                                    name="Almuerzo"
                                    onClick={this.changeViewState}>Almuerzo-Cena</ButtonNavBar>
                                    <ButtonNavBar 
                                    className="btn btn-link" 
                                    view="listos"
                                    name="Listos"
                                    onClick={this.changeViewState} >Listos</ButtonNavBar>
                            {this.state.view === "desayuno" ? <Breakfast/> : null}
                            {this.state.view === "almuerzo" ? <Breakfast/> : null}
                        </div>
                        <div className="col">
                        <br/>
                        <h4>RESUMEN</h4>
                        <br/>
                        <ResumeTable/>
                        </div>
                    </div>
                </div>
        );
    }
    changeViewState = ui => {
        this.setState({
        view: ui
        });
    }
}

export default OrderForm;