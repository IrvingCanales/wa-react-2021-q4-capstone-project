//import { SidebarData } from "../../utils/SidebarData"
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useEffect, useState } from "react"
import './Sidebar.scss'
import { useSelector,useDispatch } from "react-redux";
import { selectCategories,addCategory,removeByCategory,removeCategory } from '../../features/categoriesSlice'
import PropTypes from "prop-types"
Siderbar.propTypes = {
    handleF: PropTypes.func,
    filter: PropTypes.array    
}
export default function Siderbar({handleF,filter}){
    //const results = SidebarData[0].results     
    const [list, setList] = useState([])
    const [categories, setCategories] = useState([])
    const arrCategories = useSelector(selectCategories);
    const dispatch = useDispatch();
    
    const handleClick = (resp,active)=>{
        if(!arrCategories.includes(resp.toLowerCase()))
            dispatch(addCategory(resp.toLowerCase()))
        else
            dispatch(removeByCategory(resp.toLowerCase()))

        filter.push(resp.toLowerCase())
        
        //console.log(resp,active)  
        handleF(filter,active)
    }

    useEffect(()=>{
        renderCategories()
    },[arrCategories])

    

    const clearFilters = ()=>{
        dispatch(removeCategory())
        //const removeCategories = useSelector(selectCategories);
        //console.log(removeCategories)
        renderCategories()
    }

    const renderCategories = ()=>{
        setCategories(list.map((lis)=>{            
            const active = arrCategories.includes(lis.data.name.toLocaleLowerCase()) ? 'active' : ''
            return (<li key={lis.id}>
                <div  key={lis.id} className={`elements ${active}`} onClick={()=>handleClick(lis.data.name,active)}>{lis.data.name} </div>
                </li>)
        }))
    }

    const info = {
        type:"category",
        document: "document.type",
        extra: '',
        size:30
    }
    
    const { data, isLoading } = useFeaturedBanners(info);
    useEffect(()=>{
        const results = data.results
        if(results!==undefined){            

            setList(results.map( lis=>lis))
            
        }
        
    },[isLoading])  
    
    
    
    if( list.length>0 &&  categories.length === 0){
        renderCategories()      
    }


    return(
        <div className='sidebar'>            
            <h3>Categories</h3>
            <ul className="list">
                {categories}
                
            </ul>
            {arrCategories.length>0 ? <button onClick={clearFilters}>Clear filters</button>: null}
        </div>
    )
}