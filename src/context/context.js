import { createContext, useEffect, useState } from 'react';

const pcPartInitialState = {
  processor: '',
  motherboard: '',
  ram: '',
};

const Context = createContext();

const ContectProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [selectedPcParts, setSelectedPcParts] = useState(pcPartInitialState);

  const contextValues = {
    price,
    setPrice,
    selectedPcParts,
    setSelectedPcParts,
    pcPartInitialState,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export { Context, ContectProvider };
