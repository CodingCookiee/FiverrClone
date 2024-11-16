import Review from "../review/Review.jsx";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";

const Reviews = ({ gigId }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/gigs/reviews${gigId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <>
      {isLoading ? (
        <div className="user flex items-center gap-2.5">Loading...</div>
      ) : error ? (
        <div className="user flex items-center gap-2.5">Something went wrong </div>
      ) : (
        data?.map((review) => <Review key={review._id} review={review} />)
      )}
    </>
  );
};

export default Reviews;
