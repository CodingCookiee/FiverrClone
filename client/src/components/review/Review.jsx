import React from "react";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import PropTypes from "prop-types";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviewUser", review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    
    <div className="review pb-5">
      <div className="item flex flex-col gap-5 mb-5 ml-0 mr-0">
        {isLoading ? (
          <div className="user flex items-center gap-2.5">Loading...</div>
        ) : error ? (
          <div className="user flex items-center gap-2.5">
            Something went wrong
          </div>
        ) : (
          <div className="user flex items-center">
            <img
              src={data?.img || "/noavatar.jpg"}
              alt=""
              className="w-[50px] h-[50px] rounded-[50%] object-cover"
            />
            <div className="info flex flex-col gap-0.5 ml-2">
              <span>{data?.username}</span>
              <div className="country flex items-center gap-2.5 text-[gray]">
                <span>{data?.country}</span>
              </div>
            </div>
          </div>
        )}
        <div className="stars flex gap-[5px]">
          {Array(review.star)
            .fill()
            .map((item, i) => (
              <img
                src="/star.png"
                alt=""
                className="h-[14px] w-[14px]"
                key={i}
              />
            ))}
          <span className="text-md font-bold text-[#bdbcbc]">
            {review?.star}
          </span>
        </div>
        <p>{review?.desc || ""}</p>
        <div className="helpful flex items-center gap-2.5">
          <span>Helpful?</span>
          <img src="/like.png" alt="" className="w-5 cursor-pointer" />
          <span>Yes</span>
          <img src="/dislike.png" alt="" className="w-5 cursor-pointer" />
          <span>No</span>
        </div>
      </div>
      <hr className="h-0 m-[50px] ml-0 mr-0 border-[0.5px] border-solid border-[lightgrey]" />
    </div>
    
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    desc: PropTypes.string,
  }).isRequired,
};

export default Review;
