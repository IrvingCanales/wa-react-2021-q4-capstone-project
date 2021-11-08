//import { GridData } from "./GridData"
import CardGrid from "./CardGrid"
import './grid.scss'
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useState } from "react"
export default function Grid(){
    const [cards, setCards] = useState()
    const [aux, setAux] = useState(false) 
    //const results = GridData[0].results  
    
    const info = {
        type:"product",
        document: "document.type",
        extra: '',
        size:16
    }
    const { data, isLoading } = useFeaturedBanners(info);
    const results = data.results
    //console.log(results)
    //const results = data.results
        
        
        if(results!==undefined && !aux){
            setCards(results.map((card)=>{
                return <CardGrid key={card.id} card={card} ></CardGrid>
            }))
            setAux(true)
        }
    /*useEffect(()=>{
        //Consume API
        const results = data.results
        
        
        if(results!==undefined){
            setCards(results.map((card)=>{
                return <CardGrid key={card.id} id={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt}></CardGrid>
            }))
        }
        
    },[isLoading])  */

    
    return (
        <>
        <div className="grid">
            {cards}            
        </div>        
        </>
    )
}