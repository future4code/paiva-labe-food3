import styled from 'styled-components'

export const MenuContainer = styled.div`
display: grid;
gap:0.5rem;
padding:1rem;
font-family: Roboto;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;

  .CardMenu {
    max-width: 20.5rem;
  
  }
  .description{
    font-size: 0.75rem;
  }
  .name{
    font-size: 1rem;
  }
  .price{
    font-size: 1rem;
  }

  .media {
    height: 7.5rem;
  }

  .root {
    display:flex;
    max-width: 20.5rem;
    max-height:7rem;
  }
  .details {
    display:flex;
    flex-direction: column;
    height:20rem;
  }
  .content {
    width: 12.5rem;
    padding:0;
    /* padding-top:16rem; */
    /* flex: '1 0 auto', */
  }
  .cover {
  min-width: 6rem;
  height: 7rem;
  /* margin: 0 1rem 0 0; */
  object-fit: contain;
  }
  .controls {
   display: flex;
   position: relative;
   /* flex-direction: column; */
   align-items: flex-end;
    /* paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1), */
  }
   
  .Rectangle {
  width: 5.625rem;
  height: 1.938rem;
  margin: 0.438rem 0 0 0.5rem;
  padding: 0.5rem 1.438rem 0.563rem 1.5rem;
  border-radius: 8px 0;
  border: solid 1px #e02020;
  }

.shippingTimeContainer {
  display:grid;
grid-template-columns: 1fr 1fr 1fr;
}







`
