import React, {} from 'react'
import { Link } from 'react-router-dom'
import Logo from './saleabstract-geometric-sale-banner-design-template-for-promotion-vector.jpg'
import {useNavigate} from 'react-router-dom'

function Navbar({ onLogout, setCart }) {
    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
        navigate('/')
    }

    return (
        <div>
            <div className='App-header' align='center'>
                <Link to="/"><img  alt="logo" width={100} className="brand-logo" /></Link>
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
        </div>
    )
}

export default Navbar


























// {/* <nav className="navbar navbar-expand-lg navbar-light bg-#0B0B0B">
// <div className="container-fluid">
 
//   <img src="./logo.png" width="150" height="50" alt=""/>
  
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{width:"100%"}}>
//       <div className="navbar-nav" style={{width:"100%"}}>
        
//         <NavItem>
//           <NavLink
//             to="/items"
//             exact
//             className="nav-link"
//             style={{color: "white"}}
//           >
//             MERCH
//           </NavLink>
//         </NavItem>
       
        
//         <div className="ms-auto" style={{display:"inline-flex"}}>
//           <NavItem>
//             <Cart
//               item={item}
//               setCart={setCart} 
//               cart= {cart}
//               totalPrice={totalPrice}
//               setTotalPrice={setTotalPrice}
//             />
//           </NavItem>
//           <NavItem>
//           <NavLink exact to="/Login"><button className='nav-button'>Login</button></NavLink>
//           </NavItem>
            
//         </div>
//       </div>
//     </div>
// </div>
// </nav>   */

// }
