import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { authHeader } from "../constants/authHeader";

export const placeOrder = async (idRest, body, setIsLoading) => {
  try {
    setIsLoading(true);
    const response = await axios.post(
      `${BASE_URL}/restaurants/${idRest}/order`,
      body,
      authHeader()
    );

    const { order } = response.data;

    return {
      order,
      status: true,
    };
  } catch (error) {
    setIsLoading(false);
    const { message } = error.response.data;
    return {
      message,
      status: false,
    };
  }
};
