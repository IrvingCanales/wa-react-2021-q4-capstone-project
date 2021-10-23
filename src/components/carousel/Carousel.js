import { CarouselData } from "../../utils/CarouselData";
import ImageCarousel from "./ImageCarousel";
import './Carousel.scss'
export default function Carousel(){    
    const results = CarouselData[0].results
    const images = results.map((carousel)=>{
        return <ImageCarousel key={carousel.id} url={carousel.data.main_image.url} index={carousel.id} active={true} ></ImageCarousel>        
    })      
    return (
        <div className="carousel">                        
            {images}           
        </div>
    )
}