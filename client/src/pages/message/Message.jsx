import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const Message = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const {
    isLoading,
    error,
    data: messages,
  } = useQuery({
    queryKey: ["messages", id],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

 
const { data: conversation } = useQuery({
  queryKey: ["conversation", id],
  queryFn: () =>
    newRequest.get(`/conversations/single/${id}`).then((res) => {
      return res.data;
    }),
});

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const { data: users } = useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      if (!conversation) return {};

      const userIds = [conversation.buyerId, conversation.sellerId];
      const promises = userIds.map((userId) =>
        newRequest.get(`/users/${userId}`).then((res) => res.data)
      );

      const usersData = await Promise.all(promises);
      return usersData.reduce((acc, user) => {
        acc[user._id] = user;
        return acc;
      }, {});
    },
    enabled: !!conversation,
  });

  const getUserName = () => {
    if (!users || !conversation) return "Loading...";
  
    // Handle case when there are no messages yet
    if (!messages?.length) {
      return currentUser.isSeller 
        ? users[conversation.buyerId]?.username 
        : users[conversation.sellerId]?.username;
    }
  
    // If current user is sender, show recipient's name
    if (messages[0].userId === currentUser._id) {
      return currentUser.isSeller 
        ? users[conversation.buyerId]?.username 
        : users[conversation.sellerId]?.username;
    }
    
    // If current user is recipient, show sender's name
    return users[messages[0].userId]?.username;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message flex justify-center">
      <div className="container w-[1400px] m-[50px]">
        <span className="breadcrumbs font-light text-[13px] text-[#555]">
          <Link to="/messages">Messages</Link> {">"} {getUserName()} {">"}
        </span>
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
          <div className="messages m-[30px] ml-0 mr-0 p-[50px] flex flex-col gap-5 h-[500px] overflow-y-scroll">
            {messages?.map((message) => (
              <div
                className={
                  message.userId === currentUser._id
                    ? "item owner flex gap-5 max-w-[600px] text-[18px] flex-row-reverse self-end"
                    : "item flex gap-5 max-w-[600px] text-[18px]"
                }
                key={message._id}
              >
                <img
                  src={
                    message.userId === currentUser._id
                      ? currentUser.img || "avatar.png"
                      : users?.[message.userId]?.img || "/avatar.png"
                  }
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%] object-cover"
                />
                <p
                  className={
                    message.userId === currentUser._id
                      ? "max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white"
                      : "max-w-[500px] rounded-b-3xl rounded-tr-3xl bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light"
                  }
                >
                  {message?.desc || "No message yet"}
                </p>
              </div>
            ))}
          </div>
        )}
        <hr className="h-0 border-[0.5px] border-solid border-[lightgrey] mb-5" />
        <form
          onSubmit={handleSubmit}
          className="write flex items-center justify-between"
        >
          <textarea
            type="text"
            placeholder="write your message"
            className="w-[80%] h-[100px] min-h-[100px] p-2.5
          border border-solid border-[lightgrey] rounded-[10px] "
          />
          <button
            className="bg-[#1dbf73] hover:bg-[#10b981] p-5 text-white rounded-[10px] 
          font-medium border-none cursor-pointer w-[100px]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Message;
