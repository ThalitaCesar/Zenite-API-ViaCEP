
import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { CardComponent } from '../../components/CardProduct';
import {Header} from '../../components/Header'
import { GlobalContext } from '../../context/GlobalState';
import {Address, ButtonBack, Container} from './styles';



export function Catalog() {
  const {viaCep, setViaCep} = useContext(GlobalContext)

    return (

        <Container>
        <Header/>

        <Address>
        {`Planos para: Rua ${viaCep.logradouro}, ${ viaCep.bairro}, 
        ${viaCep.localidade}, ${viaCep.uf}.`}
        </Address>

        <CardComponent/>

        <ButtonBack>
        <Link to="/" style={{textDecoration:"none", color: "var(--grey)"}}>
        Ops, errei meu cep!
        </Link>
        </ButtonBack>
      </Container>

       
    );
  }
  