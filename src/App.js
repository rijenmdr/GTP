import React from 'react';

import { Navbar, Brand, CTA } from './components';
import { Header,WhatsGPT, Features, Footer, Blog, Possibility } from './container';
//css
import './App.css'

const App = () => {
    return (
        <>
            <div className="gradient__bg">
                <Navbar/>            
                <Header/>
            </div>
            <Brand/>
            <WhatsGPT/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </>
    )
}

export default App
