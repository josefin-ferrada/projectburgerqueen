import React, { Component } from "react";


class ButtonNavBar extends Component {
    render(){
        return (
                <button className="btn btn-light" onClick={()=>{this.props.onClick(this.props.view)}} >{this.props.name}</button>
        );
    }
}

export default ButtonNavBar;