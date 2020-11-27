import React from 'react'
import { shallow } from 'enzyme'

import { GifExpertApp } from "./../../GifExpertApp";

describe('Prueba de GifExpertApp', () => {
    
    test('should matrch with snapshop', () => {
        
        const wrapper = shallow( <GifExpertApp /> )
        expect(wrapper).toMatchSnapshot();
    });

    test('should show a category list', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultcatgories={categories} /> )

        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length)
    })
    
    
    
})
