import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import SearchPage from "../../pages/SearchPage/SearchPage";
import Footer from '../../components/Footer/Footer'


export default function Restaurant() {
    useProtectedPage();
    
    return (
        <div>
            <Header/>
<SearchPage/>
            <RestaurantCard/>
            <Footer />
        </div>
    )
}
