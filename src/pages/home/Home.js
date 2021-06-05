import { useContext } from 'react';
import { Protected } from '../../components/hoc';
import { Context } from '../../context/context';
import PcPart from '../../components/pcPart';
import Popup from '../../components/popup';
import Button from '../../components/shared/Buttton';

import pcParts from '../../pcParts';

import './Home.css';

const Home = () => {
  const { price } = useContext(Context);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {Object.keys(pcParts).map((key) => (
            <PcPart collectionName={key} pcPart={pcParts[key]} key={key}></PcPart>
          ))}
        </div>
        <div className="col-4" style={{ position: 'relative' }}>
          <div className="price-container">სრული ფასი: {price} ლარი</div>
        </div>
      </div>
    </div>
  );
};

export default Protected(Home);
