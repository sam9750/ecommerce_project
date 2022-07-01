import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import React from "react";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51LGmiQCkxGwbXGjyn3ILpe08hPQUtVbQ5HwWnFZ57UhKi3O5NGzADC5gU0ACY5U7CckK1ylt57pUj0gVygib2FJY008WDvU3ho');

function Checkout({handleCheckout, totalPrice}) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm handleCheckout={handleCheckout} totalPrice={totalPrice} />
    </Elements>
  );
};


export default Checkout