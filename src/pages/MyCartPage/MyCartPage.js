import {
  FormControlLabel,
  RadioGroup,
  CircularProgress,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components//Footer/Footer";
import GlobalStateContext from "../../global/GlobalStateContext";
import useForm from "../../hooks/useForm";
import { goToHomePage } from "../../routes/coordinator";
import { getActiveOrder } from "../../services/getActiveOrder";
import { getFullAdress } from "../../services/getFullAdress";
import { placeOrder } from "../../services/placeOrder";
import Order from "./Order";
import {
  Adress,
  AdressCard,
  AdressLabel,
  ContainerMyCart,
  ContainerPayment,
  HeaderCart,
  ContainerValues,
  SubTotal,
  TotalValue,
  RadioBlack,
  PaymentType,
  PaymentTypeTitle,
  ConfirmButton,
  ContainerHeader,
  ContainerScroll,
} from "./styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import { createStandaloneToast } from "@chakra-ui/react";
const initialState = {
  paymentMethod: "",
};

export default function MyCartPage() {
  useProtectedPage();
  const [userAddress, setUserAddress] = useState("");
  const [form, handleInputChange] = useForm(initialState);
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useContext(GlobalStateContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const toast = createStandaloneToast();

  useEffect(() => {
    const totalValue = cart.cartState.reduce((acc, curr) => {
      return acc + curr.totalValue;
    }, 0);

    setTotalCart(totalValue + Number(cart.infoRest.shipping));
  }, [cart.cartState]);

  useEffect(() => {
    (async () => {
      const result = await getFullAdress();

      if (result.status) {
        const { street, number } = result.address;
        const addressString = `${street}, ${number}`;
        setUserAddress(addressString);
      }
    })();
  }, []);

  const onClickConfirm = async () => {
    window.event.preventDefault();

    const { paymentMethod } = form;

    const products = cart.cartState.map((item) => {
      const { id, quantity } = item;

      return { id, quantity };
    });

    const body = {
      products,
      paymentMethod,
    };

    const hasOrder = await getActiveOrder();

    if (!hasOrder.order) {
      const result = await placeOrder(cart.infoRest.id, body, setIsLoading);

      if (result.status) {
        goToHomePage(history);
        cart.clearCart();
      } else {
        console.log(result.message);
      }
    } else {
      toast({
        title: "Existe um pedido ativo",
        description:
          "Aguarde o pedido ser finalizado para fazer um novo pedido",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const toMoney = (value) => {
    return Number(value).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <>
      <Footer />
      <ContainerMyCart>
        <ContainerHeader>
          <HeaderCart>Meu carrinho</HeaderCart>

          <AdressCard>
            <AdressLabel>Endereço de entrega</AdressLabel>
            <Adress>{userAddress}</Adress>
          </AdressCard>
        </ContainerHeader>
        {cart.cartState.length === 0 && <p>Carrinho vazio</p>}
        <ContainerScroll>
          {cart.cartState.length > 0 && <Order />}
          <ContainerPayment onSubmit={onClickConfirm}>
            <ContainerValues>
              <p>
                Frete:{" "}
                {cart.infoRest.shipping
                  ? toMoney(cart.infoRest.shipping)
                  : "R$ 0,00"}
              </p>

              <SubTotal>
                <span>SUBTOTAL</span>
                <TotalValue>
                  {cart.cartState.length > 0 ? toMoney(totalCart) : "R$ 00,00"}
                </TotalValue>
              </SubTotal>
            </ContainerValues>

            <PaymentType>
              <PaymentTypeTitle>Forma de pagamento</PaymentTypeTitle>
              <hr />
              <RadioGroup name="paymentMethod" onChange={handleInputChange}>
                <FormControlLabel
                  value="money"
                  control={<RadioBlack />}
                  label="Dinheiro"
                />
                <FormControlLabel
                  value="creditcard"
                  control={<RadioBlack />}
                  label="Cartão de crédito"
                />
              </RadioGroup>
            </PaymentType>
            <ConfirmButton
              type="submit"
              disabled={cart.cartState.length === 0 ? true : false}
            >
              {isLoading ? (
                <CircularProgress color={"inherit"} size={24} />
              ) : (
                <>Confirmar</>
              )}
            </ConfirmButton>
          </ContainerPayment>
        </ContainerScroll>
      </ContainerMyCart>
      <Footer cart />
    </>
  );
}
