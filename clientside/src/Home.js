import React, { useState, useEffect } from 'react'
import ItemsPage from './ItemsPage';

function Home({user, cart, setCart, items, setCartItems, cartItems, loggedIn}) {
    const [show, setShow] = useState(true)

    // On componentDidMount set the timer
    useEffect(() => {
        const timeId = setTimeout(() => {
            // After 3 seconds set the show value to false
            setShow(false)
        }, 1000)

        return () => {
            clearTimeout(timeId)
        }
    }, [loggedIn]);

    // If show is false the component will return null and stop here
    if (!show) {
        return <ItemsPage user={user} cart={cart} items={items} setCart={setCart} setCartItems={setCartItems} cartItems={cartItems} />
    }
    return (
        <div className="page" align="center">
            <header >
                {user ? 
                <p className="welcome">
                Welcome, {user.name}.
                </p> 
                :
                <p className="welcome">
                Redirecting to home...
                </p> 
}
            </header>
        </div>
    )
}

export default Home