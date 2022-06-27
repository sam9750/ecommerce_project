import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51L7ny5BqFuEnTEglvhz8Yl6yDBV2Ai891QkyaGjJmM2Rp0tR3FuAcdA8CJamSZcWndv6NYxxpMUnBNZqTAg3N3cv000rQJe8Y5');

function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};


export default Checkout