import React, { useState } from 'react';
import {  Modal, Button, Card } from 'react-bootstrap';
import CheckoutButton  from './CheckoutButton';

function Cart({item, cart, totalPrice, setTotalPrice, setCart, setCartTotal}) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  function handleCheckout() {
    navigate(`/checkout`)
    fetch(`/checkout`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({checked_out: false})
    })
    .then(res => res.json())
    .then(prod => console.log(prod))
    setCartProds([])
    setCartTotal(' ')
  }















  

  return (
    <>
      <Button variant="link" onClick={handleShow} style={{"text-decoration":"none", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Cart`}</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {cart.length > 0 && cart.map((item, index) => {
            return (
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.image}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  Name: {item.name}
                  <br/>
                  Description: {item.description}
                  <br/>
                  ${item.price}
                  <br/>
                  Quantity: 1
                  
                </Card.Text>
                {/* <Button variant="primary">Remove From Cart</Button> */}
              </Card.Body>
            </Card> 
          
            )
          })}
        </Modal.Body>

        <Modal.Footer>
          <div className="subtotal-price">Total: ${totalPrice}.00</div>
          <br></br>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <CheckoutButton price={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart}>Checkout</CheckoutButton>/>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart