import Header from '../../components/Header'
import { ColumnOne, ColumnTwo, Container,DivSubmit,FlexContent, ImgHome, InputCep, Submit} from './styles';
import Homepage from '../../assets/Homepage.svg';
import { useHistory } from "react-router-dom";
import { useContext, useState } from 'react';
import api from '../../services/api';
import { GlobalContext } from '../../context/GlobalState';


export function Home() {

    const [userCep, setUserCep]= useState('')
    const {viaCep, setViaCep} = useContext(GlobalContext)

    console.log("viaCep", viaCep)

    const history = useHistory()


    const handleChange = (event) => {
        const numberCep = event.target.value.replace(/\D/g, '');    
        setUserCep(numberCep);
      }

      async function getCEP(){
        if(userCep == ''){
          alert('Digite um cep valido');
          setUserCep('');
          return; 
        }
        try{
          const response = await api.get(`/${userCep}/json`);
          console.log(response.data);
          setViaCep(response.data);
          history.push('/catalog')
        }catch(error){
          console.log('ERROR: ' + error);
          alert('Digite um cep valido');
          setUserCep('');
          return; 
        }
    
      }

      
    return (
       <>


      <Container>
        <Header/>
        <FlexContent>
            <ColumnOne>
            <p className='title'>
                Zênite, os melhores planos para seu celular
            </p>
            <p className='description'>
                Digite seu cep embaixo para ter acesso aos planos disponíveis para sua cidade.
            </p>

            <DivSubmit>
            <InputCep placeholder='ex: 50820351'
            value={userCep}
            onChange={handleChange}/>
                <Submit type='submit' onClick={getCEP}>
                    Enviar
                </Submit>
            </DivSubmit>
            </ColumnOne>

            <ColumnTwo>
            <ImgHome src={ Homepage ?? 'https://www.mintmobile.com/wp-content/themes/mintmobile/v3/assets/images/magnifyingfox.svg'}/>
            </ColumnTwo>

        </FlexContent>
      </Container>
</>
    );
  }
