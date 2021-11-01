//import { CarouselData } from "../../utils/CarouselData";
import ImageCarousel from "./ImageCarousel";
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import './Carousel.scss'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carousel(){    
    //const results = CarouselData[0].results
    const [images,setImages] = useState()
    //const [results,setResults] = useState('')
    const info = {
        type:"category",
        document: "document.type",
        extra: '',
        size:30
    }
    
    const { data, isLoading } = useFeaturedBanners(info);
    useEffect(()=>{
        //Consume API
        const results = data.results
        if(results!==undefined){            
            setImages(results.map((carousel)=>{
                return <Link key={carousel.id} to={`products?category=${carousel.data.name}`}   ><ImageCarousel key={carousel.id} url={carousel.data.main_image.url} index={carousel.id} active={true} ></ImageCarousel></Link>
            }))
        }
        
    },[isLoading])  
    
    

    
    return (
        <div className="carousel">                        
            {images}           
        </div>
    )
}