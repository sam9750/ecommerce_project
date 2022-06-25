import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavItem } from "react-bootstrap";
import  Cart  from "./Cart.js";
// import {useNavigate} from 'react-router-dom'

function Navbar({ onLogout, user, item, cart, totalPrice, setTotalPrice, loggedIn, onLogin, onClick, handleLogout, setCart }) {
    // const navigate = useNavigate()
    function handleLogout() {
        fetch('/logout', {
            method: "DELETE",
        })
            .then(() => onLogout())
            // navigate('/')
    }

    return (
    <div>
        <nav className="nav-bar">
            <div>
                <NavLink exact to="/login"><button className='nav-button'>Home</button></NavLink>
                {/* check if ternary operator below works with && */}
               
                <button className='nav-button' onClick={handleLogout} >Logout</button>
                
                <NavLink exact to="/Login"><button className='nav-button'>Login</button></NavLink>
                <NavLink exact to="/items"><button className='nav-button'>Items</button></NavLink>
                <button className='nav-button' onClick={handleLogout} >Logout</button>
            </div>
        </nav>
     </div>
    )
}

{/* <nav className="navbar navbar-expand-lg navbar-light bg-#0B0B0B">
<div className="container-fluid">
 
  <img src="./logo.png" width="150" height="50" alt=""/>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{width:"100%"}}>
      <div className="navbar-nav" style={{width:"100%"}}>
        
        <NavItem>
          <NavLink
            to="/items"
            exact
            className="nav-link"
            style={{color: "white"}}
          >
            MERCH
          </NavLink>
        </NavItem>
       
        
        <div className="ms-auto" style={{display:"inline-flex"}}>
          <NavItem>
            <Cart
              item={item}
              setCart={setCart} 
              cart= {cart}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          </NavItem>
          <NavItem>
          <NavLink exact to="/Login"><button className='nav-button'>Login</button></NavLink>
          </NavItem>
            
        </div>
      </div>
    </div>
</div>
</nav>   */

}


export default Navbar
