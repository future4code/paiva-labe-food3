import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Text = styled.p`
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: black;
`;
export const StyledButton = styled(Button)`
  background: #e8222e;
  color: black;
  text-transform: capitalize;
  &:hover {
    background: #a21720;
  }
`;
