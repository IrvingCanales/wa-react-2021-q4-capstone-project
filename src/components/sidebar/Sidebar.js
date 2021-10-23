import { SidebarData } from "../../utils/SidebarData"
import './Sidebar.scss'
export default function Siderbar({handleF,filter}){
    const results = SidebarData[0].results     
    const handleClick = (resp,active)=>{
        handleF(resp,active)
    }
    
    const list = results.map( (lis)=>{         
        
        const active = filter.includes(lis.data.name.toLocaleLowerCase()) ? 'active' : ''
        return <li key={lis.id}><a href="/#"  key={lis.id} className={`elements ${active}`} onClick={()=>handleClick(lis.data.name,active)}>{lis.data.name} </a></li>
    })

    return(
        <div className='sidebar'>
            <h3>Categories</h3>
            <ul className="list">
                {list}
            </ul>
        </div>
    )
}