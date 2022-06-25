import React from "react";
// import { NavLink } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';

function Item({ user, item, cart, setCart, totalPrice, setTotalPrice, setCartItems}) {

  const handleAddToCart = (e, item) => {
    e.preventDefault();
    setCart([...cart, item]);
    console.log("THE CART", cart)
    setTotalPrice(totalPrice + item.price) }
      if (user) {
          fetch("/cartorder", {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(item),
          })
              .then(resp => resp.json())
              .then(cart => {
                  setCartItems(cart)
                  // console.log(cart)
                  // console.log(item)
                  console.log(cart)
                  setAddedToCart(true)
                  setDisable(true)
              })
      }
      else {
          return "Please login to add to cart."
      }
  



  return (
<Card>
        <Card.Img variant="top" src={item.image_url} style={{height:"396px", "object-fit":"contain"}}/>
        <Card.Body style={{height:"250px"}}>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Description: {item.description}
            <br/>
            ${item.price}
            <br/>
            {item.quantity ? "In Stock" : null}
          </Card.Text>
          <Button> {addedToCart ?
      <button disabled={disable} className={'form-button-disabled'} >Added to Cart</button>
      :
      <button onClick={handleAddToCart} className={'form-button'} >Add to Cart</button> }</Button>
        </Card.Body>
    </Card>
    
  );
  
}
export default Item;
