import styled from 'styled-components'

export const ContainerSearch = styled.div `
    width: 100%;
  height: 3.5rem;
  display: flex;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
`



export const SearchInput = styled.div`
  display: flex; 
  align-items: center;
  justify-content:center;
  width: 90%;
  height: 56px;
  padding: 16px 8px 16px 17px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;

  input {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`  
export const ButtonSearch = styled.button`
    display:flex;
    top:0; right:0;
    z-index:10;
    border:none;
    background:transparent;
    outline:none;
`

    export const HaderText = styled.p `
       font-size:15px;
    font-weight:500;
    padding-top:12px;
`