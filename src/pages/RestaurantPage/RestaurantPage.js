import React from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import SearchPage from "../../pages/SearchPage/SearchPage";
import Footer from '../../components/Footer/Footer'
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';
import Coke from '../../assets/cokeLoading.gif'
import {RestaurantContainer} from './styled'


export default function Restaurant() {
    useProtectedPage();
    const restaurants = UseRequestApi(`${BASE_URL}/restaurants`, {})
    
    return (
        <RestaurantContainer>
            <Header/>
            {restaurants.restaurants ? <RestaurantCard restaurants={restaurants}/>: <img className={"loading"} src={Coke} alt={"loading"} />}
            <Footer />
        </RestaurantContainer>
    )
}
