import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'

export default function Restaurant() {
    useProtectedPage();
    
    return (
        <div>
            <Header/>
            <RestaurantCard/>
        </div>
    )
}
