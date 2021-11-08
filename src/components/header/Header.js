
import './header.scss'
import cartImg from '../../cart-64.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import { selectCart } from '../../features/cartSlice'
import { useSelector } from 'react-redux'

export default function Header(){
    const [search,setSearch] = useState('')
    let history = useHistory()
    const cart = useSelector(selectCart)

    const handleClick = (e)=>{
        e.preventDefault()
        history.push({pathname:'/search',search:`?q=${search}`})
       
        setSearch('')
    }

  
    
    return (
        <div className="header">
            <Link to="/">
             <img className="header_logo"                
                src="https://www.creativefabrica.com/wp-content/uploads/2020/09/10/furniture-sofa-logo-designs-illustration-Graphics-5394606-1-1-580x387.jpg" 
                alt="img" /> 
            </Link>
            <form>
            <input className="ipt" value={search} onChange={(e)=>setSearch(e.target.value)}  type="text" placeholder="Search product" ></input>
            <button className="btn_header" onClick={handleClick} >Search</button>
            </form>
            
            <Link to="/cart" className="cartHeader">                
                    <span >{cart.length}</span>
                    <img className="cartImg" src={cartImg} alt="cart"></img>                
            </Link>
            
        </div>
    )
}