import React from 'react'
//import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//import GlobalContext from "../../global/globalContext";
//import useProtectedPage from "../../hooks/useProtectedPage";
import logo from "../../assets/logo-future-eats@2x.png";
import { HomePageContainer, LogoImg } from './styled';

export default function HomePage() {
    const token = localStorage.getItem("token")
    const history = useHistory()
    setTimeout(() => {
        if(token) {
            history.push("/restaurant")
        } else{
            history.push("/login")
        }
    }, 2000);
    return (
        <HomePageContainer>
            <LogoImg src={logo} alt="logo"/>
        </HomePageContainer>
    )
}
