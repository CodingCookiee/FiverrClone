import newRequest from "../../utils/newRequest";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const navigate = useNavigate();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);


    return (
      //  creative success page
      <div className="success flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-4">
      You will be redirected to the orders page in 5 seconds. If not, 
      <a href="/orders" className="text-blue-500 hover:underline">click here</a>
      </p>
      </div>
    );
}

export default Success;
