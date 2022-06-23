import React, { useState } from 'react'
import { Card, Container, Button} from "react-bootstrap"
import { useHistory } from "react-router-dom"

function AddItem({ items, setItems }) {
  const history = useHistory("");
  
    const [errors, setErrors] = useState([]);
  
    const [formData, setFormData] = useState({
      title: "",
      image_url: "",
      description: "",
      price: "",
      quantity: "",
      location: "",
      type: ""
    })
  
    const initialFormState = {
        title: "",
        image_url: "",
        description: "",
       
        category: "",
        location: "",
        type: ""
    }
    
    function onCreateProd(newProd) {
      setProducts([...products, newProd])
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      console.log("Submitted")
    
      const newProd = {
        name: formData.title,
        image: formData.image_url,
        description: formData.description,
        price: formData.category,
        quantity: formData.type,
        sku: formData.location,
      }
        
      fetch(`/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProd),
      })
      .then((r) => {
          if (r.ok) {
            r.json().then((item) => onCreateProd(item));
        } else {
            r.json().then((err) => setErrors(err.errors));
        } 
      })
      .then(setFormData(initialFormState));
      history.push("/item")
    } 
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    return (

      <Container style={{width: "500px"}}>
      <Card >
        <Card.Body >
      <div className="background">
          <div className="form-border center-content" >
            <div className="ui grid">
              <form 
                  className="ui two fields form center"
                  onSubmit={(e) => handleSubmit(e)}
                  >
                  <div>
                    {errors.map((error) => (
                      <ul className="errors">- {error}</ul>
                    ))}
                  </div>
                <label htmlFor="name">Product Name: </label>
                <input
                  name="name"
                  type="text"
                  id={FormData.title}
                  value={formData.title}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="image">Product Image: </label>
                <input
                  name="image"
                  type="text"
                  id={FormData.image}
                  value={formData.image}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="description">Product Description: </label>
                <input
                  name="description"
                  type="text"
                  id={FormData.description}
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="price">Price: </label>
                <input
                  name="price"
                  type="number"
                  id={FormData.type}
                  value={formData.type}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label>Quantity:</label>
                <input
                  name="quantity"
                  type="number"
                  id={FormData.category}
                  value={formData.category}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label>SKU Number: </label>
                <input
                  name="sku"
                  type="text"
                  id={FormData.location}
                  value={formData.location}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <br></br>
                <Button version="primary" type="submit">Create</Button>
              </form>
            </div>
          </div>
        </div>
        </Card.Body>
        </Card>
        </Container>
        
    )
  }
  
  export default AddItem