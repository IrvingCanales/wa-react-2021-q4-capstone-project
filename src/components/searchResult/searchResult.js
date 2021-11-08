import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router';
import CardGrid from "../grid/CardGrid"
import Pagination from '../pagination/pagination';
import './searchResult.scss'
import Loading from '../loading/loading';



export default function SearchResult(){
    
    const search = new URLSearchParams(useLocation().search)
    const [cards, setCards] = useState([])
    const [aux, setAux] = useState(false)
    const [auxAPI, setAuxAPI] = useState(false)
    
    const [showCards, setShowCards] = useState([])
    const [,setCurrentPage] = useState(1)
    const [infoAPI,setInfoAPI] = useState({})
    const [productsPerPage] = useState(20)   
    
    
    const info = {
        type:"product",
        document: "document.type",
        extra: `&q=[[fulltext(document,"${search.get("q")}")]]`,
        size:40
    }


    const renderSearch = ()=>{
        
        const arr = Object.values(infoAPI)        
        setCards(arr.map((card)=>{
            //id={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt} desc={card.data.short_description}
            return <CardGrid key={card.id} card={card} desc={true} ></CardGrid>
        }))
        setAux(true)
    }

    const paginate = (pageNumber)=>{        
        setCurrentPage(pageNumber)
        changePage(pageNumber)
    }

    const changePage = (pageNumber)=>{

        const indexofLastProduct = pageNumber * productsPerPage
        const indexOfFirstProduct = indexofLastProduct - productsPerPage
        const currentProducts = cards.slice(indexOfFirstProduct,indexofLastProduct )        
        setShowCards(currentProducts)

    }
   

    
    
    const {data, isLoading} = useFeaturedBanners(info);
    useEffect(()=>{
        
        if(search.get("q")!==null){            
                        
            setAuxAPI(false)
            setAux(false)
            setInfoAPI({})
        }
        setCards([])
            setShowCards([])
            
    },[search.get("q")])

    const results = data.results
    
    
        
    if(results!==undefined && !auxAPI){
            
            setInfoAPI(results.map(res => res))
            setAuxAPI(true)
            
            
    }
    
    /*useEffect(()=>{
        //Consume API
        const results = data.results
        
        if(results!==undefined){
            console.log(results)
            setCards(results.map((card)=>{
                return <CardGrid key={card.id} id={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt} desc={card.data.short_description}></CardGrid>
            }))
        }
        
        
    },[isLoading])   */

    if(Object.keys(infoAPI).length > 0 && !aux){   
        renderSearch()
    }
    
    if(!isLoading && cards.length === 0){
        setCards(<div><h1>No results for {search}</h1></div>)
        
    }
    
    
    if(!isLoading && showCards.length === 0 && cards.length > 0){         
        changePage(1)
    }


    return (
        <div className="searchResult">
            { !isLoading  ?  showCards : <Loading></Loading>}
            { !isLoading  ?  <Pagination productsPerPage={productsPerPage} totalProducts={cards.length} paginate={paginate}></Pagination> : null}
            
        </div>
    )
}

