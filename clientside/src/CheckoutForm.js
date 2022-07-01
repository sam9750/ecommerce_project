import React from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CardSection from './CardSection';
import {useNavigate} from "react-router-dom";
// import Item from './Item';

export default function CheckoutForm({handleCheckout,totalPrice}) {

  const stripe = useStripe();
  const elements = useElements();
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      // Show error to your customer.
      console.log(result.error.message);
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      await stripeTokenHandler(result.token);
    }
  };

  //send token to server along with any add. info that's been collected
  async function stripeTokenHandler(token) {
    const paymentData = {token: token.id, amount: totalPrice*100};

    // Use fetch to send the token ID and any other payment data to your server.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch('/charge', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(paymentData),
    }).then((resp) => {
      alert("Your payment was successful");
      handleCheckout()
      navigate("/")
    })
  }


  return (
    <div align="center">
    <form onSubmit={handleSubmit} className="form-container">
      <CardSection totalPice={totalPrice} />
      <button disabled={!stripe} className="form-button">Confirm order</button>
    </form>
    </div>
  );
}
