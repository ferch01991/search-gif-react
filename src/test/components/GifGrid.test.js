import { GifGrid } from '../../GifGrid'
import React from 'react'

import { shallow } from "enzyme"
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('pruebas en el componente <GifGrid />', () => {

    const category = 'One Punch' 

    test('should snapshop de GifGrid', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
            
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    })

    // useFetchGifs regresa la informacion
    test('debe mostrar items cuando se carga imagenes useFetchGifs ', () => {
        
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost.com',
                title: 'Cualquier cosa'
            },
            {
                id: '4754',
                url: 'https://localhost.com',
                title: 'Cualquier cosa'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        // En principio no deberia haber parrafos
        expect(wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length)

    })
    
    
})
