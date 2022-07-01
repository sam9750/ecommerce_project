import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import './App.css'


const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
function CreditCardDetails({totalPrice}) {
  return (

    <label align="center">
      <h2>Your Total Is: ${totalPrice}</h2>
      <h3>Card details</h3>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
};
export default CreditCardDetails;