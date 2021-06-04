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
        <p>
          პროცესორი – მიკროსქემა, რომელიც წარმოადგენს კომპიუტერის მთავარ კომპონენტს,
          მართავს მის მუშაობას და აწარმოებს ყველა სახის გამოთვლებს, ანუ ამუშავებს
          ინფორმაციას. კომპიუტერის სწრაფქმედება და წარმადობა დიდადაა დამოკიდებული
          პროცესორის ტაქტურ სიხშირესა და ბირთვების რაოდენობაზე.
        </p>
        <Button onClick={() => setPopupState(true)}>არჩევა</Button>
        {popupState && (
          <Popup
            title={collectionName}
            parts={pcParts[collectionName]}
            close={() => setPopupState(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PcPart;
