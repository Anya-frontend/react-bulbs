import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className="favorite">
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={140} height={120} src={props.imageUrl} alt="bulbs" />
      <h5>{props.title}</h5>
      <div className="stycardBottom">
        <div className="cardPrice">
          <span>Price</span>
          <b>${props.price}</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img width={11} height={11} src="./img/plus.svg" alt="Add Item" />
        </button>
      </div>
    </div>
  );
}

export default Card;
