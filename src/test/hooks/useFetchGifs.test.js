const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifs } = require("../../hooks/useFetchGifs")


describe('Pruebas para el custom hooks useFetchGifs', () => {
    
    test('should return initial state', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') )
        
        const { data, loading } = result.current;
        await waitForNextUpdate()
        // console.log(data, loading)

        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    });

    test('should return images array and true value loading', async () => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch ') )
        await waitForNextUpdate()

        const { data, loading } = result.current;
        // console.log(data, loading)

        expect( data.length ).toBe( 10 )
        expect( loading ).toBe( false )
    })
    
})
