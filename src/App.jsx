
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import GlobalState from './context/GlobalState';
import Routes from './routers'
import { GlobalStyle } from './styles/global'


function App() {


  return (
    <>

     <BrowserRouter>
     <GlobalState>
            <Routes/>
            <GlobalStyle />
      </GlobalState>
  </BrowserRouter>

    </>
  )
}

export default App
