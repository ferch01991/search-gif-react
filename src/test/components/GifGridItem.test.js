import React from 'react'

import { shallow } from 'enzyme'
import { GifGridItem } from '../../GifGridItem'

describe('Prueba para el componente GifGridItem', () => {

    const title = 'Un ttitulo';
    const url   = 'http://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title = {title} url={url} /> )

    test('should show component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should have one paragraph with a title', () => {
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title );
    })

    test('should have one image with source url and alternative title', () => {
        const img = wrapper.find('img')
        // Prpos te mustra un objetos con las propiedades en este caso, src y alt
        // Y si se quiere evaluar una sola propiedad se usa prop('src')
        expect(img.prop('src')).toBe( url )
        expect(img.prop('alt')).toBe( title )
    })

    test('should have the animate__bounce class', () => {
        const div = wrapper.find('div');
        const className = div.prop('className')
        // expect(className.includes('animate__bounce')).toBe(true)
        expect(className.includes('animate__bounce')).not.toBe(false)
    })
    
    
    
    
    
})