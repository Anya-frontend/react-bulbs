function Header(props) {
  return (
    <header>
      <div className="leftHeader">
        <img width={40} height={60} src="./img/bulb.svg" alt="Logo" />
        <div className="headerInfo">
          <h3>React Bulbs</h3>
          <p>The best bulbs store</p>
        </div>
      </div>
      <ul>
        <li onClick={props.onClickCart}>
          <img width={20} height={20} src="/img/cart.svg" alt="User" />
          <span>$250</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Cart" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
