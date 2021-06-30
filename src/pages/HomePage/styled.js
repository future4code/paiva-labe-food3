import styled from "styled-components";
import {primaryColor} from "../../constants/colors"

export const HomePageContainer = styled.div`
    background-color: ${primaryColor} ;
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const LogoImg = styled.img`
  width: 7.875rem;
  height: 4.063rem;
  object-fit: contain;

`