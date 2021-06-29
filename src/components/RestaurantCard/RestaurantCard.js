import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';
import { RestaurantCardContainer } from './styled';
import { useHistory } from "react-router-dom";

const RestaurantCard = () => {
    const restaurants = UseRequestApi(`${BASE_URL}/restaurants`, {})
    const history = useHistory();

    const handleRestaurant = (id) =>{
      history.push(`restaurant/${id}`)
    }
    
 const RestaurantsList =
   restaurants.restaurants &&
   restaurants.restaurants.map((r) => {
     return (  
     <Card className={"CardRestaurants"}>      
       <CardActionArea key={r.id} onClick={()=>handleRestaurant(r.id)} >
             <CardMedia
             className={"media"}
             image={r.logoUrl}
             title={r.name}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {r.name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               {r.deliveryTime} min
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               frete R${r.shipping}
             </Typography>
           </CardContent>
          </CardActionArea>
          </Card>          
       );
   });

  return ( 
  <RestaurantCardContainer>
  
          {RestaurantsList}      
    
    </RestaurantCardContainer>
  );
}
export default RestaurantCard