import './index.css';
const PopupItem = ({ item }) => {
  return (
    <div class="row parts-item">
      <div class="col-sm-2">
        <img
          src={`https://cp-parts.herokuapp.com${item.image}`}
          class="part-image"
        />
      </div>
      <div class="col-sm-7">
        <div class="part-to-select-container">
          <h1 class="part-to-select-title font-4">{item.name}</h1>
          <div class="part-to-select-description">
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
        </div>
      </div>

      <div class="col-sm-3">
        <div class="part-current-price-container">
          <span class="part-current-price">₾ 2150 </span>
        </div>

        <div
          class="part-choose-button-container"
          data-part-id="271"
          data-part-select-uri="/configurator/selectProcessor">
          <button class="part-choose-button font-3"> დამატება </button>
        </div>
      </div>
    </div>
  );
};

export default PopupItem;
