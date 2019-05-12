import React, { Component } from "react";
import ButtonKitchen from "./KitchenButton";
import ButtonWaiter from "./WaiterButton";


class NavbarBurger extends Component {
  render() {
    return (
        <React.Fragment>
         <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <ButtonKitchen></ButtonKitchen>
           
           <ButtonWaiter></ButtonWaiter>
        </nav>
         
            
        

            
            
            
        </React.Fragment>
    );
  }
}

export default NavbarBurger;
