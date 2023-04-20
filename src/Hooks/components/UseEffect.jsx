import { useEffect, useState } from "react"
import { errorStyle, evenStyle } from "../styles"
import { capital } from "../utilities"

export const UseEffect = () => {

    const [price, setPrice] = useState({})
    const [loading, setLoading] = useState(true)
    const [crypto, setCrypto] = useState('bitcoin')
    const [error, setError] = useState([false, 'no hay errores'])

    const url = (currency) => `https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=ars%2Cusd`

    const btnHandleClick = (cryptocurrency) => {

        if (cryptocurrency === crypto) return;

        setCrypto(cryptocurrency)
        setLoading(true)
    }


    useEffect(() => {

        const getPricesapi = async () => {

            try {
                if (loading) {
                    let respuesta = await fetch(url(crypto));
                    let data = await respuesta.json();

                    if (!Reflect.has(data, crypto))
                        setError([true, 'No se pudo obtener la criptomoneda solicitada'])

                    setPrice({ ...data[crypto] });
                }
            }

            catch (e) { setError([true, 'Problemas con la API']) }

            finally { setLoading(false) }
        }

        setTimeout(() => getPricesapi(), 2000);

    }, [loading])

    return loading
        ? <div>Cargando...</div>
        : error[0]
            ? <div className={ error[0]
                ? errorStyle
                : evenStyle }>
                { error[1] }
            </div>
            : <div className={ evenStyle }>
                <div>
                    <h6>Criptomoneda: 1 { capital(crypto) }</h6>
                    <h4>USD: ${ price.usd }</h4>
                    <h3>ARS: ${ price.ars }</h3>
                </div>

                <div className="btn-group">
                    <button
                        className="btn btn-warning"
                        onClick={ () => btnHandleClick('bitcoin') }>
                        Bitcoin
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={ () => btnHandleClick('ethereum') }>
                        Ethereum
                    </button>
                </div>
            </div>
}