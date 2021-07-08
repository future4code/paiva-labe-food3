import React from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header/Header'
import {MenuPageContainer} from './styled'

export default function MenuPage() {
    useProtectedPage()



    return (
        <MenuPageContainer>
            <Header/>
            <MenuCard />
        </MenuPageContainer>
    )
}