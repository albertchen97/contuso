import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51LTU8jKOvglLHFzhiI5WxtcAb6MY3OooWJXv0XssyyZ8d2e3LTUOUTjQZL2yqjP9QXH93QQBbartqEli2blCDocn00KwuiUHQF"
  );

  return (
    <section className="checkout-wrapper">
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
