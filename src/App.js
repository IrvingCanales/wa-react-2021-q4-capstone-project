
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useState } from 'react';
import Home from './views/content/Home';
import ProductList from './views/content/ProductList/ProductList';


function App() {

  const [page,setPage] = useState(false)

  const rend = page === false ? <Home></Home> : <ProductList></ProductList>
  

  const handleCallback = (resp) => {    
    setPage(resp)    
  }

  return (
    <div className="App">
      <Header handle={handleCallback}></Header>
      {rend}      
      {!page && <button style={{padding:"7px", margin:"10px"}} onClick={()=>setPage(true)}>View all products</button>}
      <Footer></Footer>
    </div>
  );
}

export default App;
