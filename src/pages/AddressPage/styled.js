import { makeStyles } from "@material-ui/core/styles";
import {Button, FormControl} from "@material-ui/core";
import styled from "styled-components";
import { baseColor } from "../../constants/colors";
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper2: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Text = styled.p`
  display: flex;
  justify-content: center;
`;
export const StyledButton = styled(Button)`
  background: #e8222e;
  color: black;
  text-transform: capitalize;
  &:hover {
    background: #a21720;
  }
`;

export const StyledFormControl = styled(FormControl)`
  margin: 1rem 0;
`
export const VoltarDiv = styled.div`
height: 4rem;
width: 100%;
display: flex;
justify-content: flex-start;
background-color: ${baseColor} ;
  margin: 0 ;
  padding: 0 0 0.625rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
.back{
  width: 1.44rem;
  height: 1.5rem;
  margin: 0.625rem 20.06rem 0 1rem;
  object-fit: contain;
}
`
