import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";

const Category = (props) => {
  const { categoria, setChoice } = props;
  const listadeCategoria = categoria.map((el) => {
    return <span onClick={setChoice(el)}>{el}</span>;
  });
  return <>{listadeCategoria}</>;
};

export default Category;
