import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('') // inputValue = ''
    const handlerInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("Submit hecho");
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handlerSubmit}>
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={inputValue}
                onChange={handlerInputValue}
            />

        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}