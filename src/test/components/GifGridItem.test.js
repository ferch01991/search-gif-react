import React from 'react'

import { shallow } from 'enzyme'
import { GifGridItem } from '../../GifGridItem'

describe('Prueba para el componente GifGridItem', () => {

    const title = 'Un ttitulo';
    const url   = 'http://localhost/algo.jpg';

    test('should show component correctly', () => {
        const wrapper = shallow( <GifGridItem title = {title} url={url} /> )
        expect( wrapper ).toMatchSnapshot();
    })
    
    
})