import React, {useState} from 'react';
import {Link} from "react-router-dom"
import {useNavigate} from 'react-router-dom'

function Login ({user,handleLogin, setCartItems, setItems,  setUser, setIsAuthenticated, cart, setCart, setLoggedIn, loggedIn, cartItems}){
    // let history = useHistory()
    console.log('logincomponent')
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
// const [loading, setLoading] = useState(false)


const [error, setError] = useState("")



const navigate = useNavigate()

    function handleLoginSubmit(e){
    e.preventDefault()
    // setLoading(true)
   
    
    fetch('/login',{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body :JSON.stringify({ username, password}) 
    })
    .then(data => { 
        
        // setLoading(false);

        if (data.ok){

            data.json().then(l=>  handleLogin(l))
                // history.push("/items", user)})
                setUser(user) 
                setIsAuthenticated(true)
                setCartItems(cartItems)
                setLoggedIn(true)
                navigate("/")
        } else {
            data.json().catch(err=> {
                setError( "wrong email")
                // setOkay("wrong password")
            })
        }
    })



}   


    return (
        
        <div align="center" style={{height: "100%"}} >
        {user ? 
        <h2 style={{ color: 'black', lineHeight: .5, padding: 1, fontWeight: 'bold', fontStyle: 'italic' }}>{`${user.name} is logged in`} {navigate("/")}</h2>    
            :
    
            <form className='form-container' onSubmit={handleLoginSubmit}>
            <h1 className='form-name'>Please login below.</h1>
            <br></br>
            <div className='inputs'> 
            <label> Username/Email </label>
          
            <input 
                type="text" 
                id="username" 
                placeholder="username" 
                name="username"

                value={username}
                onChange={e => setUsername(e.target.value) }
            />
            </div>

            {/* <p className="error"> {error}</p> */}

         
            <div className='inputs'>
            <label htmlFor="password"> <b>Password</b> </label>
            
                <input type="password" 
                placeholder="password" 
                name="password" 
                value={password}
                className="inputLogin"
                    
                id="password"
                
                onChange={ e=> setPassword(e.target.value)}
            />
            </div>
            <div>
            <button className='form-button'>Login</button>
            </div>
            <br></br>

{/* 
     {/* <div className="btnSection">
 
 
  <button className= "btn btn-gradient btn-glow" type="submit" onClick={setUser}> 
  
  {loading ? <Link to="/MyAccount"> "Loading..." </Link> : "Login" }
  
  
  </button>

<p> Don't have an account? </p>

            <Link to="/signup">
                <button className='nav-button' type="button">Create One!</button>
            // </Link> </div> */} 

<label style={{ fontSize: "20px", padding: "0px" }} disabled={!username || !password}> Don't have an account? </label>
                <Link to="/signup">
                    <button className='form-button' > Sign Up Now! </button>
                </Link>

                {error ? <div>{error}</div> : null}

     </form> 
     }
     </div> 
        
    )
}
        
    

export default Login;