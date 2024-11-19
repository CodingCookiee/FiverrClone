import React from "react";
import "./Orders.css";
import { useNavigate, Link } from "react-router-dom";
import { useQuery} from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const MyOrders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;
    try {
      const res = await newRequest.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        try {
          const res = await newRequest.post(`/conversations`, {
            to: currentUser.isSeller ? buyerId : sellerId,
          });
          navigate(`/message/${res.data.id}`);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

    return (
      <div className="orders flex justify-center text-[#555]">
        {isLoading ? (
          <div
            className={`h-full w-full max-w-xl mt-5 border-gray-300 shadow rounded-md p-4 mx-auto`}
          >
            <div className="animate-pulse flex space-x-4">
              <div className={`rounded-full  `}></div>
              <div className="flex-1 space-y-4">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div
                      className={`h-2 mt-10 mb-10 bg-slate-300 rounded w-3/4`}
                    ></div>
                    <div className={`h-2 bg-slate-300 rounded w-1/2`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : error ? (
          <div>Something went wrong!</div>
        ) : (
          <div className="container w-[1400px] p-[50px] pl-0 pr-0">
            <div className="title flex justify-between mb-5">
              <h1 className="font-bold text-3xl">Orders</h1>
            </div>
            <table className="w-full">
              <tr className=" h-[50px]">
                <th className="text-left">Image</th>
                <th className="text-left">Title</th>
                <th className="text-left">Price</th>
                <th className="text-left">Contact</th>
              </tr>
              {data.map((order) => (
                <tr className="h-[50px] bg-[#1dbf730f]" key={order._id}>
                  <td>
                  <Link to={`/gig/${order.gigId}`} className="cursor-pointer">
                    <img
                      className="image w-[50px] h-[25px] object-cover"
                      src={order.img || "/order.png"}
                      alt=""
                    />
                    </Link>
                  </td>
                  <td><Link to={`/gig/${order.gigId}`} className="cursor-pointer">{order.title}</Link></td>
                  <td>${order.price}</td>
                  <td>
                    <img
                      src="/message.png"
                      alt=""
                      className="w-5 cursor-pointer"
                      onClick={() => handleContact(order)}
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>
    );
  };


export default MyOrders;
