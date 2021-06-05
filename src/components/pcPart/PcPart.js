import { useContext, useState } from 'react';
import Popup from '../popup';
import Button from '../shared/Buttton';
import ram from '../../assets/ram.svg';
import { Context } from '../../context/context';

import './PcPart.css';
import PopupItem from '../popupItem';

const PcPart = ({ collectionName, pcPart }) => {
  const [popupState, setPopupState] = useState(false);
  console.log(pcPart);
  const { selectedPcParts, setSelectedPcParts } = useContext(Context);
  console.log(selectedPcParts[pcPart.type]);
  return (
    <>
      {!selectedPcParts[pcPart.type] ? (
        <div className="row d-flex">
          <div className="col-4 d-flex custify-content-center align-items-center">
            <div className="image-container align-items-center">
              <img src={ram} />
            </div>
          </div>
          <div className="col-8">
            <h1>{collectionName}</h1>
            <p>{pcPart.description}</p>
            <Button onClick={() => setPopupState(true)}>არჩევა</Button>
            {popupState && (
              <Popup
                title={collectionName}
                parts={pcPart.items}
                close={() => setPopupState(false)}
              />
            )}
          </div>
        </div>
      ) : (
        <PopupItem item={selectedPcParts[pcPart.type]} selectedItem={true} />
      )}
    </>
  );
};

export default PcPart;
