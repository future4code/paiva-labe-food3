import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles, StyledFormControl } from "./styled";
import logo from "../../assets/logo-future-eats.png";
import { StyledButton } from "./styled";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/signUp";
import clsx from "clsx";
import {
  TextField,
  IconButton,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

function SignupPage() {
  const classes = useStyles();
  const history = useHistory();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
    error: false,
  });

  const onChangeConfirmPassword = (e) => {
    if (form.password !== e.target.value) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
    setConfirmPassword(e.target.value);
  };

  const onClickSave = async (event) => {
    event.preventDefault();
    cleanFields();
    if (form.password === confirmPassword) {
      setIsValidPassword(false);
      const result = await signUp(form);
      if (result.status) {
        localStorage.setItem("token", result.token);
        setConfirmPassword("");
        cleanFields();
        history.push("/cadastar-endereco");
      } else {
        console.log(result.message);
      }
    } else {
      setIsValidPassword(true);
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handlePassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={logo} alt={"logo"} />
        <p>Entrar</p>
        <form className={classes.form} onSubmit={onClickSave} noValidate>
          <TextField
            name={"name"}
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
            name={"email"}
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
            name={"cpf"}
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

          <StyledFormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            error={isValidPassword}
            fullWidth
          >
            <InputLabel htmlFor="outlined-adornment-confirmPassword">
              Confirmar *
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              name={"confirm_password"}
              placeholder="Confirme a senha anterior"
              type={values.showConfirmPassword ? "text" : "password"}
              value={(values.confirmPassword, confirmPassword)}
              required
              onChange={
                (handleChange("confirmPassword"), onChangeConfirmPassword)
              }
              endAdornment={
                <IconButton
                  aria-label="toggle confirmPassword visibility"
                  onClick={handleConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              }
              labelWidth={85}
            />
            <FormHelperText>
              {isValidPassword && "Deve ser a mesma que a anterior."}
            </FormHelperText>
          </StyledFormControl>

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
  );
}
export default SignupPage;
