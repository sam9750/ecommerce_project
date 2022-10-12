import React, {useEffect} from 'react'
// import {useHistory} from "react-router-dom"
// import {Col, Row, Container} from "react-bootstrap"
import Item from './Item'
import {Link} from "react-router-dom"
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'
import {useNavigate} from 'react-router-dom'


function ItemsPage({setUser, setLoggedIn, user, setItems, setItemsRetrieved, handleItems, items, cart, setCart, setCartItems, totalPrice, setTotalPrice, authorized, cartItems, handleLogout, isAuthenticated}) {
    let navigate = useNavigate()
//     // const [items, setItems] = useState([])


//     // let history = useHistory()

//     // if(!authorized) {
//     //     return <Redirect to="/" />
//     // }



//     // useEffect(() => {
//     //     if(!user) { <ItemsPage  //render items on page, if not useHistory to navigate to different page


//     // }, [])

//     // useEffect(() => {
//     //     fetch('/items')
//     //     .then((r) => r.json())
//     //     .then(data => console.log(data));
//     //   }, []);


//      console.log(cartItems)
//    console.log(isAuthenticated)


//    useEffect(() => {
//     fetch("/items").then((res) => {
//       if (res.ok) {
//         res.json().then((items) => {
//           setItems(items);
//           setItemsRetrieved(true)
//         });
//       }
//     })


//   }, [])
    function handleLogout() {
        setUser(null);
        setLoggedIn(false)
        setCart([])
        setCartItems([])
        navigate("/")
    }

    return (
        <div>
            <div className='App-header' align='center'>
                <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo"/></Link>
            </div>
            <div className='App-header' align='center'>
                <Link to="/">
                    <button className='nav-button'>Home</button>
                </Link>
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
                    <div className="item-list">
                        <h3 align="center">All Items</h3>
                        {items.map((item) => (
                            <Item
                                key={item.id}
                                item={item}
                                cart={cart}
                                setCart={setCart}
                                user={user}
                                setCartItems={setCartItems}
                                cartItems={cartItems}
                            />
                        ))}
                    </div>
                    :
                    <div align="center">
                        <h2 className="no-cart-text">Please login to view Items.</h2>
                        <button className='form-button' onClick={() => navigate('/login')}>Login</button>
                    </div>
                }
            </div>
        </div>
    )
}


export default ItemsPage;
