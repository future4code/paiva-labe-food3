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