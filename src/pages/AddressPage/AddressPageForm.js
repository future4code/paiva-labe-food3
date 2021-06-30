import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button'
import { Typography } from '@material-ui/core'
import { addAdress } from '../../services/Address'
import useForm from "../../hooks/useForm";
//import { goToHomePage } from '../../routes/coordinator'
import TextField from '@material-ui/core/TextField'
import React from "react"
import { FormContainer } from './styled'

const AddressPageForm = () => {
  const history = useHistory()
  const [form, onChange, cleanFields] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""

  })

  const onSubmitForm = (event) => {
    event.preventDefault()
    addAdress(form, cleanFields, history)
    //goToHomePage(history)
    console.log(form)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <FormContainer>
        <Typography variant="h5">Meu Endereço</Typography>
        <FormContainer>
          <TextField
            name={"street"}
            value={form.street}
            label={"Rua"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"street"}
            required
            autoFocus
            fullWidth
          />
          <TextField
            name={"number"}
            value={form.number}
            label={"Número"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"number"}
            required
            autoFocus
            fullWidth
          />
          <TextField
            name={"neighbourhood"}
            value={form.neighbourhood}
            label={"Bairro"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"neighbourhood"}
            required
            autoFocus
            fullWidth
          />
          <TextField
            name={"city"}
            value={form.city}
            label={"Cidade"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"city"}
            required
            autoFocus
            fullWidth
          />
          <TextField
            name={"state"}
            value={form.state}
            label={"Estado"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"state"}
            required
            autoFocus
            fullWidth
          />
          <TextField
            name={"complement"}
            value={form.complement}
            label={"Complemento"}
            onChange={onChange}
            variant={"outlined"}
            margin={"normal"}
            type={"complement"}
            autoFocus
            fullWidth
          />

        </FormContainer>
        <Button

          type={"submit"}
          variant={"contained"}
          color={"primary"}
          margin={"normal"}
          fullWidth
        >
          Salvar
        </Button>
      </FormContainer>
    </form>
  )

}
export default AddressPageForm