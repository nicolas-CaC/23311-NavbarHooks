import { useEffect, useState } from "react"

// Custom Hook (lleva el prefijo 'use' como todos los hooks)

export const useMapeado = (url) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(() => {

        const traerJson = async () => {

            try {
                if (loading) {
                    let getData
                    getData = await fetch(url)
                    getData = await getData.json()
                    setData(getData)
                }
            }

            catch (e) { alert('No se pudo leer el archivo') }

            finally { setLoading(false) }
        }

        traerJson()

    }, [loading])

    // Retorno los valores que voy a necesitar, pueden ser variables, funciones, etc.
    return { data }

}