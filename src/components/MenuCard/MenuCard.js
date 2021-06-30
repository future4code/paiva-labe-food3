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
import Button from '@material-ui/core/Button';


const MenuCard = () => {
    const params = useParams();
    const restaurantDetail = UseRequestApi(`${BASE_URL}/restaurants/${params.idRest}`, [])
    
    const MenuList = restaurantDetail.restaurant && restaurantDetail.restaurant.products &&
     restaurantDetail.restaurant.products.map((product)=>{
      return(
        <Card className={"root"}>
        <CardMedia
         className={"cover"}
         image={product.photoUrl}
         title={product.name}
       />
         <div className={"details"}>
         <CardContent className={"content"}>
           <Typography className={"name"} component="h8" variant="h8">
           {product.name}
           </Typography>
           <Typography className={"description"} variant="subtitle1" color="textSecondary">
           {product.description}
           </Typography>
           <Typography className={"price"}variant="body2" color="textSecondary" component="p">
            R$ {product.price}0
          </Typography>          
         </CardContent>
            </div>
            <div className={"controls"}>
              <button className={"Rectangle"}>adicionar</button>
            </div>
       
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
             <div className={"shippingTimeContainer"}>          
             <Typography variant="body2" color="textSecondary" component="p">
               {restaurantDetail.restaurant && restaurantDetail.restaurant.deliveryTime} min                  
             </Typography>             
             <Typography variant="body2" color="textSecondary" component="p">
               Frete R$ {restaurantDetail.restaurant && restaurantDetail.restaurant.shipping},00
             </Typography>
             </div>
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