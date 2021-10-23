
import './header.scss'
import cart from '../../cart-64.png'

export default function Header({handle}){
    const handleClick = (e) => {
        handle(false)
    }
    return (
        <div className="header">
             <img className="header_logo" 
                style={{width:'50px', cursor:'pointer'} } 
                onClick={ handleClick }
                src="https://www.creativefabrica.com/wp-content/uploads/2020/09/10/furniture-sofa-logo-designs-illustration-Graphics-5394606-1-1-580x387.jpg" 
                alt="img" /> 
            <input className="ipt" type="text" placeholder="Search product" ></input>
            <img className="cart" src={cart} alt="cart"></img>
        </div>
    )
}