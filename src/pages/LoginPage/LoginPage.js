import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styled";
import logo from "../../assets/logo-future-eats.png";
import { Text } from "./styled";
import { StyledButton } from "./styled";
import { login } from "../../services/login";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export default function LoginPage() {
  const toast = useToast();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const history = useHistory();

  const onClickLogin = async (event) => {
    event.preventDefault();
    cleanFields();
    const res = await login(form);
    if (res.status) {
      localStorage.setItem("token", res.token);

      if (res.hasAddress) {
        history.push("/restaurantes");
      } else {
        toast({
          title: "Precisamos de mais informações suas",
          description: "Cadastre o seu endereço para poder continuar!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });

        history.push("/cadastar-endereco");
      }
    } else {
      toast({
        title: "Algo deu errado",
        description: `${res.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt={"logo"} />
        <p>Entrar</p>
        <form className={classes.form} onSubmit={onClickLogin} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email@email.com"
            name="email"
            value={form.email}
            onChange={onChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={form.password}
            onChange={onChange}
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
            <Link to="/signup">
              <Text>{"Não possui cadastro? Clique aqui."}</Text>
            </Link>
          </Container>
        </form>
      </div>
    </Container>
  );
}
