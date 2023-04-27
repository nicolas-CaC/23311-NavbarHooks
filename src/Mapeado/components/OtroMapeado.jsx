import { centerStyle } from "../../Hooks/styles";
import { useMapeado } from "../hooks/useMapeado"

export const OtroMapeado = () => {

    const { data } = useMapeado('/src/Mapeado/data/users.json')

    return (
        <div className={ centerStyle + " w-100 row my-5" }>
            { data.map(item => <Item key={ item.id } item={ item } />) }
        </div>
    )
}



// Esquema/Componente sacado de getBootstrap.com

const Item = ({ item }) =>
    <div className="card col-6 col-md-6 col-lg-4 col-xl-3">
        <img src={ item.avatar } className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{ item.first_name + ' ' + item.last_name }</h5>
            <p className="card-text">
                { `Título: ${item.employment.title}` }
                < br />
                { `Habilidad: ${item.employment.key_skill}` }
                < br />
                { `Ciudad: ${item.address.city}` }
                < br />
                { `Estado: ${item.address.state}` }
                < br />
                { `País: ${item.address.country}` }
            </p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">{ item.username }</li>
            <li className="list-group-item">{ item.email }</li>
            <li className="list-group-item">{ item.uid }</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">{ item.phone_number }</a>
            <a href="#" className="card-link">{ item.date_of_birth }</a>
        </div>
    </div>