import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className="favorite" onClick={onFavorite}>
        <img src="/img/unliked.svg" alt="Unliked" />
      </div>
      <img width={140} height={120} src={imageUrl} alt="bulbs" />
      <h5>{title}</h5>
      <div className="stycardBottom">
        <div className="cardPrice">
          <span>Price</span>
          <b>${price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "./img/btn-plus.svg"}
          alt="Add Item"
        />
      </div>
    </div>
  );
}

export default Card;
