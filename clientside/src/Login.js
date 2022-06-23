import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom"

function Login ({user,onLogin}){
    let history = useHistory()
    console.log('logincomponent')
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


const [error, setError] = useState("")
const [okay, setOkay] =useState("")

    function handleSubmit(e){
    e.preventDefault()
   
    
    fetch('/login',{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body :JSON.stringify({ username, password}) 
    })
    .then(data => {

       

        if (data.ok){

            data.json().then(l=> { 
                onLogin(l)
                history.push("/items", user)})
        } else{
            data.json().catch(err=> {
                setError( "wrong email")
                setOkay("wrong password")
            })
        }
    })



}   


    return (
        
       <div>
     
        <p> Login Page </p>
     <form onSubmit={handleSubmit} className="container" >

   
    
        <label htmlFor="username"><b>Username/Email</b> </label>
        <br></br>
        <input type="text" 
        id="username" 
        placeholder="username" 
        name="username"
        className="inputLogin"
    
        
        onChange={e => setUsername(e.target.value) }
        />

        <p className="error"> {error}</p>

        <br></br>

        <label htmlFor="password"> <b>Password</b> </label>
        <br></br>
        <input type="password" 
        placeholder="password" 
        name="password" 
        className="inputLogin"
            
        id="password"
        
        onChange={ e=> setPassword(e.target.value)}
        />

        <input type="submit" value="Login"/>
            

    </form>

    <p> Don't have an account? </p>
                <Link to="/create-account">
                    <button className='nav-button' type="button">Create One!</button>
                </Link>

 </div>     
        
    )
}
        

    

export default Login;

 