import React, { Component } from "react";
import OrderForm from "./orderForm";
import ButtonNavBar from "./GenericButton";
import KitchenTemplate from "./kitchenTemplate"


class NavbarBurger extends Component {
  navbar = {
    justifyContent: "normal",
    padding: "0.6rem 0.5rem"
  }
  state= {
    view: "",

  }
  styleButtonMenu = {
    backgrundColor : "orange !important"
  }
  render() {
    return (
      
        <React.Fragment>
          <nav className="navbar navbar-dark bg-dark" style={this.navbar}>
            
            <ButtonNavBar 
            onClick={this.changeViewState} 
            name="COCINA"   
            view="kitchen" 
            style={this.styleButtonMenu}></ButtonNavBar>
            <ButtonNavBar 
            onClick={this.changeViewState}
            name="MESERO"  
            view="waiter" 
            style={this.styleButtonMenu}></ButtonNavBar>
          </nav>
          <div>
          {this.state.view === "kitchen" ? <KitchenTemplate/> : null}
          {this.state.view === "waiter" ? <OrderForm/> : null}
          </div>
        </React.Fragment>
    );
  }

  changeViewState = ui => {
    this.setState({
      view: ui
    });
  }
}

export default NavbarBurger;
