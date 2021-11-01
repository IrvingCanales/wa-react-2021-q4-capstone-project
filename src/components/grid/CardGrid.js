import PropTypes from "prop-types"
import { Link } from "react-router-dom"
CardGrid.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    alt: PropTypes.string,
}
export default function CardGrid({url,name,category,price,alt,id,desc}){

    //const clas = desc!==null ?  : null
    return (
        <div className="card-grid" >
            <Link to={`product/${id}`}>
            <img alt={alt} className="image" src={url} />            
            </Link>
            <h3 >{name}</h3>
            <span>{category}</span>
            <p>${price}</p>
            {desc!==null ? <p>{desc}</p> : null}
            <button>Add cart</button>
        </div>
    )
}