function Drawer() {
  return (
    <div
      // style={{ display: "none" }}
      className="overlay"
    >
      <div className="drawer">
        <h2>
          Cart
          <img
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Remove Button"
          />
        </h2>

        <div className="items">
          <div className="cartItem">
            <img className="cartImage" src="/img/bulbs/1.jpg" alt="Sneakers" />
            <div className="cartText">
              <p>Halco Dimmable 8W 2200K Vintage ST19 Filament LED Bulb</p>
              <b>$25</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove Button"
            />
          </div>

          <div className="cartItem">
            <img className="cartImage" src="/img/bulbs/1.jpg" alt="Sneakers" />
            <div className="cartText">
              <p>Halco Dimmable 8W 2200K Vintage ST19 Filament LED Bulb</p>
              <b>$25</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="Remove Button"
            />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>$50</b>
            </li>
            <li>
              <span>Tax 7.8%:</span>
              <div></div>
              <b>$3.9</b>
            </li>
          </ul>

          <button className="greenButton">
            Place order <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
