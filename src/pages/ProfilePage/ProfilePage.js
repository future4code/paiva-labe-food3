import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import CreateIcon from "@material-ui/icons/Create";
import ShoppingCarticon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Container, Header, PersonalInformation, OrderHistory } from "./styled";
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import CardHistory from "./CardHistory";
import { useHistory } from "react-router-dom";
import { goToEditProfile, goToEditAddress } from '../../routes/coordinator'
import {useGlobalStates, useGlobalSetters} from '../../global/GlobalState'

export default function ProfilePage() {
  const history = useHistory()
  const {user} = useGlobalStates()
  const {setUser} = useGlobalSetters()


  const order = {
    totalPrice: 20,
    restaurantName: "Habibs",
    createdAt: 1574660015364,
    expiresAt: 1574663615364,
  };


  const changeProfile = () => {
    goToEditProfile(history)
  }

  const changeAddress = () => {
    goToEditAddress(history)
  }

  return (
    <>
      <div>
        <Footer />
      </div>
      <Container>
        <Header>
          <p className="tituloCenter">Meu perfil</p>
        </Header>

        <PersonalInformation>
          <div>
            <p>{user.name} </p>
            <p>{user.email}</p>
            <p>{user.cpf}</p>
          </div>
          <button onClick={changeProfile}>
            <CreateIcon />
          </button>
        </PersonalInformation>

        <PersonalInformation className={"address"}>
          <div>
            <p>Endereço cadastrado</p>
            <p>{user.address}</p>
          </div>

          <button onClick={changeAddress}>
            <CreateIcon />
          </button>
        </PersonalInformation>

        <OrderHistory>
          <p>Histórico de pedidos</p>
          <hr className="division-orders" />

          <CardHistory totalPrice={order.totalPrice}
          restaurantName ={order.restaurantName}
          createdAt={order.createdAt} />

          <CardHistory totalPrice={order.totalPrice}
          restaurantName ={order.restaurantName}
          createdAt={order.createdAt} />

          <CardHistory totalPrice={order.totalPrice}
          restaurantName ={order.restaurantName}
          createdAt={order.createdAt} />
        </OrderHistory>
        <Footer />
      </Container>
    </>
  );
}
