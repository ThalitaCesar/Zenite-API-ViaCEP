import { useEffect, useState } from "react";
import { Button, Card, Content, Flex, Img, Price, Title } from "./styles";
import axios from 'axios';


export function CardComponent() {

  const [data, setData] = useState([]);

    async function getPlans() {
      try {
        const { data, status } = await axios.get(
          ' http://localhost:5006/plans',
          {
            headers: {
              Accept: 'application/json',
            },
          },
        );
    
        console.log(JSON.stringify(data));
        setData(data)
        console.log('response status is: ', status); 
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }
    
      useEffect (()=> {
        getPlans()
      }, [])

 

    return (
      <>

<Flex>
    {data && data.length>0 && data.map((item) => {
          return (
            <Card>
            <Img src={item.img}/>
            <Content>
            <Title>{item.title}</Title>
            <Price> 
              <small className="small">R$</small>
              {item.price}
              <small className="small">/mês</small>
              </Price>
            <Button>Ver Detalhes</Button>
            </Content>
            </Card>
          );
        })}
               </Flex>
      </>
       
    );
  }
  