import { GridData } from "./GridData"
import CardGrid from "./CardGrid"
import './grid.scss'
export default function Grid(){
    
    const results = GridData[0].results    
    const cards = results.map((card)=>{
        return <CardGrid key={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt}></CardGrid>
        
    })
    return (
        <>
        <div className="grid">
            {cards}            
        </div>        
        </>
    )
}