import { selectCart,selectSubTotal } from "../../features/cartSlice"
import { useSelector } from "react-redux"
import ProductCart from "../ProductCart/ProductCart"
import { Link } from "react-router-dom"
import './Cart.scss'
import formatMoney from "../../utils/formatMoney"

export default function Cart(){    
    const cart = useSelector(selectCart)  
    const subtotal = useSelector(selectSubTotal)  
    
    /*useEffect(()=>{
        dispatch(updateSubTotal(0))
    },[])*/
    const showProducts =   cart.map((pro)=>{                    
        return <ProductCart key={pro.id} product={pro}></ProductCart>      
    })


    
    return(
        <div className="cart">
            
            <h2>Your shopping cart:</h2>
            {
                showProducts
            }
            <h1>Total: {formatMoney(subtotal) }</h1>
            
            <Link to="/checkout">
                <button className="btnCart">Proceed to checkout</button>
            </Link>
            
        </div>
    )
}