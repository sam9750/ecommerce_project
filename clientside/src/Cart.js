// import React, { useState, useEffect } from 'react';
// import {  Modal, Button, Card, Row} from 'react-bootstrap';
// // import CheckoutButton  from './CheckoutButton';
// // import Checkout from './Checkout';
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'


// function Cart({handleItems, user, cart, totalPrice, setTotalPrice, setCart, setCartTotal, setCartItems, cartItems, cartTotalPrice, handleLogout, yourCartItems, setYourCartItems}) {
//   let navigate = useNavigate()
//   // const [showModal, setShowModal] = useState(false);
//   // const handleClose = () => setShowModal(false);
//   // const handleShow = () => setShowModal(true);
 

// // console.log(cartItems, 'vs', yourCartItems)



// // useEffect(() => {
// //   fetch('/itemss')
// //     .then((res) => {
// //       if (res.ok) {
// //         res.json().then(cartItems => setCartItems(cartItems))
// //       }
// //     })
// // }, [ ])

//   function handleCheckout() {
//     navigate(`/checkout`)
//     fetch(`/checkout`, {
//       method: 'PATCH',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify({checked_out: false})
//     })
//     .then(res => res.json())
//     .then(item => console.log(item))
//     setCartItems([])
//     setCartTotal(' ')
//   }

//   function handleDeleteItem(id) {

//     fetch(`/cart_items/${id}`, {
//       method: 'DELETE',
     
//     })
//      .then(() => onItemDelete(id))
//   }

//   function onItemDelete(id) {
//     const updatedItems = cartItems.filter(item => (
//       item.id !== id
//     ))
//     setCartItems(updatedItems)
//   }

//   //filter over all cartitems we're mapping over and find out if the user has each item in their cart. If they do, include it in the new state. Then map over that new state
// //   const filteredItems = cartItems.filter(cartItem => {
// //     console.log(cartItem)
// //     return cartItem.item.id === user.cart.cart_item.id
// //   })
// //  setYourCartItems(filteredItems)


// // console.log(cartItems, 'cartItems')
// //  if (!user) {
// //   <h1> Loading..</h1>
// //  }
// //  console.log(user && user.cart ? user.cart.cart_items : "hello" ) 


//   return (
//     <>
//      <div className='App-header' align='center'>
//           <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo" /></Link>
//       </div>
//       <div className='App-header' align='center'>
//           <Link to="/"><button className='nav-button'>Home</button></Link>
//           {}
//           <button className='nav-button' onClick={() => navigate('/cart')} >Cart</button>
//           <Link to="/Profile"><button className='nav-button'>Profile</button></Link>
//           <Link to="/items"><button className='nav-button'>Items</button></Link>
//           <Link to="/Login"><button className='nav-button'>Login</button></Link>
//           <button className='nav-button' onClick={handleLogout} >Logout</button>
                           
//       </div>
  
//       {/* <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin-left": "930px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Show Cart`}</Button>
//       <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin": "1000px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Cart`}</Button>
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton >
//           <Modal.Title style={{"textDecoration":"none", "margin-left": "1000px", color:"#45A29E"}}>Your Cart</Modal.Title>
//         </Modal.Header> */}

//         {/* <Modal.Body>
//         <Row xs={1} md={4} className="g-4" style={{flex: 1, display: 'flex', flexDirection: 'row'}}> */}
          
//         {/* { cartItems && cartItems.length > 0 ? 
//         cartItems.map((item, idx) => ( */}
//           {/* console.log(cartitem, 'cartitem') */}
          
//           // {/* { user && user.cart && user.cart.cart_items && user.cart.cart_items.length > 0 ? user.cart.cart_items.map((cartitem, idx) => {
//           //   console.log(cartitem, 'cartitem') */}

            

// {/* 
//             // return user.cart.cart_itemm ? ( 
//           }  return(
//                             // return cartitem.item ? ( 
          
//                <div className='cart-card' key={idx}>
                

//               {cartitem.image_url ? <Card.Img style={{ width: '20rem' , 'margin-right':'110px',display: 'flex', flexDirection: 'row' }} variant="top" src={cartitem.item.image_url} key={idx}/>: null} */}
           
             




//     <div>
//       {user ?
//         <div>
//           <div>
//             <h2 align="center" >Cart</h2>
//             {cartItems.map((item, idx) => (
//               // <div className='cards__item'>
//               <div className='cart-card' key={idx} >
//                 <img src={item.image_url} alt={item.title} className='cart-image' ></img>
//                 <p>{item.title}</p>
//                 <p>${item.price}</p>
//                 <button className='cart-card-button' align='center' style={{ width: 'auto' }} onClick={() => handleDeleteItem(item.id)} >Remove From Cart</button>
//                 {/* <p>Total: {parseInt(item.price, 10)}.sum}</p> */}
//               </div>
//               // </div>
//             ))}
//             <div align="center">
//               <p> Total: ${cartTotalPrice}.00 </p>
//               <button className="cart-card-button" align="center" onClick={handleCheckout} >Checkout</button>
//             </div>
//           </div>
//         </div>
//         :
//         <div align="center">
//           <h2 className="no-cart-text">Please login to view cart.</h2>
//           <button className='form-button' onClick={() => navigate('/login')}>Login</button>
//         </div>
//       }
      
//     </div>
//     </>
    
//   )}
// export default Cart

import React, {useState, useEffect} from 'react';
import {Modal, Button, Card, Row} from 'react-bootstrap';
// import CheckoutButton  from './CheckoutButton';
// import Checkout from './Checkout';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'


function Cart({handleItems, user, cart, totalPrice, setTotalPrice, setCart, setCartTotal, setCartItems, cartItems, cartTotalPrice, handleLogout, yourCartItems, setYourCartItems}) {
    let navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false);
    // const handleClose = () => setShowModal(false);
    // const handleShow = () => setShowModal(true);

    console.log('cart items', cartItems)

// console.log(cartItems, 'vs', yourCartItems)


// useEffect(() => {
//   fetch('/cart_items')
//     .then((res) => {
//       if (res.ok) {
//         res.json().then(cartItems => setCartItems(cartItems))
//       }
//     })
// }, [ ])

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

        })
            .then(() => onItemDelete(id))
    }

    function onItemDelete(id) {
        const updatedItems = cartItems.filter(item => (
            item.id !== id
        ))
        setCartItems(updatedItems)
    }

    //filter over all cartitems we're mapping over and find out if the user has each item in their cart. If they do, include it in the new state. Then map over that new state
//   const filteredItems = cartItems.filter(cartItem => {
//     console.log(cartItem)
//     return cartItem.item.id === user.cart.cart_item.id
//   })
//  setYourCartItems(filteredItems)


// console.log(cartItems, 'cartItems')
//  if (!user) {
//   <h1> Loading..</h1>
//  }
//  console.log(user && user.cart ? user.cart.cart_items : "hello" )


    return (
        <>
            <div className='App-header' align='center'>
                <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo"/></Link>
            </div>
            <div className='App-header' align='center'>
                <Link to="/">
                    <button className='nav-button'>Home</button>
                </Link>
                {}
                <button className='nav-button' onClick={() => navigate('/cart')}>Cart</button>
                <Link to="/Profile">
                    <button className='nav-button'>Profile</button>
                </Link>
                <Link to="/items">
                    <button className='nav-button'>Items</button>
                </Link>
                <Link to="/Login">
                    <button className='nav-button'>Login</button>
                </Link>
                <button className='nav-button' onClick={handleLogout}>Logout</button>

            </div>

            {/* <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin-left": "930px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Show Cart`}</Button>
      <Button variant="link" onClick={handleShow} style={{"textDecoration":"none", "margin": "1000px", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Cart`}</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title style={{"textDecoration":"none", "margin-left": "1000px", color:"#45A29E"}}>Your Cart</Modal.Title>
        </Modal.Header> */}

            {/* <Modal.Body>
        <Row xs={1} md={4} className="g-4" style={{flex: 1, display: 'flex', flexDirection: 'row'}}> */}

            {/* { cartItems && cartItems.length > 0 ?
        cartItems.map((item, idx) => ( */}
            {/* console.log(cartitem, 'cartitem') */}

            // {/* { user && user.cart && user.cart.cart_items && user.cart.cart_items.length > 0 ? user.cart.cart_items.map((cartitem, idx) => {
          //   console.log(cartitem, 'cartitem') */}


            {/*
            // return user.cart.cart_itemm ? (
          }  return(
                            // return cartitem.item ? (

               <div className='cart-card' key={idx}>


              {cartitem.image_url ? <Card.Img style={{ width: '20rem' , 'margin-right':'110px',display: 'flex', flexDirection: 'row' }} variant="top" src={cartitem.item.image_url} key={idx}/>: null} */}


            <div>
            {user ?
        <div>
          <div>
            <h2 align="center" >Cart</h2>
            {cartItems.map((items, idx) => (
              // <div className='cards__item'>
              <div className='cart-card' key={idx} >
                <img src={items.item.image_url} alt={items.item.title} className='cart-image' ></img>
                <p>{items.item.title}</p>
                <p>${items.item.price}</p>
                <p>${items.item.description}</p>
                <button className='cart-card-button' align='center' style={{ width: 'auto' }} onClick={() => handleDeleteItem(items.item.id)} >Remove From Cart</button>
                {/* <p>Total: {parseInt(items.item.price, 10)}.sum}</p> */ }
              </div>
              // </div>
            ))}
            <div align="center">
              <p> Total: ${cartTotalPrice}.00 </p>
              <button className="cart-card-button" align="center" onClick={handleCheckout} >Checkout</button>
            </div>
          </div>
        </div>
        :

                    <div align="center">
                        <h2 className="no-cart-text">Please login to view cart.</h2>
                        <button className='form-button' onClick={() => navigate('/login')}>Login</button>
                    </div>
                }

            </div>
        </>

    )
}

export default Cart