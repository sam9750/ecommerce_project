import React, { useState, useEffect} from 'react'
// import {useHistory} from "react-router-dom"
import {Col, Row, Container} from "react-bootstrap"
import Item from './Item'


function ItemsPage({ user, cart, setCart, totalPrice, setTotalPrice, authorized}) {

    const [items, setItems] = useState([])

    // let history = useHistory()
    
    // if(!authorized) {
    //     return <Redirect to="/" />
    // }
  

    // useEffect(() => {
    //     if(!user) { <ItemsPage  //render items on page, if not useHistory to navigate to different page
            
        
    // }, [])

    useEffect(() => {
        fetch("/items")
        .then((r) => r.json())
        .then(setItems);
      }, []);
      
    
      






    return (
        

        <div>
        {user ? 
            <div><p> Hello! </p>
            <p> All Items</p>
            <ul className="cards" style={{ display: 'flex' }}>
                { items.map(i => <Item key={i.id} item={i}/>) }
            </ul></div>
              :
              <p> Please log in </p>
              }

{/* <Container className="mt-5">
      <Row xs={1} md={3} className="g-4">
        <>
            <br></br>
              {items && items.map((item, index) => {
                return (
                  <Col>
                  <React.Fragment key={index}>
                    <Item item={item} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                  </React.Fragment>
                  </Col>
                )
              })}
        </>
      </Row>
    </Container>
  )
}
 */}





        </div> 
   
    );
}




export default ItemsPage;
