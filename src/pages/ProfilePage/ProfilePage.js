import React from "react";
import Footer from "../../components/Footer/Footer";
import CreateIcon from "@material-ui/icons/Create";
import ShoppingCarticon from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import PersonOutline from "@material-ui/icons/PersonOutline";
import { Container, Header, PersonalInformation, OrderHistory } from "./styled";
import CardHistory from "./CardHistory";

export default function ProfilePage() {
  const user = {
    id: "De8UACSFgFySnKdXm5hI",
    name: "Astrodev",
    email: "astrodev@future4.com",
    cpf: "111.111.111-11",
    hasAddress: true,
    address: "R. Afonso Braz, 177 - Vila N. Conceição",
  };
  const order = {
    totalPrice: 20,
    restaurantName: "Habibs",
    createdAt: 1574660015364,
    expiresAt: 1574663615364,
  };

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
            <p>{user.name} X</p>
            <p>{user.email} X</p>
            <p>{user.cpf} X</p>
          </div>
          <button>
            <CreateIcon />
          </button>
        </PersonalInformation>

        <PersonalInformation className={"address"}>
          <div>
            <p>Endereço cadastrado</p>
            <p>{user.address} X</p>
          </div>

          <button>
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

      </Container>
    </>
  );
}
