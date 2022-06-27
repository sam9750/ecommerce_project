import './App.css'
import React, { useState, useEffect, } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ItemsContainer from "./ItemsContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import SignUp from "./Signup";
import ItemsPage from "./ItemsPage";
// import { NavLink } from "react-router-dom";
import Header from "./Header";
// import Account from "./Account"
// import Checkout from './Checkout';
import Cart from './Cart';
import Home from './Home'
import CheckoutButton from './CheckoutButton';

// import '../App.css';


function App() {
  // let history = useHistory()
  console.log("hello")
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState("")



  console.log(user)

  // const redirectToLogin = () => {

  //   history.push("/Login", user) }




  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
          setLoggedIn(true)
        });
      }
    })
  }, [])




  useEffect(() => {
    fetch("/items").then((res) => {
      if (res.ok) {
        res.json().then((items) => {
          setItems(items);
        });
      }
    })


  }, [])
    ;

  useEffect(() => {
    fetch('/cart')
      .then((res) => {
        if (res.ok) {
          res.json().then(cartItems => setCartItems(cartItems))
        }
      })
  }, [user])




  function handleLogin() {
    setUser(user);
    setIsAuthenticated(true)
    setCartItems(cartItems)
    setLoggedIn(true)
  }


  function handleLogout() {
    setUser(null);
    setLoggedIn(false)
    setCart([])
    setCartItems([])
  }

  // // function handleAuth(value) {
  // //   setIsAuthenticated(value);
  // }

  useEffect(() => {
    fetch('/totalPrice')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then(cartSum => setCartTotal(cartSum))
        }
      })
  }, [cartItems])









  return (

    <div className="App">

      <Header user={user} onLogout={handleLogout} isAuthenticated={isAuthenticated} />

<BrowserRouter>
    

        


        <Routes>
          <Route path="/" element={ <Navbar
          onLogout={handleLogout}
          handleLogin={handleLogin}
          loggedIn={loggedIn}
          user={user}
          setUser={setUser}
          setCart={setCart} />} />

        <Route path="/*" element={<Home user={user} cart={cart} setCart={setCart} items={items} cartItems={cartItems} setCartItems={setCartItems} loggedIn={loggedIn} />} />

          <Route path="/login"
            element={<Login error={'Please login!'} 
              user={user} handleLogin={handleLogin} 
              setUser={setUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
              cart={cart}
              setCart={setCart}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
              cartItems={cartItems}
              setCartItems={setCartItems} />}
          />

          <Route path="/signup"
            element={<SignUp setUser={setUser} user={user} />}
          />

          <Route path="/items" element= {<ItemsPage items={items} authorized={false} user={user}

              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              cart={cart}
              setCart={setCart} />} />

          {/* // <Route path="create-user" element={<SignUp />} />
          // <Route path="/profile" element={<OwnUserProfile isAuthenticated={isAuthenticated} user={user} />} /> */}

          <Route path="/checkout" element={<CheckoutButton cartItems={cartItems} />} />
          <Route path="/cart" element={<Cart totalPrice={totalPrice} user={user} cartItems={cartItems} setCartItems={setCartItems} cart={cart} setCart={setCart} item={items} cartTotalPrice={cartTotal} setCartTotal={setCartTotal} />} />
        </Routes>
   
        </BrowserRouter>

    </div>

  );
}

// function Landing() {
//   return (
//     <div>Hello

//     </div>
//   )
// }

// function Home() {
//   return (
//     <div>Hello

//     </div>
//   )
// }



export default App;
