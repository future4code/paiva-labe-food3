import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

 const DialogBox =(props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
   const [quantity, setQuantity] = useState(0);
  const {setCart} = useGlobalSetters()
  const {cart} = useGlobalStates()

  const handleClickOpen = (props) => {
    setOpen(true);
    
  };
  const handleQuantityProduct = (event) => {
    setQuantity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
    props.handleAddCart(quantity)
    const newCart = [...cart];
    quantity !== 0 && newCart.push({ quantity: quantity});
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
     <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>              <Select
                autoFocus
                onChange={handleQuantityProduct}
                inputProps={{
                }}
              >
                <MenuItem value={false}>0</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="11">11</MenuItem>
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="13">13</MenuItem>
                <MenuItem value="14">14</MenuItem>
                <MenuItem value="15">15</MenuItem>
                <MenuItem value="16">16</MenuItem>
                <MenuItem value="17">17</MenuItem>
                <MenuItem value="18">18</MenuItem>
                <MenuItem value="19">19</MenuItem>
                <MenuItem value="20">20</MenuItem>
              
              </Select>
            </FormControl>
           
          </form>
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
export default DialogBox