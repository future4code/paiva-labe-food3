import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styled";
import { StyledButton, VoltarDiv } from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from 'react-router-dom'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import clsx from "clsx";
import {
  TextField,
  IconButton,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { addAdress } from "../../services/Address";


export default function AddressPage() {
  const classes = useStyles();
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    street: "",
    number: "",
    complement: "",
    neighbourhood: "",
    city: "",
    state: "",
  });

  const onClickSave = async (event) => {
    event.preventDefault();
    addAdress(form, history, cleanFields)
    //implementar o axios
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

        <VoltarDiv>
        <ArrowBackIosIcon onClick={null} className={".back"}/>
        </VoltarDiv>

        <Typography className={classes.paper2} component="p">Meu endereço</Typography>
        <form className={classes.form} onSubmit={onClickSave} noValidate>
          <TextField
            name={"street"}
            value={form.street}
            onChange={onChange}
            className={clsx(classes.margin, classes.textField)}
            label={"Logradouro"}
            placeholder={"Rua/Av."}
            margin={"normal"}
            variant={"outlined"}
            type={"text"}
            required
            fullWidth
          />

          <TextField
            name={"number"}
            value={form.number}
            onChange={onChange}
            className={clsx(classes.margin, classes.textField)}
            label={"Número"}
            placeholder={"Número"}
            margin={"normal"}
            variant={"outlined"}
            type={"number"}
            required
            fullWidth
          />

          <TextField
            name={"complement"}
            value={form.complement}
            onChange={onChange}
            type={"text"}
            className={clsx(classes.margin, classes.textField)}
            label={"Complemento"}
            placeholder={"Apto. / Bloco"}
            margin={"normal"}
            variant={"outlined"}
            fullWidth
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            onChange={onChange}
            type={"text"}
            className={clsx(classes.margin, classes.textField)}
            label={"Bairro"}
            placeholder={"Bairro"}
            margin={"normal"}
            variant={"outlined"}
            required
            fullWidth
          />
          <TextField
            name={"city"}
            value={form.city}
            onChange={onChange}
            type={"text"}
            className={clsx(classes.margin, classes.textField)}
            label={"Cidade"}
            placeholder={"Cidade"}
            margin={"normal"}
            variant={"outlined"}
            required
            fullWidth
          />
          <TextField
            name={"state"}
            value={form.state}
            onChange={onChange}
            type={"text"}
            className={clsx(classes.margin, classes.textField)}
            label={"Estado"}
            placeholder={"Estado"}
            margin={"normal"}
            variant={"outlined"}
            required
            fullWidth
          />

          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </StyledButton>
        </form>

    </Container>
  );
}
