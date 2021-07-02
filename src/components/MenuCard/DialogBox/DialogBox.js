import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import { useGlobalSetters } from "../../../global/GlobalState";
import { useGlobalStates } from "../../../global/GlobalState"


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

 export default  function DialogBox (open, setOpen) {
  const classes = useStyles();
const [quantity, setQuantity] = useState("")

  // const handleClickOpen = (props) => {
  //   setOpen(true);
    
  // };
  const handleQuantityProduct = (event) => {
    setQuantity(event.target.value)
    console.log(event)
  };

  const handleClose = () => {
    setOpen(false);
    // props.handleAddCart(quantity)
    // const newCart = [...cart];
    // quantity !== 0 && newCart.push({ quantity: quantity});
  };


  return (
    <React.Fragment>
      {/* <Button variant="outlined" color="primary" onClick={props.handleAddCart}>
        adicionar
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Selecione a quantidade desejada</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Quantidade
              </InputLabel>
              <Select required
              onChange={handleQuantityProduct}
              
              value={quantity} label="Quantidade">
       
                <option aria-label="None" disabled />
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
              
              </Select>
            </FormControl>
            </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Adicionar ao carrinho
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
