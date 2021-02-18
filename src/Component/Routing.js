import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home/Main'

const Routing=()=>{
return(
    <BrowserRouter>
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
    </BrowserRouter>
)
}

export default Routing;