import React from "react";
import { NavLink } from "react-router-dom";

function Item({ item }) {

  return (
    <div className="cards__item">
      <div className="cards">
        <img src={Item.Item_url} alt={Item.name} className="image" />
        <div className="card__content">
          <div className="card-title">{Item.name}</div>
          <div className="card__detail">
            <p className="Item-address">{Item.address}</p>
            <p className="Item-pet">Pet: {Item.pet}</p>
            <NavLink exact to={`/Items/${Item.id}`}><button >View!</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
