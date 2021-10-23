import PropTypes from "prop-types"
ImageCarousel.propTypes = {
    url: PropTypes.string,
    id: PropTypes.string
}
export default function ImageCarousel({url,id}){    
    return (
        <div key={id}>
            <img src={url} alt="Wizeline" className="image" ></img>
        </div>
    )
}