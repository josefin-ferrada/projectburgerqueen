import React from 'react';
import { mount, shallow, render } from 'enzyme';
import NavbarBurger from './../src/Componentes/navBar';


describe('NavbarBurger', () => {
  it('deberia renderizar mesero al presionar el boton "MESERO"', () => {
    const component = shallow(<NavbarBurger />);
  
    expect(component).toMatchSnapshot();
  });
});