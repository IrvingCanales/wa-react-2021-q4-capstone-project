import Slider from '../../components/slider/Slider'
import Carousel from '../../components/carousel/Carousel'
import Grid from '../../components/grid/Grid'
import { Link } from 'react-router-dom'
export default function Home(){
    return (
        <main>            
            <Slider></Slider>            
            <Carousel></Carousel>
            <Grid></Grid>
            <Link to="/products">
            {<button style={{padding:"7px", margin:"10px"}} >View all products</button>}
            </Link>
            
        </main>
    )
}