import { useFeaturedBanners } from '../../utils/hooks/useFeaturedBanners'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"; 
import SwipeCore,{Navigation,Pagination} from 'swiper'
import 'swiper/swiper.scss';
import "swiper/swiper-bundle.min.css";

import './productDetails.scss'
import Loading from '../loading/loading';
SwipeCore.use([Navigation,Pagination])
export default function ProductDetails(){
    const [product,setProduct] = useState([])
    const [images, setImages] = useState([])

    const {id} = useParams();    
    const info = {
        type:id,
        document: "document.id",
        extra: '',
        size:50
    }
    const { data, isLoading } = useFeaturedBanners(info);
    
    useEffect(()=>{
        //Consume API
        const results = data.results
        
        if(results!==undefined){            
            setProduct(results.map((produc) =>{
                return produc
            } ))
        }
        
    },[isLoading])  

    if(product.length>0 && images.length ===0 ){
        setImages( product.map( (pro) =>{
            
            return pro.data.images
        }))
        
    }
    

    const slider = images.length>0 ? 
    
        images[0].map( (ims,i) =>{
            return <SwiperSlide key={i}>
                <img 
                key={i} 
                alt={`slide-${i}`} 
                className="image-swipe"
                src={ims.image.url}></img>
            </SwiperSlide>
            })
    
    : null

    const renders = product.length>0 ?
    <><Swiper 
            className="swiper"
            tag="section" 
            wrapperTag="ul"
            tag="section"
            id="main"
            navigation
            pagination
            spaceBetween={0}
            slidesPerView={1}             
              >
            {slider}
            </Swiper> 
            <div className="details">
                <h2>{product[0].data.name}</h2>
                <h4>Price: ${product[0].data.price}</h4>                
                <h5>SKU: {product[0].data.sku}</h5>
                <h5>Category: {product[0].data.category.slug}</h5>
                <label>{product[0].data.category.slug}</label>
                {product[0].tags.map((tag,i)=>{
                    return <label key={i}> {tag} </label>
                })}
                <p>
                    {product[0].data.short_description}
                </p>                
                <div className="tableSpecs">
                    <table>
                    <tbody>
                        <tr>
                            <th>Spec name </th>
                            <th>Spec value</th>
                        </tr>
                        {product[0].data.specs.map((spe) =>{
                            
                            return <tr key={spe.spec_name}><td key={spe.spec_name}>{spe.spec_name}</td><td key={spe.spec_value}>{spe.spec_value}</td></tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="addCart">
                    <div>
                        <label> Stock: <strong>{product[0].data.stock}</strong> </label>
                    </div>
                    <div>
                    <input className="iptCart" type="number" label="cart"></input>
                    </div>
                    <button className="btnCart" onClick={()=>alert('Not working yet')} >Add to Cart</button>
                </div></>
            : <Loading></Loading>

    
    

    return (
        <div className="productDetails">
            {renders}            
            
        </div>
    )
}