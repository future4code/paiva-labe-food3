import axios from 'axios'
import { BASE_URL } from '../constants/urls';

export const getUserData = (setUser) => {
  axios.get(`${BASE_URL}/profile`, {
    headers:{
      auth: localStorage.getItem('token')
    }
})
.then((res) => {
    setUser(res.data.user)
})
.catch((err) => {
    console.log(err) //////////////////////// ARRUMAR ERROS AQUI !!!!!!!!!!!!!!!!!!!!!
})
}