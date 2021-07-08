import axios from 'axios'
import {BASE_URL} from '../constants/urls.js'
import {getUserData} from './user'


export const changeInfoPerfil = (setUser, body, history) => {
  axios.put(`${BASE_URL}/profile`, body, {
    headers:{
      auth: localStorage.getItem('token')
    }
})

.then((res) => {
  setUser(res.data.user)
  alert('Alteração realizada com sucesso!')
  history.goBack()

})
.catch((err) => {
  console.log(err)
  alert('Tente novamente')

})

}

export const NewaddAdress = (body, history, clean, setUser) => {
  axios
  .put(`${BASE_URL}/address`, body, {
      headers: {
          auth: localStorage.getItem("token"),
      },
  })
  .then((response) => {
    console.log(response)
      localStorage.setItem("token", response.data.token);
      getUserData(setUser)
      alert('Alteração realizada com sucesso!')
      history.goBack()
      clean()
  })
  .catch((error) => {
      alert("Por favor, confirme as informações inseridas.");
      console.log(error.message);
  })
};
