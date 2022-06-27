import React, { useState } from 'react';
import {  Modal, Button, Card, Row} from 'react-bootstrap';
// import CheckoutButton  from './CheckoutButton';
// import Checkout from './Checkout';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'


function Cart({user, cart, totalPrice, setTotalPrice, setCart, setCartTotal, setCartItems, cartItems, cartTotalPrice, handleLogout}) {
  let navigate = useNavigate()
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
    .then(item => console.log(item))
    setCartItems([])
    setCartTotal(' ')
  }

  function handleDeleteItem(id) {
    fetch(`/cart_items/${id}`, {
      method: 'DELETE',
      header: {
        "Content-Type": "application/json"
      }
    })
      .then(() => onItemDelete(id))
  }

  function onItemDelete(id) {
    const updatedItems = cartItems.filter(item => (
      item.id !== id
    ))
    setCartItems(updatedItems)
  }



  return (
    <>
     <div className='App-header' align='center'>
          <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo" /></Link>
      </div>
      <div className='App-header' align='center'>
          <Link to="/"><button className='nav-button'>Home</button></Link>
          {}
          <button className='nav-button' onClick={() => navigate('/cart')} >Cart</button>
          <Link to="/Profile"><button className='nav-button'></button></Link>
          <Link to="/items"><button className='nav-button'>Items</button></Link>
          <Link to="/Login"><button className='nav-button'>Login</button></Link>
          <button className='nav-button' onClick={handleLogout} >Logout</button>
                           
      </div>
  
      {/* <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin-left": "930px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Show Cart`}</Button>
      <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin": "1000px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Cart`}</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title style={{"textDecoration":"none", "margin-left": "1000px", color:"#45A29E"}}>Your Cart</Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
        <Row xs={1} md={4} className="g-4" style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
          
        {cartItems.map((item, idx) => (
               <div className='cart-card' key={idx}>
                

              <Card.Img style={{ width: '20rem' , 'margin-right':'110px',display: 'flex', flexDirection: 'row' }} variant="top" src={item.image_url} key={idx}/>
           
             




                
                <Card.Title>{item.title}</Card.Title>
                <Card.Text >
                  Name: {item.title}
                  <br/>
                  Description: {item.description}
                  <br/>
                  ${item.price}
                  <br/>
                  Quantity: 1
                  <button className='cart-card-button' align='center' style={{ width: 'auto' }} onClick={() => handleDeleteItem(item.id)} >Remove from Cart</button>
                  </Card.Text>
                  
                
          
              
                  </div>
      
            
          ))}  </Row>
        </Modal.Body>

        <Modal.Footer>
          <div className="subtotal-price">Total: ${cartTotalPrice}.00</div>
          <div align="center">
              <p> Total: ${cartTotalPrice}.00 </p>
              <button className="cart-card-button" align="center" onClick={handleCheckout} >Checkout</button>
            </div>
          <br></br>
          {/* <Button variant="secondary" onClick={handleClose}>Close</Button> */}
          {/* <CheckoutButton price={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart} onClick={handleCheckout} >Checkout</CheckoutButton> */}
        </Modal.Footer>
      {/* </Modal> */}
    </>
  )
}

export default Cart