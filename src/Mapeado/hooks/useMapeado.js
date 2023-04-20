import { useEffect, useState } from "react"

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

    return { data }

}