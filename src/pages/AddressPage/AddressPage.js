import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styled";
import { StyledButton } from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { addAdress } from '../../services/Address'

import {
  TextField,
  IconButton,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@material-ui/core";

export default function AddressPage() {
  const classes = useStyles();
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const onClickSave = async (event) => {
    event.preventDefault();
    addAdress(form, history);
    cleanFields();
    //implementar o axios
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography variant="h6">Meu Endereço</Typography>
        <form className={classes.form} onSubmit={onClickSave} noValidate>
          <TextField
            name={"logradouro"}
            value={form.logradouro}
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
            name={"numero"}
            value={form.numero}
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
            name={"complemento"}
            value={form.complemento}
            onChange={onChange}
            type={"text"}
            className={clsx(classes.margin, classes.textField)}
            label={"Complemento"}
            placeholder={"Apto. / Bloco"}
            margin={"normal"}
            variant={"outlined"}
            required
            fullWidth
          />
          <TextField
            name={"bairro"}
            value={form.bairro}
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
            name={"cidade"}
            value={form.cidade}
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
            name={"estado"}
            value={form.estado}
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

            
          type={"submit"}
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          fullWidth
          >
            <Typography variant="h6">Salvar</Typography>
          </StyledButton>
        </form>
      </div>
    </Container>
  );
}
