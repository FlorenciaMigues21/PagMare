import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/pages/Home'
import Catalog from './components/pages/catalog'
import Footer from "./components/Footer/Foooter"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './components/ProductsComponents/productDetails'
function App() {
  return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/tienda' exact component={Catalog}/>
                    <Route path="/product/:id">
                        <ProductDetails/>
                    </Route>
                </Switch>
            </Router>

            </>

  );
}

export default App;