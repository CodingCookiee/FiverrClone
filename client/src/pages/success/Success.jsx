import newRequest from "../../utils/newRequest";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const email = params.get("email");
  const [orderDetails, setOrderDetails] = useState(null);
  const [emailStatus, setEmailStatus] = useState("");
  const [emailSent, setEmailSent] = useState(false);


  useEffect(() => {
      const makeRequest = async () => {
        try {
          if (!payment_intent || emailSent) return;
          
          const response = await newRequest.put("/orders", { payment_intent });
          if (response.status === 200) {
            const orderData = response.data;
            setOrderDetails({...orderData, orderId: orderData._id});
  
            const emailResponse = await newRequest.post("/orders/send-invoice", {
              orderId: orderData._id,
              email: email,
              orderDetails: orderData
            });
            
            if (emailResponse.status === 200) {
              setEmailStatus("Invoice has been sent to your email!");
              setEmailSent(true);   
            }
            setTimeout(() => {
              navigate("/orders");
            }, 5000);
          }
        } catch (err) {
          console.log(err);
          setEmailStatus("Couldn't send invoice email. Please check your orders page.");
        }
      };  
      makeRequest();
    }, [payment_intent, navigate, email, emailSent]);

  console.log("Email:", email);

  

  return (
    <div className="success flex flex-col items-center justify-center min-h-screen p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Payment Successful!
          </h1>
          <div className="check-mark text-5xl text-green-500 mb-4">✓</div>
          {emailStatus && <p className="text-gray-600 mb-4">{emailStatus}</p>}
        </div>

        {orderDetails && (
          <div className="invoice-details border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold mb-4">Invoice Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <p className="text-gray-600">Order ID:</p>
                <p className="font-medium">{orderDetails.orderId}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-gray-600">Date:</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-600">Service:</p>
                <p className="font-medium">{orderDetails.title}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-gray-600">Amount Paid:</p>
                <p className="font-medium text-xl text-green-600">
                  ${orderDetails.price}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            You will be redirected to the orders page in 5 seconds. If not,{" "}
            <a href="/orders" className="text-blue-500 hover:underline">
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
