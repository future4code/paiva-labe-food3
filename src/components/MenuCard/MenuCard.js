import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BASE_URL } from '../../constants/urls';
import UseRequestApi from '../../hooks/UseRequestApi';
import { MenuContainer } from './styled';
import { useParams } from "react-router-dom";


const MenuCard = () => {
    const params = useParams();
    const restaurantDetail = UseRequestApi(`${BASE_URL}/restaurants/${params.idRest}`, [])
    

    const MenuList = restaurantDetail.restaurant && restaurantDetail.restaurant.products && restaurantDetail.restaurant.products.map((product)=>{
      return(
        <Card className={"CardMenu"}>      
       <CardActionArea key={"1"} >
             <CardMedia
             className={"media"}
             image={product.photoUrl}
             title={product.name}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
             {product.name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               R$ {product.price}
             </Typography>
           </CardContent>
          </CardActionArea>
          </Card>                    
      )
    })

  return ( 
  <MenuContainer>
   <Card className={"CardMenu"}>      
       <CardActionArea key={"1"} >
             <CardMedia
             className={"media"}
             image={restaurantDetail.restaurant && restaurantDetail.restaurant.logoUrl}
             title={restaurantDetail.restaurant && restaurantDetail.restaurant.name}
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
             {restaurantDetail.restaurant && restaurantDetail.restaurant.name}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
              {restaurantDetail.restaurant && restaurantDetail.restaurant.category}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               Frete R$ {restaurantDetail.restaurant && restaurantDetail.restaurant.shipping}
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               {restaurantDetail.restaurant && restaurantDetail.restaurant.deliveryTime} min
             </Typography>
             <Typography variant="body2" color="textSecondary" component="p">
               {restaurantDetail.restaurant && restaurantDetail.restaurant.address}
             </Typography>
           </CardContent>
          </CardActionArea>
          </Card>
          {MenuList}

    </MenuContainer>
  );
}
export default MenuCard