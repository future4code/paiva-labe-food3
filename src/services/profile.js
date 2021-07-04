import { goToLastPage } from "../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { authHeader } from "../constants/authHeader";

export const editProfile = (body, history, setLoading, clear) => {
  setLoading(true);
  axios
    .put(`${BASE_URL}/profile`, body, authHeader())
    .then((res) => {
      clear();
      alert("Perfil editado com sucesso");
      goToLastPage(history);
      setLoading(false);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setLoading(false);
    });
};

export const getProfile = (setProfile, setLoading) => {
  setLoading(true);
  axios
    .get(`${BASE_URL}/profile`, authHeader())
    .then((res) => {
      setProfile(res.data.user);
      setLoading(false);
    })
    .catch((err) => {
      alert("Erro ao alterar Perfil");
      setLoading(false);
    });
};
