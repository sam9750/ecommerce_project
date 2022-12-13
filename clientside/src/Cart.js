import React, {useState, useEffect} from 'react';
import {Modal, Button, Card, Row} from 'react-bootstrap';
// import CheckoutButton  from './CheckoutButton';
// import Checkout from './Checkout';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'


function Cart({setUser, setLoggedIn,handleItems, user, cart, totalPrice, setTotalPrice, setCart, setCartTotal, setCartItems, cartItems, cartTotalPrice, handleLogout, yourCartItems, setYourCartItems}) {
    let navigate = useNavigate()
    // const [showModal, setShowModal] = useState(false);
    // const handleClose = () => setShowModal(false);
    // const handleShow = () => setShowModal(true);
    totalPrice = cartItems.reduce((total, ci) => total + ci.item.price,0)
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
    function handleLogout() {
        setUser(null);
        setLoggedIn(false)
        setCart([])
        setCartItems([])
        navigate("/")
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
                <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo-small"/></Link>
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
            <div>
                {user ?
                    <div>
                        <div>
                            <h2 align="center">Cart</h2>
                            {
                                cartItems.map((cart_item, idx) => (
                                        <div className='cart-card' key={idx}>
                                            <img src={cart_item.item.image_url} alt={cart_item.item.title} className='cart-image'></img>
                                            <p>{cart_item.item.title}</p>
                                            <p>${cart_item.item.price}</p>
                                            <button className='cart-card-button' align='center' style={{width: 'auto'}}
                                                    onClick={() => handleDeleteItem(cart_item.id)}>Remove From Cart
                                            </button>
                                            {/* <p>Total: {parseInt(item.price, 10)}.sum}</p> */}
                                        </div>
                                        // </div>
                                    )
                                )
                            }
                            <div align="center">
                                <p> Total: ${totalPrice}.00 </p>
                                <button className="cart-card-button" align="center" onClick={handleCheckout}>Checkout
                                </button>
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