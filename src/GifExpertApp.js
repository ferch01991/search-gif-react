import React, { useState } from 'react'

import { AddCategory } from "./AddCategory";
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const handlerAdd = (e) => {
        // Spread extrae todos los elementos
        // setCategories([...categories, 'Hunter'])
        // dentro del setCategories recibe tambien un callback
        setCategories(cats => [...cats, 'Hunter'])
        
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handlerAdd}>Agregar</button> */}

            <ol>
                {
                    // El key no tiene qeu ser el indice y debe ser unico
                    categories.map(category => 
                        <GifGrid 
                            key={category}
                            category= { category }
                        />)
                }
            </ol>
        </>
    )
}
