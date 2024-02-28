import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'


const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductList/>
            <Cart/>
            
        </>
    )
}

export default HomePage