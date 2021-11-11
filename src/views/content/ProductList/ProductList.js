
import {  useState } from "react";
import { useLocation } from "react-router";
import GridProductsList from "../../../components/GridProductsList/GridProductsList";
import Siderbar from "../../../components/sidebar/Sidebar";
import './ProductList.scss'
import { useDispatch } from "react-redux";
import { addCategory } from '../../../features/categoriesSlice';
import { useCallback } from "react";


export default function ProductList(){
    const [filter,setFilter] = useState([])
    const [resp,setResp] = useState([])
    const [aux,setAux] = useState(false)    
    const category = new URLSearchParams(useLocation().search)
    
    const dispatch = useDispatch();

    
    if(category.get("category")!==null && !aux){
        setFilter([...filter,category.get("category").toLocaleLowerCase()])
        
        dispatch(addCategory(category.get("category").toLocaleLowerCase()))        
        setAux(true)
    }
        
            

    const handleFilter = useCallback((resp)=>{
        setFilter(resp)            
    },[resp])
    

    

    return (
        <>         
          <div className="productList">            
            <Siderbar  handleF={handleFilter} filter={filter}></Siderbar>
            <GridProductsList filter={filter}></GridProductsList>           
        </div> 
                  
         
        </>
    )
}