import styled from "styled-components";
import {terciaryColor} from '../../constants/colors'


export const Container = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

`

export const PersonalInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem;
    .address{
        background-color: blue;
    }
    
`


export const OrderHistory = styled.div``