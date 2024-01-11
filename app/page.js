"use client"
import Link  from 'next/link';
import './globals.css'
import {createContext} from 'react'
import Navbar from './components/navegation/Navbar';
import Footer from './components/navegation/Footer';
import Incentives from './components/Home/Incentives'


const Home = ()=>{

    return(
        <>    <Navbar/>
                
                          
              <Incentives/>

            <Footer/>
            </>
    );
}

export default Home