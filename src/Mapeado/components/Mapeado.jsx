import { useEffect, useState } from "react"
import { centerStyle, oddStyle } from "../../Hooks/styles"

export const Mapeado = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {

        const traerJson = async () => {

            try {
                if (loading) {
                    let getData
                    getData = await fetch('/src/Mapeado/data/material.json')
                    getData = await getData.json()
                    setData(getData)
                }
            }

            catch (e) { alert('No se pudo leer el archivo') }

            finally { setLoading(false) }
        }

        traerJson()

    }, [loading])


    return (
        <div className={ oddStyle + centerStyle }>
            { loading
                ? <div>Cargando...</div>
                : data.map(item =>
                    <Item
                        key={ item.nombre }
                        item={ item }
                    />) }
        </div>
    )
}


const Item = ({ item }) =>
    <div>
        <h4>{ item.nombre }</h4>
        <h5>{ item.edad }</h5>
    </div>