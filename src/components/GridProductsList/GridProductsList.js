import CardGrid from '../grid/CardGrid'
import { GridProductsListData } from '../../utils/GridProductListData'
//import './gridProducts.scss'
export default function GridProductsList({filter}){
    const results = GridProductsListData[0].results    
    
    const cards = results.filter(lis => filter.includes(lis.data.category.slug)).map((card)=>{
        return <CardGrid key={card.id} url={card.data.mainimage.url} name={card.data.name} category={card.data.category.slug} price={card.data.price} alt={card.data.mainimage.alt}></CardGrid>        
    })
    return(
        <div className="grid">
            {cards}
        </div>
        
    )
}