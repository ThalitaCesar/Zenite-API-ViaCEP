import { Container, Content, MenuButtons, MenuLinks,ButtonLogin, Title, ButtonGroup } from './styles';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
        <Content>
        <Link to="/" style={{textDecoration:"none", color: "var(--grey)"}}>
        <Title>
        Zênite
        </Title>
        </Link>
            <MenuLinks>
                <MenuButtons>
                    Serviços
                </MenuButtons>

                <MenuButtons>
                    Catálogo
                </MenuButtons>

                <MenuButtons>
                   Contato           
                </MenuButtons>

            </MenuLinks>
            <ButtonGroup>
            <ButtonLogin>
                Log in
            </ButtonLogin>
            <ButtonLogin>
                Sign up
            </ButtonLogin>
            </ButtonGroup>
        
        </Content>
    </Container>
     
  );
}

export default Header;