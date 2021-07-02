import styled from "styled-components";
import {terciaryColor, darkColor, baseColor} from '../../constants/colors'

export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow-y: auto;
    .address{
        background-color: ${terciaryColor};
    }
    .tituloCenter{
        text-align: center;
    }
`
export const Header = styled.div`
    width: 100%;
    height: 4rem;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: ${baseColor};
`

export const PersonalInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`

export const OrderHistory = styled.div`
    padding: 0 1rem 0 1rem;
    padding-bottom: 5rem;
    .division-orders {
        background-color: ${darkColor};
    }
`