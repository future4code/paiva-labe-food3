import React, { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { CategoryContainer } from "./styled";
import { InputAdornment, Typography } from '@material-ui/core';
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
    <Typography color={choice===el ? "primary" : ""}  margin="normal" onClick={() => handleClick(el)}>{el}</Typography> </>
  });
  return <CategoryContainer>{listadeCategoria}</CategoryContainer>;
};

export default Category;


