import axios from "axios";
import { BASE_URL } from "../constants/urls";


export const getSearch = (setRestaurants) => {
    axios
        .get(`${BASE_URL}/restaurants`,  {
            headers: {
                auth: localStorage.getItem("token"),
            },
        })
        .then(response => {
            setRestaurants(response)
        })
        .catch(error => {
            console.log(error.message)
        })
}