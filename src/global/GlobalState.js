import { GlobalStateContext } from "./GlobalStateContext";
import React, { useContext, useEffect, useState } from "react";

export const GlobalState = (props) => {
    
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");









  const states = { data };
  const setters = { setData};
 
  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalStateContext);
};

export const useGlobalStates = () => {
  const { states } = useGlobal();
  return states;
};

export const useGlobalSetters = () => {
  const { setters } = useGlobal();
  return setters;
};