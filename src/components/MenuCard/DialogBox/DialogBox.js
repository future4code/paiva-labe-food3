import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from "@material-ui/core/Typography";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Div, DialogTitle } from './styled'
import { useGlobalSetters } from "../../../global/GlobalState"
import { useGlobalStates } from "../../../global/GlobalState"
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogBox(props) {
  const { setCarrinho } = useGlobalSetters();
  const { carrinho } = useGlobalStates()

  const [quantity, setQuantity] = useState('');
  const classes = useStyles();
  const { open, setOpen, product } = props

  const handleChange = (event) => {
    setQuantity(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const adicionar = async () =>{
    const copyCart = [...carrinho]
    product.quantity = await quantity;
    await setCarrinho([...copyCart, product])
    handleClose()
  }
  return (
    <Div>
      <Dialog aria-labelledby="customized-dialog-title" open={open} onClose={handleClose}>

        <DialogTitle>
          <Typography variant="body2" color="baseColor" component="p"> Selecione a quantidade desejada </Typography>
        </DialogTitle>

        <DialogContent dividers>
          <Select
            value={quantity}
            onChange={handleChange}
          >
            <option aria-label="None" value="" />
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
          </Select>
        </DialogContent>

        <DialogActions>
          <Button onClick={adicionar} color="primary">
            Adicionar ao Carrinho
          </Button>
        </DialogActions>
      </Dialog>
    </Div>
  );
}