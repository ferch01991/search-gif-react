const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifs } = require("../../hooks/useFetchGifs")


describe('Pruebas para el custom hooks useFetchGifs', () => {
    
    test('should return initial state', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'One Punch ') )
        
        const { data, loading } = result.current;
        // console.log(data, loading)

        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })
    
})
