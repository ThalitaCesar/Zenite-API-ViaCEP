# Zenite

### Problem description

Imagine you were hired to develop part of a
landing page focused on selling internet plans. O
checkout system has already been developed, so you must
develop the Home and Offers page.
When accessing the site, the customer is faced with a message from
welcome and a form requesting your zip code to
proceed. You must use the ViaCep API to capture the
address data. When advancing, a screen with a
message containing informed address, available offers
for the customer and a fixed button in the lower right corner of the
screen with the message “Oops, I made a mistake in my zip code!”, which, when
clicked, it returns to the previous page.

For more information of the ViaCep API [click here](https://viacep.com.br/).

### Techs

* ReactJS
* Json Server
* react router
* Styled Components


First clone in repository

     git clone https://github.com/ThalitaCesar/Zenite.git

Install all dependencies


     npm install


If the json server is not installed it is necessary to install it to view the plans


     json-server -g json-server


Run the server (the port must be the same as the one informed in the CardProduct.jsx request url)

     json-server --watch --port 5006 db.json

run the project

     npm run dev


### Desktop Images
![zenite-homescreen](https://user-images.githubusercontent.com/83131771/195320891-bfc56bcd-f6ef-4bc9-9574-a23b8f0b6835.png)
![zenite-screen of plans](https://user-images.githubusercontent.com/83131771/195320896-36684a4b-b922-45e7-bfdb-50ed87c55430.png)


### Mobile Images

![zenite-mobile-homescreen](https://user-images.githubusercontent.com/83131771/195320941-0fccca2a-c4c6-46b3-824d-4c8a760176a6.png)
