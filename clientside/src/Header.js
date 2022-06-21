import "./Header.css"
import React,{} from "react"
// import Signup from "./Signup"

// function Header ({user}
function Header ({user, onLogout}){
    
  function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }
  
    return (


        



        <div class="logo">
            <h1 class= "header">Welcome to Money Time </h1>


    {user ? (
        <div class= "profile">
          <p>Welcome, {user.username}!</p>
          <img class="img" src={ user? user.image_url :  ""} alt="user profile" ></img>
          <br></br>
          <button class="btn btn-gradient btn-glow" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
            <a id="loginButton"href="/">Login</a>
        </div>
      )}
        

        <div class="containerNav">
            
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/MyAccount">My Account</a></li>
                    <li><a href="/CustomerService">Customer Service</a></li>
                    <li><a href="/AboutUs">About Us</a></li>
                    
                </ul>
            </nav>
       
        </div>

        </div>

    )
}

export default Header;