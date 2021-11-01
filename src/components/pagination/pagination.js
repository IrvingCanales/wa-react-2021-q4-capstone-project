import './pagination.scss'
import PropTypes from "prop-types"
Pagination.propTypes = {
    productsPerPage: PropTypes.number,
    totalProducts: PropTypes.number,
    paginate: PropTypes.func
}
export default function Pagination({productsPerPage,totalProducts, paginate}){
    const pageNumbers = []
    const lastPage =Math.ceil(totalProducts/productsPerPage)
    for(let i=1;i <=lastPage; i++){
        pageNumbers.push(i)
    }
    
    return(
        <div className="pagination">
            
                <button className="btn-pa" onClick={()=> paginate(1)} >&laquo;</button>
                {pageNumbers.map((number)=>{
                    return <button key={number} onClick={()=> paginate(number)} className="btn-pa">{number}</button>                    
                    
                })}
                
                <button className="btn-pa" onClick={()=> paginate(lastPage)}>&raquo;</button>
            
            
        </div>
    )
}