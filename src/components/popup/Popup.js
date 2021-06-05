import PopupItem from '../popupItem';
import Button from '../shared/Buttton';

import './index.css';

const Popup = ({ title, parts, close }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="d-flex justify-content-between">
          <h1>{title}</h1>
          <Button onClick={close}>Close</Button>
        </div>
        <div className="items-container">
          {parts.map((item) => (
            <PopupItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
