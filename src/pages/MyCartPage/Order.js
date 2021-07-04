import React, { useContext } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  ContainerOrder,
  LabelRestaurantName,
  RestaurantAdress,
} from "./styled";

export default function Order() {
  const { cart } = useContext(GlobalStateContext);
  return (
    <ContainerOrder>
      <RestaurantAdress>
        <LabelRestaurantName>{cart.infoRest.name}</LabelRestaurantName>
        <p>{cart.infoRest.address}</p>
        <p>{cart.infoRest.deliveryTime} min</p>
      </RestaurantAdress>
      <MenuCard inCart products={cart.cartState} />
    </ContainerOrder>
  );
}
