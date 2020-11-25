import React from 'react'

import { shallow } from "enzyme"
import  { AddCategory } from "../../AddCategory"

import '@testing-library/jest-dom';

describe('Prueba en AddCategory', () => {
    
    // simple funcion pero ahora se puede saber como fue llamada, si fue llamada y cuantas veces fue llamada
    const setCategories = jest.fn();
    // const setCategories = () => {};
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    
    // para que se reinicialize o resetear 
    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show correctily', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change', { target: {value}})

        expect( wrapper.find('p').text().trim() ).toBe(value)
    });

    test('No debe de postear la información con submit', () => {
        // wrapper.find('form').simulate('submit', {preventDefault: () => {}})
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        // Espera que no se haya llamado
        expect( setCategories ).not.toHaveBeenCalled()
    })
    
    
    


})
