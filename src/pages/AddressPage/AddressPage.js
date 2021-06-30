import React from 'react'
import AddressPageForm from './AddressPageForm'
import back from '../../assets/back.png'
import { useHistory } from 'react-router-dom'
import { BackButton, PContainer } from './styled'


const AddressPage = () => {
  const history = useHistory()

  return (
    <PContainer>
      <BackButton src={back} 
      onClick={() => history.goBack()} />
      <AddressPageForm />
    </PContainer>
  )
}
export default AddressPage