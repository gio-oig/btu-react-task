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
            <div>
              <img src={`https://cp-parts.herokuapp.com${item.image}`} />
              <div key={item.name}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
