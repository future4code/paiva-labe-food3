import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { authHeader } from "../constants/authHeader";

export const getFullAdress = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/profile/address`,
      authHeader()
    );

    const { address } = response.data;

    return {
      address,
      status: true,
    };
  } catch (error) {
    const { message } = error.response.data;
    return {
      message,
      status: false,
    };
  }
};
