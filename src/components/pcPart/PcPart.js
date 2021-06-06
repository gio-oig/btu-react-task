import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Popup from '../popup';
import Button from '../shared/Buttton';
import { Context } from '../../context/context';

import './PcPart.css';
import PopupItem from '../popupItem';

const PcPart = ({ collectionName, pcPart }) => {
  const [popupState, setPopupState] = useState(false);
  // console.log(pcPart);
  const { selectedPcParts, setSelectedPcParts } = useContext(Context);
  // console.log(selectedPcParts[pcPart.type]);
  const isNotSelected = !selectedPcParts[pcPart.type];

  const openItemPopup = () => {
    setPopupState(true);
  };

  const closeItemPopup = () => {
    setPopupState(false);
  };

  return (
    <>
      {isNotSelected ? (
        <div className="row d-flex">
          <div className="col-4 d-flex custify-content-center align-items-center">
            <div className="image-container align-items-center">
              <img src={pcPart.svg} />
            </div>
          </div>
          <div className="col-8">
            <h1>{collectionName}</h1>
            <p>{pcPart.description}</p>
            <Button onClick={openItemPopup}>არჩევა</Button>
            {popupState && (
              <Popup
                title={collectionName}
                parts={pcPart.items}
                close={closeItemPopup}
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

PcPart.propTypes = {
  collectionName: PropTypes.string,
  pcPart: PropTypes.object,
};

export default PcPart;
