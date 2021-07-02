import axios from 'axios'
import {BASE_URL} from '../constants/urls.js'


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


export const NewaddAdress = (body, history,clean) => {
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
