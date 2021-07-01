import { makeStyles } from "@material-ui/core/styles";
import {Button, FormControl} from "@material-ui/core";
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
export const PContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 640px;
  margin: 25px 0 0;
  //padding: 0 0 36px;
`;
export const BackButton = styled.img`
  width: 23px;
  height: 24px;
  margin: 10px 321px 0 16px;
  object-fit: contain;
  border-bottom: 1px solid;
`;
