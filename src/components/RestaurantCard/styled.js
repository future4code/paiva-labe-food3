import styled from 'styled-components'

export const RestaurantCardContainer = styled.div`
display: grid;
gap:20px;
padding:1rem;

  .CardRestaurants {
    max-width: 20.5rem;
    max-height:11.75rem;
  
  }

  .media {
  width: 20.5rem;
  height: 7.5rem;
  margin: 0 0 0.75rem;
  object-fit: contain;
  }
`
export const ContainerTimeShipping = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
`