import './index.css';

const ItemInfo = ({ item }) => {
  console.log(item.type);

  const {
    type,
    model,
    socket,
    chipset,
    memoryType,
    maxMemory,
    slotNumber,
    formFactore,
    frequency,
    core,
    nanometers,
    condition,
    left,
  } = item;

  if (type === 'processor') {
    return (
      <div className="part-to-select-description">
        <div className="part-specification">
          <b className="font-4">სოკეტი </b>
          <span> {socket}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">სიხშირე </b>
          <span> {frequency} Ghz</span>
        </div>

        <div className="part-specification">
          <b className="font-4">ბირთვები </b>
          <span> {core}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">ტექნოლოგიური პროცესი </b>
          <span> {nanometers}nm</span>
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
          <span>{left}</span>
        </div>
      </div>
    );
  }

  if (type === 'motherboard') {
    return (
      <div className="part-to-select-description">
        <div className="part-specification">
          <b className="font-4">ბრენდი</b>
          <span> {model}</span>
        </div>
        <div className="part-specification">
          <b className="font-4">სოკეტი </b>
          <span> {socket}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">ჩიფსეტი </b>
          <span> {chipset}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">მეხსიერების ტიპი</b>
          <span> {memoryType}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">მაქსიმალური მეხსიერება</b>
          <span> {maxMemory}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">მეხსიერების სლოტები</b>
          <span> {slotNumber}</span>
        </div>

        <div className="part-specification">
          <b className="font-4">ფორმფაქტორი</b>
          <span> {formFactore}</span>
        </div>
      </div>
    );
  }

  return <div></div>;
};

export default ItemInfo;
