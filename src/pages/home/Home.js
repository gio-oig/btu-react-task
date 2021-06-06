import { useContext, useEffect } from 'react';
import { Protected } from '../../components/hoc';
import { Context } from '../../context/context';
import PcPart from '../../components/pcPart';
import Button from '../../components/shared/Buttton';

import pcParts from '../../pcParts';

import './Home.css';
import useLocalStorage from '../../hook/useLocalStorage';

const Home = () => {
  const {
    price,
    setPrice,
    selectedPcParts,
    setSelectedPcParts,
    pcPartInitialState,
  } = useContext(Context);
  const [pcPartsLocalStore, setPcPartsLocalStore] = useLocalStorage('pcParts', []);

  const saveSelectedParts = () => {
    setPcPartsLocalStore((state) => {
      state.push(selectedPcParts);
      return state;
    });
    setPrice(0);
    setSelectedPcParts(pcPartInitialState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {Object.keys(pcParts).map((key) => (
            <PcPart collectionName={key} pcPart={pcParts[key]} key={key}></PcPart>
          ))}
        </div>
        <div className="col-4" style={{ position: 'relative' }}>
          <div className="price-container">
            სრული ფასი: {price} ლარი
            <Button onClick={saveSelectedParts}>save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protected(Home);
