import React, { useEffect, useState } from 'react';
import { StyledButton } from "../SignupPage/styled";
import { useStyles, StyledFormControl } from "../SignupPage/styled";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import {
    TextField,
    IconButton,
    FormHelperText,
    InputLabel,
    OutlinedInput,
  } from "@material-ui/core";
import {useGlobalStates, useGlobalSetters} from '../../global/GlobalState'
import useForm from '../../hooks/useForm'
import {changeInfoPerfil} from '../../services/changeInfoPerfil'
import {useHistory} from 'react-router-dom'


export default function EditProfile() {
    const [newUser, setNewUser] = useState({})
    const classes = useStyles();
    const {user} = useGlobalStates()
    const {setUser} = useGlobalSetters()
    const history = useHistory()

    const {form, onChange, cleanFields} = useForm({
        name: user.name,
        email:user.email,
        cpf: user.cpf
    })
    const update = (event) => {
        event.preventDefault()
        changeInfoPerfil(setUser, form, history)
    }



    return (
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div >
       
          <p>Editar</p>
          <form  onSubmit={update}>
            <TextField
              name={'name'}
              value={form.name}
              onChange={onChange}
              className={clsx(classes.margin, classes.textField)}
              label={"Nome"}
              placeholder={"Nome e sobrenome"}
              margin={"normal"}
              variant={"outlined"}
              type={"text"}
              required
              fullWidth
            />
  
            <TextField
            name={'email'}
            value={form.email}
            onChange={onChange}
              InputProps={{
                inputProps: {
                  pattern:
                    "^[_A-Za-z0-9-+]+(.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(.[A-Za-z0-9]+)*(.[A-Za-z]{2,})$",
                },
              }}
              className={clsx(classes.margin, classes.textField)}
              label={"E-mail"}
              placeholder={"email@email.com"}
              margin={"normal"}
              variant={"outlined"}
              type={"email"}
              required
              fullWidth
            />
  
            <TextField
              name={'cpf'}
              value={form.cpf}
              onChange={onChange}
              type={"number"}
              className={clsx(classes.margin, classes.textField)}
              label={"CPF"}
              placeholder={"000.000.000-00"}
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
        </div>
      </Container>
    )
}
