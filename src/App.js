import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from './components/pages/Home'
import Footer from "./components/Footer/Foooter"
import {BrowserRouter as Router, Switch, Route, withRouter, Redirect} from 'react-router-dom';
import ProductDetails from './components/ProductsComponents/productDetails'
import { Catalog as ClassCat } from './components/WellDoneCatalog/Catalog'
import { Footer as TestFooter } from './components/TestFooter/Footer'

function App() {
  return (
        <>
            <Router>
                <Navbar />
                    <Switch>
                        <Route path='/tienda' exact component={ClassCat}/>
                        <Route path='/home' exact component={Home}/>
                        <Route path="/product/:id">
                            <ProductDetails/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/Home" />
                        </Route>
                    </Switch>
                <Footer/>
            </Router>
        </>
  );
}

export default App;