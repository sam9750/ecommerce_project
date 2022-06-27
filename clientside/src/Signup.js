import React, { useState } from 'react'
// import { BrowserRouter as Router } from "react-router-dom";


function SignUp() {
    const [newName, setNewName] = useState("Enter name...")
    const [newUsername, setNewUsername] = useState("Enter Username...")
    const [newEmail, setNewEmail] = useState("Enter email...")
    const [newPassword, setNewPassword] = useState("")
    const [birthdate, setBirthdate] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(false)

    // function handleNewUser() {
    //     if (username.)
    // }

    // Handling the name change
    function handleNewName(e) {
        setNewName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleNewEmail = (e) => {
        setNewEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleNewBirthdate = (e) => {
        setBirthdate(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value);
        setSubmitted(false);
    };

    const handlePassConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        setSubmitted(false);
    };

    const handleNewUsername = (e) => {
        setNewUsername(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission, creating a new user and persising to db
    const handleNewUser = (e) => {
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newName,
                dob: birthdate,
                email: newEmail,
                password: newPassword,
                password_confirmation: passwordConfirmation,
                username: newUsername
            })
        })
        .then(res => 
           { if(res.ok) {
               res.json()
               .then(user => setNewUsername(user))
               return res.json().then(body => setNewUsername(body))
            }
        })

        if (newName === '' || newEmail === '' || newPassword === '' || birthdate === undefined) {
            e.preventDefault();
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    

        setNewName('')
        setNewEmail('')
        setNewUsername('')
        setBirthdate('')
        setPasswordConfirmation('') 
    
    }

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1 className='please' > User {newName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1 className="please">Please enter all of the fields</h1>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="App-header">
            <div>
                {errorMessage()}
                {successMessage()}
            </div>
           
                <div>
                    <form>
                        <div >
                            <label></label>
                            <input type="text" placeholder="Create Name" name="name" value={newName} onChange={handleNewName} required />
                            <br></br>
                            <label> </label>
                            <input type="text" placeholder="Create Email" name="email" value={newEmail} onChange={handleNewEmail} required />
                            <br></br>
                            <label> </label>
                            <input type="text" placeholder="Create Username" name="username" value={newUsername} onChange={handleNewUsername} required />
                            <br></br>
                            <label> </label>
                            <input type="date" name="birthday" value={birthdate} onChange={handleNewBirthdate} required />
                            <br></br>
                        </div>
                        <div>
                            <label> </label>
                            <input type="password" name="password" placeholder="Create Password" value={newPassword} onChange={handleNewPassword} required />
                            <br></br>
                            <label> </label>
                            <input type="password" name="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={handlePassConfirmation} required />
                        </div>
                        <div>
                            <button className='nav-button' onClick={handleNewUser}> Create New Account! </button>
                        </div>
                    </form>
                </div>

        
            </div>
        </div>
    )
}


export default SignUp