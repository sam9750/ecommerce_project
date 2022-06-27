import React, { } from 'react'
// import {useHistory} from "react-router-dom"
// import {Col, Row, Container} from "react-bootstrap"
import Item from './Item'
import {Link} from "react-router-dom"
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'
import { useNavigate } from 'react-router-dom'


function ItemsPage({ user, setItemsRetrieved, handleItems, items, cart, setCart, setCartItems, totalPrice, setTotalPrice, authorized, cartItems, handleLogout, isAuthenticated }) {
let navigate = useNavigate()
    // const [items, setItems] = useState([])


    // let history = useHistory()
    
    // if(!authorized) {
    //     return <Redirect to="/" />
    // }
  

    // useEffect(() => {
    //     if(!user) { <ItemsPage  //render items on page, if not useHistory to navigate to different page
            
        
    // }, [])

    // useEffect(() => {
    //     fetch('/items')
    //     .then((r) => r.json())
    //     .then(data => console.log(data));
    //   }, []);
      
    
     






    return (
      <div>
      <div className='App-header' align='center'>
          <Link to="/"><img src={Logo} alt="logo" width={100} className="brand-logo" /></Link>
      </div>
      <div className='App-header' align='center'>
          <Link to="/"><button className='nav-button'>Home</button></Link>
          {}
          <button className='nav-button' onClick={() => navigate('/cart')} >Cart</button>
          <Link to="/Profile"><button className='nav-button'>Profile</button></Link>
          <Link to="/items"><button className='nav-button'>Items</button></Link>
          <Link to="/Login"><button className='nav-button'>Login</button></Link>
          <button className='nav-button' onClick={handleLogout} >Logout</button>
                           
      </div>
  
        
        { isAuthenticated ? 

          <div>


            <div className="cards" style={{ display: 'flex' }}>

                {items.map((item) => ( 
                    <Item 
                        key={item.id} 
                        item={item} 
                        cart={cart}
                        setCart={setCart}
                        user={user}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                        handleItems = {handleItems} />)
                        )
                      }

                </div>

              </div>  
                 
            
            

              : 
              <div> <p> Please... </p>  <Link to="/Login"><button className='nav-button'>Login!</button></Link>  </div>}
              
              </div>
                )
              
}




export default ItemsPage;
