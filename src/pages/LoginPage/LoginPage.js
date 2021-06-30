import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styled";
import logo from "../../assets/logo-future-eats.png";
import { Text } from "./styled";
import { StyledButton, StyledFormControl } from "./styled";
import { login } from "../../services/login";
import {
  TextField,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";

export default function LoginPage() {
  const classes = useStyles();
  const toast = useToast();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    error: false,
  });

  const history = useHistory();

  const onClickLogin = async (event) => {
    event.preventDefault();
    cleanFields();
    const res = await login(form);
    if (res.status) {
      localStorage.setItem("token", res.token);

      if (res.hasAddress) {
        history.push("/restaurant");
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
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

          <StyledFormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Senha *
            </InputLabel>
            <OutlinedInput
              id="password"
              name={"password"}
              placeholder="Mínimo 6 caracteres"
              inputProps={{ minlength: 6, maxLength: 12 }}
              type={values.showPassword ? "text" : "password"}
              value={(values.password, form.password)}
              required
              onChange={(handleChange("password"), onChange)}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handlePassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
              labelWidth={60}
            />
          </StyledFormControl>
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
