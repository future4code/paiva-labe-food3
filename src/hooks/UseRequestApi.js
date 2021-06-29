import axios from "axios";
import { useState, useEffect } from "react";

const useRequestApi = (url, initialState) => {
  const [data, setData] = useState(initialState);


  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZBOGlWQ2RVZ3k2R01OSE1BU1AxIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyNDg5OTU2OX0.02TeDPY17GBVs2cU9zy6rMZufWexc5FmCwWhX3PRvUo"
        },
      })
      .then((res) =>  { 
        setData(res.data)})
      .catch((err) => alert(err));
  }, [url,initialState]);

  return data;
};

export default useRequestApi;