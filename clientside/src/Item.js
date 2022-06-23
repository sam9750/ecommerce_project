import React from "react";
// import { NavLink } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

function Item({ item, cart, setCart, totalPrice, setTotalPrice}) {

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    setCart([...cart, item]);
    console.log("THE CART", cart)
    setTotalPrice(totalPrice + item.price) }

  return (
<Card>
        <Card.Img variant="top" src={item.image} style={{height:"396px", "object-fit":"contain"}}/>
        <Card.Body style={{height:"250px"}}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Description: {item.description}
            <br/>
            ${item.price}
            <br/>
            {item.quantity ? "In Stock" : null}
          </Card.Text>
          <Button variant="primary" style={{width:"94%", position:"absolute", bottom:"10px", left:"3%"}} onClick={(e) => handleAddToCart(e, item)}>Add To Cart</Button>
        </Card.Body>
    </Card>
  );
  
}
export default Item;
