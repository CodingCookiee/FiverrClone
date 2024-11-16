import Review from "../review/Review.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient()
  const [errorClass, setErrorClass] = useState(null);

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`)
        .then((res) => {
          return res.data;
        })
  });

  const mutation = useMutation({
    mutationKey: ["createReview"],
    mutationFn: (review) =>{
      return newRequest.post(`/reviews`, review)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    }
  });
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({ gigId, desc, star });
    setErrorClass(mutation.error?.response?.data);
  };
  console.log(mutation.error?.response?.data);

  return (
    <>
      {isLoading ? (
        <div className="user flex items-center gap-2.5">Loading...</div>
      ) : error ? (
        <div className="user flex items-center gap-2.5">
          Something went wrong{" "}
        </div>
      ) : (
        data?.map((review) => <Review key={review._id} review={review} />)
      )}
      <div className="addReview flex flex-col gap-5 mt-5">
        <h3 className="font-medium text-lg text-[gray] ">Add a Review</h3>
        <form
          action=""
          className="addForm flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="write your review here . . ."
            className="p-5 pt-10 pb-10 border border-solid border-[lightgrey] rounded-md outline-none"
          />
          <select
            name=""
            id="rate"
            className="p-5 w-[200px] border-solid block px-4 py-2 pr-8
           text-gray-500 bg-white border border-gray-300 rounded-md 
           shadow-sm focus:border-gray-500 focus:outline-none
            focus:ring-1 focus:ring-gray-200 cursor-pointer appearance-none" 
          >
            <option className="text-base font-light " value={0}>
              Rate this Gig{" "}
            </option>
            <option className="text-base font-light " value={1}>
              1
            </option>
            <option className="text-base font-light" value={2}>
              2
            </option>
            <option className="text-base font-light" value={3}>
              3
            </option>
            <option className="text-base font-light" value={4}>
              4
            </option>
            <option className="text-base font-light" value={5}>
              5
            </option>
          </select>
          <button className="w-[100px] bg-[#1dbf73] p-2.5 text-white font-medium border-none text-[18px] cursor-pointer">
            Send
          </button>
          {errorClass && <span className="text-red-500">{errorClass}</span>}
        </form>
      </div>
    </>
  );
};

export default Reviews;
