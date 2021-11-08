import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import {useDispatch} from 'react-redux'
import {addCart,selectedById} from '../../features/cartSlice'
import {  useState } from "react"


CardGrid.propTypes = {
    card: PropTypes.object
}
export default function CardGrid({card,desc=false}){
    const dispatch = useDispatch();
    const [currStock,setCurrStock] = useState(1)
    const [disabled,setDisabled] = useState(false)
    const [textBtn, setTextBtn] = useState('Add cart')
    
    
//id={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt}
    const addedCart = (e,stock)=>{
        setTextBtn('Added')
        setDisabled(true)   
        dispatch(selectedById(card.id))
        setTimeout(()=>{
            setDisabled(false)   
            setTextBtn('Add cart')
        },2000)        
        
        
        
        if(card.order === undefined){            
            card.order=currStock
            dispatch(addCart(card))
        }
        else{            
            
            dispatch(addCart({id:card.id,order:Number(currStock)}))
        }
        
                
        //card["order"]=1
                
        if( Number(currStock) === stock){
            setDisabled(true)   
            setTextBtn('Out of stock')
        }
        
    }    

    

    const options = (stock) => {
        const options = [];
        for (let i = 1; i <= stock; i += 1) {
          options.push(i);
        }
    
        return options;
    };    

    const changeQty = (e,id) => {
        
        setCurrStock(e.target.value)
        //dispatch(updateCart({id:id,order:Number(e.target.value)}))
    
        /*dispatch({
          type: cart.updateItem,
          payload: { id: itemId, qty: Number(value) },
        });*/
    };


    //const clas = desc!==null ?  : null
    return (
        <div className="card-grid" >
            <Link to={`product/${card.id}`}>
            <img alt={card.data.mainimage.alt} className="image" src={card.data.mainimage.url} />            
            </Link>
            <h3 >{card.data.name}</h3>
            <span>{card.data.category.slug}</span>
            <p>${card.data.price}</p>   
            {desc ? <p>{card.data.short_description}</p> : null}
            <select
                disabled={disabled}
                defaultValue={card.data.order}
                onChange={(e)=>changeQty(e,card.id)}
                >
        {options(card.data.stock).map((opt) => (
          <option key={`${opt}`} value={opt}>
            {opt}
          </option>
        ))}
      </select>
            <button disabled={disabled} onClick={()=>addedCart(card.data.stock)} className="btnCart">{textBtn}</button>
        </div>
    )
}