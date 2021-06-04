import { Protected } from '../../components/hoc';
import PcPart from '../../components/pcPart';
import Popup from '../../components/popup';
import Button from '../../components/shared/Buttton';

import pcParts from '../../pcParts';

import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div class="row">
        <div class="col-8">
          {Object.keys(pcParts).map((key) => (
            <PcPart collectionName={key} pcParts={pcParts}></PcPart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protected(Home);
