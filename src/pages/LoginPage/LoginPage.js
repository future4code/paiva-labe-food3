import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styled";
import logo from "../../assets/logo-future-eats.png";
import { Text } from "./styled";
import {StyledButton} from "./styled"

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt={"logo"} />
        <p>Entrar</p>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email@email.com"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mínimo 6 caracteres"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </StyledButton>
          <Container>
            <Text>{"Não possui cadastro? Clique aqui."}</Text>
          </Container>
        </form>
      </div>
    </Container>
  );
}
