import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import Footer from '../../components/Footer/Footer'
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';

export default function Restaurant() {
    useProtectedPage();
    const restaurants = UseRequestApi(`${BASE_URL}/restaurants`, {})
    
    return (
        <div>
            <Header/>
            <RestaurantCard restaurants={restaurants}/>
            <Footer />
        </div>
    )
}
