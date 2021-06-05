import { createContext, useEffect, useState } from 'react';

const Context = createContext();

const ContectProvider = ({ children }) => {
  const [selectedPcParts, setSelectedPcParts] = useState({
    processor: '',
    motherboard: '',
    ram: '',
  });

  useEffect(() => {
    console.log(selectedPcParts);
  }, [selectedPcParts]);

  const contextValues = {
    selectedPcParts,
    setSelectedPcParts,
  };
  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export { Context, ContectProvider };
