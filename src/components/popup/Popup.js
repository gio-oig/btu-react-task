import Button from '../shared/Buttton';

import './Popup.css';

const Popup = ({ title, parts, close }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="d-flex justify-content-between">
          <h1>{title}</h1>
          <Button onClick={close}>Close</Button>
        </div>
        <div className="row">
          {parts.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
