import React from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import getCurrentUser from "../../utils/getCurrentUser";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";


const MyGigs = () => {
  const currentUser = getCurrentUser();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs flex justify-center text-[#555]">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <div className="title flex justify-between mb-5">
          <h1 className="font-bold text-3xl">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button
                className="bg-[#1dbf73] hover:bg-[#10b981] text-white font-medium
               border-none p-[10px] cursor-pointer"
              >
                Add New Gig
              </button>
            </Link>
          )}
        </div>
        <table className="w-full">
          <thead>
            <tr className="h-[50px]">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">Sales</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((gig) => (
              <tr className="h-[50px] bg-[#1dbf730f]" key={gig._id}>
                <td>
                  <Link to={`/gig/${gig._id}`}>
                    <img
                      className="image w-[50px] h-[25px] object-cover"
                      src={gig.cover}
                      alt=""
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`/gig/${gig._id}`}>{gig.title}</Link>
                </td>
                <td>{gig.price}</td>
                <td>{gig.sales}</td>
                <td>
                  <img
                    src="/delete.png"
                    alt=""
                    className="w-5 cursor-pointer"
                    onClick={() => handleDelete(gig._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
