import "./Header.css"
import React from "react"
// import { useNavigate } from "react-router";
// import Signup from "./Signup"
// import { useHistory } from "react-router-dom"
// import {Link} from "react-router-dom"

// function Header ({user}
function Header ({user, onLogout}){
    // let history = useHistory()
    
  // function handleLogout() {
  //       fetch("/logout", {
  //         method: "DELETE",
  //       }).then(() => onLogout());
  //     }
  
    return (


        



        <div className="logo">
            <h1 className= "header">Welcome to FunnyWear </h1>
            <h2 className= "header2">Punny Shirts to Have A Laugh </h2>


    {user ? (
        <div className= "profile">
          <p>Welcome, {user.username}!</p>
          <img className="img" src={ user? user.image_url :  ""} alt="" ></img>
          <br></br>
          {/* <button className="" onClick={handleLogout}>LogoutButton</button> */}
        
        </div>
      ) : (
        <div>
            {/* history.push("/items", user) */}
        </div>
      )}
        

        
        </div>

    )
}

export default Header;