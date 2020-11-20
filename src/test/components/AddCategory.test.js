const { shallow } = require("enzyme")
const { AddCategory } = require("../../AddCategory")

describe('Prueba en AddCategory', () => {
    
    const setCategory = () => {};
    const wrapper = shallow(<AddCategory setCategory={setCategory} />);

    test('should show correctily', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the text box', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'

        input.simulate('change', { target: {value}})

        expect( wrapper.find('p').text().trim() ).toBe(value)
    })
    
    


})
