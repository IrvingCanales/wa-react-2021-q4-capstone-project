
import { useEffect,useState } from "react";


import GridProductsList from "../../../components/GridProductsList/GridProductsList";
import Loading from "../../../components/loading/loading";
import Pagination from "../../../components/pagination/pagination";
import Siderbar from "../../../components/sidebar/Sidebar";
import './ProductList.scss'

export default function ProductList(){
    const [filter,setFilter] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect( ()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
        
    },[])
    
    const handleFilter = (resp,active)=>{
        
        if(active === 'active'){
            const newElement = active ==='active' ? filter.filter(el => el!==resp.toLowerCase()) : resp.toLowerCase();            
            setFilter(newElement)    
        }
        else{            
            setFilter([...filter,resp.toLowerCase()])
        }
        
        
    }

    

    return (
        <>        
         {loading ? <Loading></Loading>
         : <div className="productList">            
            <Siderbar handleF={handleFilter} filter={filter}></Siderbar>
            <GridProductsList filter={filter}></GridProductsList>           
        </div> 
         }
         {filter.length>0 && !loading ? <Pagination></Pagination> : null}      
         
        </>
    )
}