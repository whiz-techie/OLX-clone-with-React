import React from 'react';
import Header from './Header.js'
import Firstbanner from './first-banner.js'
import Cards from './cards.js'
import "./App.css";
import {data} from "./data"
import Footer from "./components/Footer.js"
import LinkBar from "./components/LinkBar"


function App() {
    
    return (
        <div>
            <Header />
            <Firstbanner />
            <div className="card-component">
                {data.map((item)=>{
                   return( <div className="individual-card" keys={item.price}>
            <Cards img={item.img} price={item.price} disc={item.disc} city={item.city} day={item.day}/>
             </div>)   })}
            </div>
                <LinkBar/>
            <Footer/>
            <div>
            </div>
        </div>
    )
}

export default App
