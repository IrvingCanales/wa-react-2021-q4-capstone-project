import CardGrid from '../grid/CardGrid'
//import { GridProductsListData } from '../../utils/GridProductListData'
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useEffect, useState } from "react"
import Loading from '../loading/loading'
import Pagination from '../pagination/pagination'
import PropTypes from "prop-types"
GridProductsList.propTypes = {
    filter: PropTypes.array,    
}
//import './gridProducts.scss'
export default function GridProductsList({filter}){
    //const results = GridProductsListData[0].results  
    const [cards, setCards] = useState([])
    const [aux, setAux] = useState(false)
    const [showCards, setShowCards] = useState([])
    const [,setCurrentPage] = useState(1)
    const [infoAPI,setInfoAPI] = useState({})
    const [productsPerPage] = useState(12)
    const info = {
        type:"product",
        document: "document.type",
        extra: '',
        size:50
    }
    
    
    useEffect(()=>{
        setAux(false)
        setShowCards([])
        setCards([])        
        
    },[filter])

    

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
    
    const { data, isLoading } = useFeaturedBanners(info);
    useEffect(()=>{        
        const results = data.results
        if(results!==undefined){            
            setInfoAPI(results.map(res => res))
        }
        
    },[isLoading])    

    if(Object.keys(infoAPI).length > 0 && !aux){   
        const arr = Object.values(infoAPI)        
        const filtrado = filter.length>0 ? arr.filter(lis => filter.includes(lis.data.category.slug)) : arr
        
            
        setCards(filtrado.map((card) => {
            return <CardGrid key={card.id} id={card.id}  url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt}></CardGrid>        
        }))
        
        setAux(true)

        
    }

    

    if(!isLoading && showCards.length === 0 && cards.length > 0){ 
        changePage(1)
    }
    
    
    return(
        <div className="grid gridproducts">           
            { !isLoading  ?  showCards : <Loading></Loading>}
            { !isLoading && showCards.length>0  ?  <Pagination productsPerPage={productsPerPage} totalProducts={cards.length} paginate={paginate}></Pagination> : null}
        </div>
        
    )
}