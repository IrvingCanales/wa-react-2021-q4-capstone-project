//import {SliderData}  from '../../utils/SliderData'
import './slider.scss'
import { useEffect, useState } from 'react'
import ImageSlider  from './ImageSlider'
import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import Loading from '../loading/loading'
export default function Slider(){
    const [current, setCurrent] = useState(0)
    const [urlSend, seturlSend] = useState('')    
    const [length, setLength] = useState(0)
    const [urls, setUrls] = useState([])
    let url = []
    const info = {
        type:"banner",
        document: "document.type",
        extra: '',
        size:5
    }
    
    const { data, isLoading } = useFeaturedBanners(info);

    useEffect(()=>{
        //Consume API
        
        const results = data.results           
        if(results!==undefined){        
            url = results.map(slide=>slide.data.main_image.url)
            
            if(url.length>0){
                setUrls(url)
                setLength(url.length)
                seturlSend(url[0])
                setCurrent(current + 1)
                
            }
            
        }
        
    },[isLoading])   
        

    const nextSlide = () => {
        
        setCurrent(current === length - 1 ? 0 : current + 1)
        seturlSend(urls[current])
      };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        seturlSend(urls[current])
      };
      
    
    
    
    return (
        <div className="slider">
            { !isLoading  ?  <><button className="btn btn-left" onClick={prevSlide}>{String.fromCharCode(8592)}</button>
            <ImageSlider url={urlSend} index={current} active={true} ></ImageSlider>
            <button className="btn btn-right" onClick={nextSlide}>{String.fromCharCode(8594)}</button></> : <Loading></Loading>}
            
        </div>
    )
}