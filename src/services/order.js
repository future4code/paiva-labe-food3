import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToHomePage } from "../routes/coordinator";
import { authHeader } from "../constants/authHeader";

export const placeOrder = (body, history, restaurantId) => {
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, authHeader())
    .then((res) => {
      alert("Pedido criado com sucesso!");
      goToHomePage(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const getOrdersHistory = (setOrders, setLoading) => {
  setLoading(true);
  axios
    .get(`${BASE_URL}/orders/history`, authHeader())
    .then((res) => {
      setOrders(res.data.orders);
      setLoading(false);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
};

export const getActiveOrders = (setActiveOrder) => {
  axios
    .get(`${BASE_URL}/active-order`, authHeader())
    .then((res) => {
      setActiveOrder(res.data.order);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
