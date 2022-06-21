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


        



        <div className="logo">
            <h1 className= "header">Welcome to MyStore </h1>


    {user ? (
        <div className= "profile">
          <p>Welcome, {user.username}!</p>
          <img className="img" src={ user? user.image_url :  ""} alt="user profile" ></img>
          <br></br>
          <button className="" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
            <a id="loginButton"href="/">Lofgfifn</a>
        </div>
      )}
        

        
        </div>

    )
}

export default Header;