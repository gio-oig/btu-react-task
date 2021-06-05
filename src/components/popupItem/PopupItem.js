import { useContext } from 'react';
import { Context } from '../../context/context';

import './index.css';

const PopupItem = ({ item, selectedItem }) => {
  const { setSelectedPcParts } = useContext(Context);
  const handleSelectPart = () => {
    setSelectedPcParts((state) => {
      return { ...state, [item.type]: item };
    });
  };

  const handleRemovePart = () => {
    setSelectedPcParts((state) => {
      return { ...state, [item.type]: '' };
    });
  };

  // ეს უნდა გამოჩნდეს, რომელიმე ნაწილის არჩევის შემდეგ, ასარჩევი ნაწილის ადგილას
  // ბევრის ერთად გამოსაჩენი HTML ქვევით წერია
  // ორი return აქვს რა, ორ სხვადასხვა html-ს ვაბრუნებ ამ კომპონენტიდან
  // selectedItem-ს მიხედვით
  if (selectedItem) {
    return (
      <div class="row">
        <div class="col-sm-4 computer-part-left-column">
          <div
            class="computer-part-image-container"
            data-default-image="/images/computerParts/019-processor.svg">
            <img src={`https://cp-parts.herokuapp.com${item.image}`} width="70%" />
          </div>
        </div>

        <div class="col-sm-8 computer-part-right-column">
          <div class="computer-part-title-container">
            <h1 class="font-4">Intel Core i9 10900K Processor</h1>
          </div>
          <div class="computer-part-description-container font-4 invisible">
            პროცესორი – მიკროსქემა, რომელიც წარმოადგენს კომპიუტერის მთავარ
            კომპონენტს, მართავს მის მუშაობას და აწარმოებს ყველა სახის გამოთვლებს, ანუ
            ამუშავებს ინფორმაციას. კომპიუტერის სწრაფქმედება და წარმადობა დიდადაა
            დამოკიდებული პროცესორის ტაქტურ სიხშირესა და ბირთვების რაოდენობაზე.
          </div>

          <div class="computer-part-specifications-container visible">
            <div class="row">
              <div class="col-sm-9 part-specifications">
                <div class="part-specification">
                  <b class="font-4">სოკეტი </b>
                  <span> LGA 1200</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">სიხშირე </b>
                  <span> 3.7 Ghz</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">ბირთვები </b>
                  <span> 10</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">ტექნოლოგიური პროცესი </b>
                  <span> 45nm</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">მდგომარეობა </b>
                  <span class="font-4"> ახალი</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">საწყობის ტიპი </b>
                  <span class="font-4"> მარაგშია</span>
                </div>

                <div class="part-specification">
                  <b class="font-4">დარჩენილი ერთეულები </b>
                  <span> 1</span>
                </div>
              </div>
              <div class="col-sm-3 part-additional-data">
                <div class="part-current-price-container">
                  <span class="part-current-price">{item.price} lari</span>
                </div>
                <div class="part-old-price-container">
                  <span class="part-old-price invisible"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="computer-part-controls-container">
            <button onClick={handleRemovePart}>
              <i class="fas fa-retweet"></i>
              <span class="font-3">წაშლა</span>
            </button>
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
          <div className="part-to-select-description">
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
          <button className="part-choose-button font-3" onClick={handleSelectPart}>
            დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupItem;
