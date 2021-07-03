import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import useProtectedPage from '../../hooks/useProtectedPage'
import SearchPage from "../../pages/SearchPage/SearchPage";
import Footer from '../../components/Footer/Footer'
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';
import Coke from '../../assets/cokeLoading.gif'
import { RestaurantContainer } from './styled'
import SearchComponent from '../../components/Search/SearchComponent';
import Category from '../../components/Category/Category';

export default function Restaurant() {
    useProtectedPage();
    const restaurants = UseRequestApi(`${BASE_URL}/restaurants`, {})
    const [choice, setChoice] = useState("")
    const categoria = []


    const listOfCategory = restaurants.restaurants && restaurants.restaurants.map((el, i, arr) => {
        const index = categoria.findIndex((categoryName) => {
            if (categoryName.category === el.category) {
                return true
            } else {
                return false
            }
        })
        if (index === -1) {
            categoria.push(el.category)

        }
    })



    // const filterCategorys = category.filter((el, i, arr) => arr.indexOf(el) === i);

    return (
        <RestaurantContainer>
            <Header />
            <SearchComponent />
            <Category  categoria={categoria} setChoice={setChoice}/>
            {restaurants.restaurants ? <RestaurantCard restaurants={restaurants} /> : <img className={"loading"} src={Coke} alt={"loading"} />}
            <Footer />
        </RestaurantContainer>
    )
}
