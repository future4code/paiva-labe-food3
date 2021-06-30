import axios from "axios";
import { useState, useEffect } from "react";

const useRequestApi = (url, initialState) => {
  const [data, setData] = useState(initialState);


  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: localStorage.getItem('token')
        },
      })
      .then((res) =>  { 
        setData(res.data)})
      .catch((err) => alert(err));
  }, [url,initialState]);

  return data;
};

export default useRequestApi;