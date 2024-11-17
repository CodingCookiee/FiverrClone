import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { useQuery, useQueryClient, useMutation } from "react-query";
import moment from "moment";

function Messages() {
  const queryClient = useQueryClient();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const {
    isLoading,
    error,
    data: conversations,
  } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations`).then((res) => {
        return res.data;
      }),
  });

  // Fetch all users involved in conversations
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!conversations) return [];

      // Get unique user IDs from conversations
      const userIds = conversations.reduce((acc, conv) => {
        acc.add(conv.buyerId);
        acc.add(conv.sellerId);
        return acc;
      }, new Set());

      // Fetch all users in parallel
      const promises = Array.from(userIds).map((id) =>
        newRequest.get(`/users/${id}`).then((res) => res.data)
      );

      const usersData = await Promise.all(promises);
      return usersData.reduce((acc, user) => {
        acc[user._id] = user;
        return acc;
      }, {});
    },
    enabled: !!conversations,
  });

  const getUserName = (message) => {
    if (!users) return "Loading...";

    // If message is from another seller to current user
    if (message.sellerId !== currentUser._id && currentUser.isSeller) {
      return users[message.sellerId]?.username;
    }

    // If current user is seller, show buyer's name
    if (currentUser.isSeller) {
      return users[message.buyerId]?.username;
    }

    // If current user is buyer, show seller's name
    return users[message.sellerId]?.username;
  };

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleMarkAsRead = (id) => {
    mutation.mutate(id);
  };
  //  helper function
  const isMessageRead = (message) => {
    if (currentUser.isSeller) {
      return message.readBySeller;
    }
    return message.readByBuyer;
  };

  return (
    <div className="messages flex justify-center text-[#555]">
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
            <h1 className="font-bold text-3xl">Messages</h1>
          </div>
          <table className="w-full">
            <tr className=" h-[50px]">
              <th className="text-left">
                {currentUser.isSeller ? "Buyer" : "Seller"}
              </th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
            {conversations.map((message) => (
              <tr
                className={
                  isMessageRead(message) && "active h-[100px] bg-[#1dbf730f] "
                }
                key={message._id}
              >
                <td className="p-2.5 font-bold">{getUserName(message)}</td>
                <td className="p-2.5">
                  <Link to="/message/123" className="link">
                    {message?.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td className="p-2.5 ">
                  {moment(message.updatedAt).fromNow()}
                </td>
                <td className="p-2.5">
                  {!isMessageRead(message) && (
                    <button
                      onClick={() => handleMarkAsRead(message.id)}
                      className="bg-[#1dbf73] hover:bg-[#10b981] text-white font-medium
        border-none p-[10px] cursor-pointer"
                    >
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}
export default Messages;
