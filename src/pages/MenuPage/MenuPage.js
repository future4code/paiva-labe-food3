import React from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header/Header'
import { BASE_URL } from "../../constants/urls";
import UseRequestApi from "../../hooks/UseRequestApi";
import { useParams } from "react-router-dom";
import Coke from '../../assets/cokeLoading.gif'
import {MenuPageContainer} from './styled'

export default function MenuPage() {
    useProtectedPage()
    const params = useParams();
  const restaurantDetail = UseRequestApi(
    `${BASE_URL}/restaurants/${params.idRest}`,
    []
  );


    return (
        <MenuPageContainer>
            <Header/>
            {restaurantDetail ? <MenuCard restaurantDetail={restaurantDetail}/>:<img className={"loading"} src={Coke} />}
        </MenuPageContainer>
    )
}