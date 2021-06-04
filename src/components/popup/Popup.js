import Button from '../shared/Buttton';

import './Popup.css';

const Popup = ({ title, parts, close }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h1>{title}</h1>
        <Button onClick={close}>Close</Button>
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
