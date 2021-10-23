import './pagination.scss'
export default function Pagination(){
    return(
        <div className="pagination">
            
                <button className="btn-pa">&laquo;</button>
                <button className="btn-pa">1</button>            
                <button className="btn-pa">2</button>            
                <button className="btn-pa">3</button>
                <button className="btn-pa">&raquo;</button>
            
            
        </div>
    )
}