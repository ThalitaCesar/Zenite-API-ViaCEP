
import {createContext, useContext, useState } from "react"


  export const GlobalContext = createContext(null);
  
  export const useStateContext = () => useContext(GlobalContext);
  
  export const GlobalState = ({ children }) => {

    const [viaCep, setViaCep] = useState([]);

    return (
      <GlobalContext.Provider value=
      {{viaCep, setViaCep}} children={children}/> )
  };

  export default GlobalState;