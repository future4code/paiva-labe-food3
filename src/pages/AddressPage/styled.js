import styled from 'styled-components'
import { secondaryColor } from '../../constants/colors'

export const PContainer = styled.div`
 display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  height: 640px;
  margin: 58px 0 0;
  padding: 0 0 36px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`

export const BackButton = styled.img`
  width: 23px;
  height: 24px;
  margin: 10px 321px 0 16px;
  object-fit: contain;
  border-bottom: 1px solid ${secondaryColor};
`
