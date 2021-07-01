
import React from 'react'
import Footer from '../../components/Footer/Footer'
import CreateIcon from '@material-ui/icons/Create';
import ShoppingCarticon from '@material-ui/icons/ShoppingCart' ;
import HomeIcon from '@material-ui/icons/Home';
import PersonOutline  from '@material-ui/icons/PersonOutline';
import { Container, PersonalInformation, OrderHistory} from './styled'

export default function ProfilePage() {
    const user = {
          "id": "De8UACSFgFySnKdXm5hI",
          "name": "Astrodev",
          "email": "astrodev@future4.com",
          "cpf": "111.111.111-11",
          "hasAddress": true,
          "address": "R. Afonso Braz, 177 - Vila N. Conceição"
      }
    
    return (
        <>
        <div>
            <Footer />
        </div>
        <Container>
            <p>Meu perfil</p>
            <PersonalInformation>
                <div>
                    <p>{user.name} X</p>
                    <p>{user.email} X</p>
                    <p>{user.cpf} X</p>
                </div>
                <button><CreateIcon/></button>
            </PersonalInformation>

            <PersonalInformation className={"address"}>
                <div >
                    <p>Endereço cadastrado</p>
                    <p>{user.address} X</p>
                </div>

                <button><CreateIcon/></button>
            </PersonalInformation>

            <OrderHistory>
                Histórico de pedidos
            </OrderHistory>

        </Container>
    </>
    )
}