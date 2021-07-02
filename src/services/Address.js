import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const addAdress = (body, history,clean) => {
    axios
    .put(`${BASE_URL}/address`, body, {
        headers: {
            auth: localStorage.getItem("token"),
        },
    })
    .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/profile")
        clean()
    })
    .catch((error) => {
        alert("Por favor, confirme as informações inseridas.");
        console.log(error.message);
    })
};
