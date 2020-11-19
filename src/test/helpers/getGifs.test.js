const { getGifs } = require("../../helpers/getGifs")

describe('Pruebas para helpers con fetch', () => {
    test('should give me ten elements', async() => {
        const gifs = await getGifs('Dragon ball')
        expect(gifs.length).toBe(10);
    })

    test('should give me zero elements, if it not sent the category', async() => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0);
    })
    
})
