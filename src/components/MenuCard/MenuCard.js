import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MenuContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";

import UseRequestApi from "../../hooks/UseRequestApi";
import { useParams } from "react-router-dom";
import Coke from '../../assets/cokeLoading.gif'
import { useGlobalStates } from "../../global/GlobalState";
import { useGlobalSetters } from "../../global/GlobalState";
import DialogBox from './Dialog/Dialog'

const MenuCard = () => {

  const params = useParams();
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState()
  const [value, setValue] = useState()
  const restaurantDetail = UseRequestApi(
    `${BASE_URL}/restaurants/${params.idRest}`,
    []
  );
    const {cart} = useGlobalStates()
    const { setCart } = useGlobalSetters();

    const handleAddCart = (productToAdd, value) => {
      setOpen(true);

      const index = cart.findIndex((productInCart) => {
        if (productInCart.id === productToAdd.id) {
          return true;
        } else {
          return false;
        }
      });

      if (index === -1) {
        const productWithQuantity = {
          ...productToAdd,
          quantity: value,
        };
        const cartCopy = [...cart, productWithQuantity];
        setCart(cartCopy);
      } else {
        const cartCopy = cart.map((productInCart) => {
          if (productInCart.id === productToAdd.id) {
            return {
              ...productInCart,
              quantity: value,
            };
          } else {
            return productInCart;
          }
        });

        setCart(cartCopy);
      }
    };

    const MenuList =
      restaurantDetail.restaurant &&
      restaurantDetail.restaurant.products &&
      restaurantDetail.restaurant.products.map((product) => {
        return (
          <Card className={"root"}>
            <CardMedia
              className={"cover"}
              image={product.photoUrl}
              title={product.name}
            />
            <CardContent className={"details"}>
              <div className={"content"}>
                <div className={"name"}>
                  <Typography
                    className={"name"}
                    component="h8"
                    color="primary"
                    variant="h8"
                  >
                    {product.name}
                  </Typography>
                </div>
                <p>qtd</p>
              </div>
              <Typography
                className={"description"}
                variant="subtitle1"
                color="textSecondary"
              >
                {product.description}
              </Typography>
              <div className={"controls"}>
                <Typography
                  className={"price"}
                  variant="body2"
                  color="textPrimary"
                  component="p"
                >
                  R${product.price}0
                </Typography>
                <button
                  className={"Rectangle"}
                  onClick={() => {
                    handleAddCart(product,value );
                  }}
                >
                  adicionar
                </button>
              </div>
            </CardContent>
            {open && <DialogBox
              open={openDialog}
              product
              setValue={setValue}
              setOpen={setOpenDialog}
              addItemCart={handleAddCart}
            />}
          </Card>
        );
      });

  return (
    <MenuContainer>
      <Card className={"CardMenu"}>
        <CardActionArea key={"1"}>
          <CardMedia
            className={"media"}
            image={
              restaurantDetail.restaurant && restaurantDetail.restaurant.logoUrl
            }
            title={
              restaurantDetail.restaurant && restaurantDetail.restaurant.name
            }
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="primary"
              component="h2"
            >
              {restaurantDetail.restaurant && restaurantDetail.restaurant.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {restaurantDetail.restaurant &&
                restaurantDetail.restaurant.category}
            </Typography>
            <div className={"shippingTimeContainer"}>
              <Typography variant="body2" color="textSecondary" component="p">
                {restaurantDetail.restaurant &&
                  restaurantDetail.restaurant.deliveryTime}{" "}
                min
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Frete R${" "}
                {restaurantDetail.restaurant &&
                  restaurantDetail.restaurant.shipping}
                ,00
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {restaurantDetail.restaurant &&
                restaurantDetail.restaurant.address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {restaurantDetail? MenuList :<img className={"loading"} src={Coke} />}
      
    </MenuContainer>
  );
};
export default MenuCard;
