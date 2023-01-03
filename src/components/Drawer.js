function Drawer({ onClose, items = [] }) {
  return (
    <div
      // style={{ display: "none" }}
      className="overlay"
    >
      <div className="drawer">
        <h2>
          Cart
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img
                className="cartImage"
                // src="/img/bulbs/1.jpg"
                src={obj.imageUrl}
                alt="Bulb"
              />
              <div className="cartText">
                <p>{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove Button"
              />
            </div>
          ))}

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
    </div>
  );
}

export default Drawer;
