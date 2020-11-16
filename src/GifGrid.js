import React from 'react'
import { useFetchGifs } from './hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
// import { getGifs } from './helpers/getGifs'

export const GifGrid = ({ category }) => {
    
    // data: images => es el nombre que se le quiere dar
    const { data:images, loading } = useFetchGifs(category);

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     // Se ejecuta esta instruccion cuando el componente es renderizado pro primera vez
    //     getGifs(category) // funcion del helpers
    //         .then(setImages)
    //         // .then( (imgs) => setImages(imgs))
    //     // Si la category cambia se vuelve a ejecutar useEffect
    //     }, [category] /* Arreglo de dependencias*/)



    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            
            <div className="card-grid">

                {
                    images.map(img => (
                        // Los parentesis hacen qeu sea un return implicito
                        <GifGridItem
                            key={img.id}
                            // spredth
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}
