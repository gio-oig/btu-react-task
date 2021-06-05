import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const ContectProvider = ({ children }) => {
  const [price, setPrice] = useState(0);
  const [selectedPcParts, setSelectedPcParts] = useState({
    processor: '',
    motherboard: '',
    ram: '',
  });

  const contextValues = {
    price,
    setPrice,
    selectedPcParts,
    setSelectedPcParts,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export { Context, ContectProvider };
