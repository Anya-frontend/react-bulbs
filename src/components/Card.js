function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={140} height={120} src="/img/bulbs/1.jpg" alt="bulbs" />
      <h5>Halco Dimmable 8W 2200K Vintage ST19 Filament LED Bulb</h5>
      <div className="cardBottom">
        <div className="cardPrice">
          <span>Price</span>
          <b>$25</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="./img/plus.svg" alt="Add Item" />
        </button>
      </div>
    </div>
  );
}

export default Card;
