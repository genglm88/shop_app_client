import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="cardImg">
          <img
            className="mainImg"
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes.url
            }
            alt=""
          />
          <img
            className="secondImg"
            src={
              import.meta.env.VITE_REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes.url
            }
            alt=""
          />
          {item.attributes.isNew && <span>New Season</span>}
        </div>

        <h2 className="capitalize">{item.attributes.title} </h2>
        <div className="prices">
          <span>${item.oldPrice || item?.attributes.price + 10}</span>
          <span>${item.attributes.price}</span>
        </div>
      </div>
    </Link>
  );
};
