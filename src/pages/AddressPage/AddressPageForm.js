import React from 'react'
import AddressPage from "./AddressPage";
import { useHistory } from 'react-router-dom'
import { PContainer } from './styled'
import Header from '../../components/Header/Header';


export default function AddressPageForm (){
  const history = useHistory()

  return (
    <PContainer>
      <Header/>
            <AddressPage/>
    </PContainer>
  )
}
