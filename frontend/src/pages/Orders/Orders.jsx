import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

function MyOrders() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders flex justify-center text-[#555]">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <div className="title flex justify-between mb-5">
        <h1 className="font-bold text-3xl">Orders</h1>
        </div>
        <table className="w-full">
          <tr className=" h-[50px]">
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Price</th>
            {<th className="text-left">{currentUser?.isSeller ? "Buyer" : "Seller"}</th>}
            <th className="text-left">Contact</th>
          </tr>
          <tr className="h-[50px] bg-[#1dbf730f]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>
              59.<sup className="text-[12px]">99</sup>
            </td>
            <td>13</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>
              120.<sup>99</sup>
            </td>
            <td>41</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
          <tr className="h-[50px]  bg-[#1dbf730f]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>
              79.<sup>99</sup>
            </td>
            <td>55</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>
              119.<sup>99</sup>
            </td>
            <td>29</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
          <tr className="h-[50px]  bg-[#1dbf730f]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>
              59.<sup>99</sup>
            </td>
            <td>34</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>
              <img
                className="image w-[50px] h-[25px] object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>
              110.<sup>99</sup>
            </td>
            <td>16</td>
            <td>
              <img src="/message.png" alt="" className="w-5 cursor-pointer" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyOrders;
