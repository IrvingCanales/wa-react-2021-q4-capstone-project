import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { removeById,updateCart,updateSubTotal } from "../../features/cartSlice"
import formatMoney from "../../utils/formatMoney"
import './ProductCart.scss'
function ProductCart({product,show=true}){
    const [order,setOrder] = useState(product.order)    
    const dispach = useDispatch()
    const options = (stock) => {
        const options = [];
        for (let i = 1; i <= stock; i += 1) {
          options.push(i);
        }
    
        return options;
    }

    useEffect(()=>{
        dispach(updateSubTotal())
        
    },[])

    const changeQty = (e,id) => {
        

        dispach(updateCart({id:id,order:Number(e.target.value)}))

        dispach(updateSubTotal())
        setOrder(e.target.value)
         
    }

    const removeItem = (id)=>{
        
        dispach(removeById(id))
        dispach(updateSubTotal())
    }
    

    return(
        <div className="productCart">
            <img className="product_img" alt={product.data.alt} src={product.data.mainimage.url} />
            <div className="productDetailsCart">
                <h2>{product.data.name}</h2>
                <div>
                    <strong>${product.data.price}</strong>
                </div>
                <select
                disabled={!show}                
                onChange={(e)=>changeQty(e,product.id)}       
                value={product.order}                
                >                    
                {options(product.data.stock).map((opt) => (            
                <option key={opt} value={opt}>
                    {opt}
                </option>
                ))}
            </select>                
                {show ? <button onClick={()=>removeItem(product.id)}  className="btnRemove">Remove</button> : null}
                <div>
               Subtotal: {formatMoney(product.data.price*order)} 
                </div>
            </div>
            
            
        </div>
    )
}

export default React.memo(ProductCart)