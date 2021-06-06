import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../../context/context';
import ItemInfo from '../itemInfo';
import Button from '../shared/Buttton';

import './index.css';

const PopupItem = ({ item, selectedItem, closePopup, openPopup }) => {
  const { setPrice, setSelectedPcParts } = useContext(Context);
  // console.log('popupItem');
  // console.log(openPopup);

  const handleSelectPart = () => {
    setPrice((state) => state + item.price);
    setSelectedPcParts((state) => {
      return { ...state, [item.type]: item };
    });
    closePopup();
  };

  const handleRemovePart = () => {
    setPrice((state) => state - item.price);
    setSelectedPcParts((state) => {
      return { ...state, [item.type]: '' };
    });
  };

  // const handleReselectPart = () => {
  //   openPopup();
  // };

  // ეს უნდა გამოჩნდეს, რომელიმე ნაწილის არჩევის შემდეგ, ასარჩევი ნაწილის ადგილას
  // ბევრის ერთად გამოსაჩენი HTML ქვევით წერია
  // ორი return აქვს რა, ორ სხვადასხვა html-ს ვაბრუნებ ამ კომპონენტიდან
  // selectedItem-ს მიხედვით
  if (selectedItem) {
    return (
      <div className="row my-5">
        <div className="col-sm-4 computer-part-left-column">
          <div
            className="computer-part-image-container"
            data-default-image="/images/computerParts/019-processor.svg">
            <img src={`https://cp-parts.herokuapp.com${item.image}`} width="70%" />
          </div>
        </div>

        <div className="col-sm-8 computer-part-right-column">
          <div className="computer-part-title-container">
            <h1 className="font-4">Intel Core i9 10900K Processor</h1>
          </div>

          <div className="computer-part-specifications-container visible">
            <div className="row">
              <div className="col-sm-9 part-specifications">
                <div className="part-specification">
                  <b className="font-4">სოკეტი </b>
                  <span> LGA 1200</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">სიხშირე </b>
                  <span> 3.7 Ghz</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">ბირთვები </b>
                  <span> 10</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">ტექნოლოგიური პროცესი </b>
                  <span> 45nm</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">მდგომარეობა </b>
                  <span className="font-4"> ახალი</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">საწყობის ტიპი </b>
                  <span className="font-4"> მარაგშია</span>
                </div>

                <div className="part-specification">
                  <b className="font-4">დარჩენილი ერთეულები </b>
                  <span> 1</span>
                </div>
              </div>
              <div className="col-sm-3 part-additional-data">
                <div className="part-current-price-container">
                  <span className="part-current-price">{item.price} lari</span>
                </div>
                <div className="part-old-price-container">
                  <span className="part-old-price invisible"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="computer-part-controls-container">
            {/* <button onClick={handleReselectPart}>
              <i className="fas fa-retweet"></i>
              <span className="font-3">გადარჩევა</span>
            </button> */}
            <Button onClick={handleRemovePart}>
              <i className="fas fa-retweet"></i>
              <span className="font-3">წაშლა</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row parts-item">
      <div className="col-sm-2">
        <img
          src={`https://cp-parts.herokuapp.com${item.image}`}
          className="part-image"
        />
      </div>
      <div className="col-sm-7">
        <div className="part-to-select-container">
          <h1 className="part-to-select-title font-4">{item.name}</h1>
          <ItemInfo item={item} />
        </div>
      </div>

      <div className="col-sm-3">
        <div className="part-current-price-container">
          <span className="part-current-price">{item.price} lari</span>
        </div>

        <div
          className="part-choose-button-container"
          data-part-id="271"
          data-part-select-uri="/configurator/selectProcessor">
          <Button onClick={handleSelectPart}>დამატება</Button>
        </div>
      </div>
    </div>
  );
};

PopupItem.propTypes = {
  item: PropTypes.object,
  selectedItem: PropTypes.bool,
  openPopup: PropTypes.func,
  closePopup: PropTypes.func,
};

export default PopupItem;
