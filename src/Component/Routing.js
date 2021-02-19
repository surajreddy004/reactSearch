import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Main'
import ListingApi from './Listing/ListingApi';

const Routing=()=>{
return(
    <BrowserRouter>
    <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list/:id" component={ListingApi}/>

        <Footer/>
    </div>
    </BrowserRouter>
)
}

export default Routing;