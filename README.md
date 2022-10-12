# Zenite

Projeto do desafio da Omnix

### Descrição do Problema

Imagine que você foi contratado para desenvolver parte de uma
landing page com foco na venda de planos de internet. O
sistema de checkout já foi desenvolvido, então você deve
desenvolver a página Home e de Ofertas.
Ao acessar o site, o cliente se depara com uma mensagem de
boas vindas e um formulário requisitando seu cep para
prosseguir. Você deve utilizar a API da ViaCep para captar os
dados do endereço. Ao avançar, é mostrada uma tela com uma
mensagem contendo endereço informado, as ofertas dispovíveis
para o cliente e um botão fixo no canto inferior direito da
tela com a mensagem “Ops, errei meu cep!”, que, ao ser
clicado, volta para a página anterior.

Para informação da api ViaCep [clique aqui](https://viacep.com.br/).

### Techs 

* ReactJS
* Json Server 
* React Router 
* Styled Components


Primeiro clone no repositório

    git clone https://github.com/ThalitaCesar/Zenite.git

Instalar todas as dependências 


    npm install


Se o json server não estiver instalado é necessário instalar para visualizar os planos


    json-server -g json-server


Rodar o servidor (a porta precisa ser a mesma informada na url da requisição do CardProduct.jsx)

    json-server --watch --port 5006 db.json

Rodar o projeto

    npm run dev


### Imagens Desktop
![zenite-telainicial](https://user-images.githubusercontent.com/83131771/195320891-bfc56bcd-f6ef-4bc9-9574-a23b8f0b6835.png)
![zenite-tela de planos](https://user-images.githubusercontent.com/83131771/195320896-36684a4b-b922-45e7-bfdb-50ed87c55430.png)


### Imagens Mobile 

![zenite-mobile-telainicial](https://user-images.githubusercontent.com/83131771/195320941-0fccca2a-c4c6-46b3-824d-4c8a760176a6.png)



