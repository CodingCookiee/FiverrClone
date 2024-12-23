import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51QM39BK6F59qxYvne4AUqbjPmhSXqCZ3pKXUGHb3YY2hgUbRxp54Ul83OhwpXOGkjdveiutoKp1qicZgpu8khWXI0090Kf8S71"
);

const Pay = () => {
  const [clientSecret, setClientSecret] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await newRequest.post(
          `/orders/create_payment_intent/${id}`
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, []);

  const appearance = {
    theme: "stripe",
    labels: "pay",
  };

  const loader = 'auto';

  const options = {
    clientSecret,
    appearance,
    loader,
  };

  return (
    <div className="pay flex flex-col items-center justify-center h-screen">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
