import PropTypes from "prop-types"
export default function Logo({size}){
Logo.propTypes ={
    size: PropTypes.string
}
    return (
        <img className="header_logo" 
        style={{width:`${size}px`, cursor:'pointer'} } 
        onClick={ ()=> alert('homePage') }
        src="https://www.creativefabrica.com/wp-content/uploads/2020/09/10/furniture-sofa-logo-designs-illustration-Graphics-5394606-1-1-580x387.jpg" 
        alt="img" />   
    )
}