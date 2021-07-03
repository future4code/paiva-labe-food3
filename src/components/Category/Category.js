import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CategoryContainer } from "./styled";

const Category = (props) => {
  const { categoria, setChoice,choice } = props;
 
  const handleClick = ( el) => {
    if (choice === el){
        setChoice("")
    }else{
        setChoice(el);
    }
}
  const listadeCategoria = categoria.map((el) => {
    return < >
    <p onClick={() => handleClick(el)}>{el}</p> </>
  });
  return <CategoryContainer>{listadeCategoria}</CategoryContainer>;
};

export default Category;
