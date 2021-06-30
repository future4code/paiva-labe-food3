import React from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import Header from '../../components/Header/Header'

export default function MenuPage() {
    useProtectedPage()

    return (
        <div>
            <Header/>
            <MenuCard/>
        </div>
    )
}