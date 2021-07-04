import { GlobalStateContext } from "./GlobalStateContext";
import React, { useContext, useEffect, useState } from "react";
import {getUserData} from '../services/user'

export const GlobalState = (props) => {
  const [cart, setCart] = useState([])
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});


  const token = localStorage.getItem("token");

  
  useEffect(() => {
    if (token){
      getUserData(setUser)
    }
}, [])

  const states = { data, user, cart };
  const setters = { setData, setUser, setCart };

 
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