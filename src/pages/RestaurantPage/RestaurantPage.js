import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import Footer from '../../components/Footer/Footer'

export default function Restaurant() {
    useProtectedPage();
    
    return (
        <div>
            <Header/>
            <RestaurantCard/>
            <Footer />
        </div>
    )
}
