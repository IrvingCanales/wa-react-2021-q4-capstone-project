
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import GridProductsList from "../../../components/GridProductsList/GridProductsList";
import Siderbar from "../../../components/sidebar/Sidebar";
import './ProductList.scss'
import { useDispatch } from "react-redux";
import { addCategory } from '../../../features/categoriesSlice';


export default function ProductList(){
    const [filter,setFilter] = useState([])
    const [aux,setAux] = useState(false)    
    const category = new URLSearchParams(useLocation().search)
    
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('cambio el filter')
        console.log(filter)
    },[filter])
    if(category.get("category")!==null && !aux){
        setFilter([...filter,category.get("category").toLocaleLowerCase()])
        
        dispatch(addCategory(category.get("category").toLocaleLowerCase()))        
        setAux(true)
    }
        
    
    

    const handleFilter = (resp,active)=>{
        
        if(active === 'active'){
            //Quita css de activo en la categoria
            //const newElement = active ==='active' ? filters.filter(el => el!==resp.toLowerCase()) : resp.toLowerCase();            
            //setFilters(resp.toLowerCase())    
        }
        else{            
            setFilter(resp)            
        }        
        
        
    }

    

    return (
        <>         
          <div className="productList">            
            <Siderbar  handleF={handleFilter} filter={filter}></Siderbar>
            <GridProductsList filter={filter}></GridProductsList>           
        </div> 
                  
         
        </>
    )
}