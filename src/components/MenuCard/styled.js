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
    letter-spacing: -0.29px;
    /* margin: 8rem 0 1rem;
  padding: 0.5rem 1rem 0; */
  }
  .name{
    font-size: 1rem;
    background-color:green;
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
    flex-wrap: wrap;
    padding-right:0;
  }
  .details {
    background-color: pink;
    padding:0;
    margin:0;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:20rem;
  }
  .content {
    width: 12.5rem;
    padding-right:0;
    margin-right:0;
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
   background-color: lightblue;
   justify-content: space-between;
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
