import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function RestaurantCard() {
    const restaurants = UserRequestApi(`${BASE_URL}/restaurants`, [])
    
  const classes = useStyles();
 const RestaurantsList = restaurantes && restaurants.map((r)=>{
     return(<>
        <CardMedia
        className={classes.media}
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
        frete: {r.shipping}
        </Typography>
      </CardContent>
      </>
     )
 })
  return (
    <Card className={classes.root}>
       
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Habibs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          60 min
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          frete: 6
          </Typography>          
        </CardContent>
        {RestaurantsList}
      </CardActionArea>
    </Card>
  );
}
