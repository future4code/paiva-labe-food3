import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import SearchPage from "../../pages/SearchPage/SearchPage";

export default function Restaurant() {
    useProtectedPage();
    
    return (
        <div>
            <Header/>
<SearchPage/>
            <RestaurantCard/>
        </div>
    )
}
