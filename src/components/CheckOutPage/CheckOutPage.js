import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectCart,selectSubTotal } from "../../features/cartSlice"
import formatMoney from '../../utils/formatMoney'
import ProductCart from '../ProductCart/ProductCart'
import './CheckOutPage.scss'
export default function CheckOutPage(){
    const cart = useSelector(selectCart)  
    const subtotal = useSelector(selectSubTotal)  
    const showProducts = 
        cart.map((pro)=>{                    
            return <ProductCart key={pro.id} product={pro} show={false}></ProductCart>      
        })
        
    
    
    return (
        <div className="checkOutPage">
            <h1>Summary order:</h1>
            {showProducts}
            <h1>Total: {formatMoney(subtotal) }</h1>
            <form className="formCheckOut">
                <label className="labelCheckOut">
                    Name:
                    <input className="inputCheckOut" type="text" placeholder="Name" required />
                </label>
                <label className="labelCheckOut">
                    Email:
                    <input className="inputCheckOut" type="email" placeholder="Email" required/>
                </label>
                <label className="labelCheckOut">
                    ZIP:
                    <input className="inputCheckOut" type="text" placeholder="ZIP" required />
                    </label>
                <label className="labelCheckOut">
                    Order notes:
                <textarea className="inputCheckOut inputArea" type="text" placeholder="Order Notes" />
                </label>
                <Link to="/cart">
                <button className="btnCart" style={{margin:'10px'}}>Go back to cart</button>
                </Link>

                <button className="btnCart" style={{margin:'10px'}} onClick={()=>alert("We're working on it")}>Place order</button>                            
                
            </form>
            
        </div>
    )
}