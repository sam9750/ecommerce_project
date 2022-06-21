import React, {useState} from 'react';
import {Link} from "react-router-dom"

function Login ({user,onLogin}){
    console.log('logincomponent')
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


const [error, setError] = useState("")
const [okay, setOkay] =useState("")

    function handleSubmit(x){
    x.preventDefault()
    
    
    fetch('/login',{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body :JSON.stringify({ username, password}) 
    })
    .then(data => {

       

        if (data.ok){

            data.json().then(l=> onLogin(l) )
        }else{
            data.json().catch(err=> {
                setError( "wrong email")
                setOkay("wrong password")
            })
        }
    })



}   


    return (
        
       <div>
     
        <p> asdfsa234df </p>
     <form onSubmit={handleSubmit} className="container" >

   
    
    <label for="username"><b>Username/Email</b> </label>
    <br></br>
    <input type="text" 
    id="username" 
    placeholder="username" 
    name="username"
    className="inputLogin"
     required
     value={username}
     onChange={e => setUsername(e.target.value) }
     />

<p className="error"> {error}</p>

    <br></br>

    <label for="password"> <b>Password</b> </label>
    <br></br>
    <input type="password" 
    placeholder="password" 
    name="password" 
    className="inputLogin"
    required  
    id="password"
    value={password}
    onChange={ e=> setPassword(e.target.value)}
    />



    </form>

    <p> Don't have an account? </p>
                <Link to="/create-account">
                    <button className='nav-button' type="button">Create One!</button>
                </Link>

 </div>     
        
    )
}
        

    

export default Login;

 