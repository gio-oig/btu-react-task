import { useState } from 'react';
import Popup from '../popup';
import Button from '../shared/Buttton';
import './PcPart.css';
const PcPart = ({ collectionName, pcParts }) => {
  const [popupState, setPopupState] = useState(false);
  return (
    <div className="row d-flex">
      <div className="col-4">
        <div className="image-container"></div>
      </div>
      <div className="col-8">
        <h1>{collectionName}</h1>
        <p>{pcParts[collectionName].description}</p>
        <Button onClick={() => setPopupState(true)}>არჩევა</Button>
        {popupState && (
          <Popup
            title={collectionName}
            parts={pcParts[collectionName].items}
            close={() => setPopupState(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PcPart;
