
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './views/content/Home';
import ProductList from './views/content/ProductList/ProductList';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import ProductDetails from './components/productDetails/productDetails';
import SearchResult from './components/searchResult/searchResult';


function App() {   
  
  return (
    <BrowserRouter >
      <div className="App">
      <Header ></Header>
      <Switch>
          <Route exact path="/">
            <Home></Home>  
          </Route>
          <Route exact path="/home">
            <Home></Home>  
          </Route>
          <Route exact path="/products">
            <ProductList></ProductList>
          </Route>
          <Route exact path="/product/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path="/search">            
            <SearchResult />
          </Route>
          <Route  path="*">
            <div><h1>Not found</h1></div>  
          </Route>
      </Switch>                
        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
