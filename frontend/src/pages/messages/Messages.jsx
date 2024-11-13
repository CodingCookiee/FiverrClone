import React from "react";
import { Link } from "react-router-dom";

function Messages() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="messages flex justify-center text-[#555]">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <div className="title flex justify-between mb-5">
        <h1 className="font-bold text-3xl">Messages</h1>
        </div>
        <table className="w-full">
          <tr className=" h-[50px]">
          <th className="text-left">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th className="text-left">Last Message</th>
            <th className="text-left">Date</th>
            <th className="text-left">Action</th>
            
          </tr>
          <tr className="active h-[100px] bg-[#1dbf730f] ">
          <td className="p-2.5 font-bold" >Charley Sharp</td>
            <td className="p-2.5">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="p-2.5 ">1 hour ago</td>
            <td className="p-2.5">
              <button className="bg-[#1dbf73] hover:bg-[#40e076] text-white font-medium
               border-none p-[10px] cursor-pointer">Mark as Read</button>
            </td>
          </tr>
          <tr className="active h-[100px]  bg-[#1dbf730f] ">
            <td className="p-2.5 font-bold">John Doe</td>
            <td className="p-2.5 ">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="p-2.5 ">2 hours ago</td>
            <td className="p-2.5 ">
              <button className="bg-[#1dbf73] hover:bg-[#40e076] text-white font-medium
               border-none p-[10px] cursor-pointer">Mark as Read</button>
            </td>
          </tr>
          <tr className="h-[100px] ">
          <td className="p-2.5 font-bold">Elinor Good</td>
            <td className="p-2.5 ">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="p-2.5 ">1 day ago</td>
          </tr>
          <tr className="h-[100px]">
            <td className="p-2.5 font-bold">Garner David </td>
            <td className="p-2.5 ">
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td className="p-2.5 ">2 days ago</td>
          </tr>
          <tr className="h-[100px]">
          <td className="p-2.5 font-bold">Troy Oliver</td>
            <td className="p-2.5 ">{message.substring(0, 100)}</td>
            <td className="p-2.5 ">1 week ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
