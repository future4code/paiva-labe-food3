import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import SearchPage from "../../pages/SearchPage/SearchPage";
import Footer from '../../components/Footer/Footer'
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';


export default function Restaurant() {
    useProtectedPage();
    const restaurants = UseRequestApi(`${BASE_URL}/restaurants`, {})
    
    return (
        <div>
            <Header/>
<<<<<<< HEAD
            <RestaurantCard restaurants={restaurants}/>
=======
<SearchPage/>
            <RestaurantCard/>
>>>>>>> 25202f0af066ade498c69b275af3aacc5d65a71b
            <Footer />
        </div>
    )
}
