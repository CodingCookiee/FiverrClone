import "./gig.css";
import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reviews from "../../components/review/Reviews";


// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-prev-arrow">
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-next-arrow">
    <FaArrowRight />
  </button>
);

const Gig = () => {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    duration: 500,
    arrows: true,
    arrowsScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: userLoading,
    error: userError,
    data: userData,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig flex justify-center">
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
        <div className="container w-[1400px] flex gap-[50px] p-[30px] pl-0 pr-0">
          <div className="left flex-[2] flex flex-col gap-5">
            <span className="breadcrumbs font-light text-uppercase text-[13px] text-[#555]">
              Fiverr {">"} Graphics & Design {">"}
            </span>
            <h1 className="font-bold text-2xl">{data?.title}</h1>
            {userLoading ? (
              <div className="user flex items-center gap-2.5">Loading...</div>
            ) : userError ? (
              <div className="user flex items-center gap-2.5">
                Error loading user
              </div>
            ) : (
              <div className="user flex items-center gap-2.5">
                <img
                  className="pp w-[32px] h-[32px] rounded-[50%] object-cover"
                  src={userData?.img || "/avatar.png"}
                  alt=""
                />
                <span className="font-medium text-sm">
                  {userData?.username || "Unknown User"}
                </span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars flex items-center gap-0.5">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img
                          src="/star.png"
                          alt=""
                          key={i}
                          className="h-[14px] w-[14px]"
                        />
                      ))}

                    <span className="text-md font-bold text-[#bdbcbc]">
                      {Math.round(data.totalStars / data.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}
            <Slider {...settings} className="slider ">
              {data?.images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt=""
                  className="max-h-[500px] object-contain"
                />
              ))}
            </Slider>
            <h2 className="font-normal">About This Gig</h2>
            <p className="font-light text-[#555] leading-6	">{data?.desc}</p>
            {userLoading ? (
              <div className="user flex items-center gap-2.5">Loading...</div>
            ) : userError ? (
              <div className="user flex items-center gap-2.5">
                Error loading user
              </div>
            ) : (
              <div className="seller mt-[50px] flex flex-col gap-5">
                <h2 className='font-medium text-xl text-[gray]'>About The Seller</h2>
                <div className="user flex items-center gap-5">
                  <img
                    src={userData?.img || "/avatar.png"}
                    alt=""
                    className="w-[100px] h-[100px] rounded-[50%] object-cover"
                  />
                  <div className="info flex flex-col gap-2.5">
                    <span>{userData?.username || "Unknown User"}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars flex items-center gap-0.5">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img
                              src="/star.png"
                              alt=""
                              key={i}
                              className="h-[14px] w-[14px]"
                            />
                          ))}

                        <span className="text-md font-bold text-[#bdbcbc]">
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button className="bg-white rounded-md border border-solid border-[gray] p-[10px]">
                      Contact Me
                    </button>
                  </div>
                </div>
                <div className="box border border-solid border-[#bdbcbc] p-[20px] rounded-md mt-5">
                  <div className="items flex justify-between flex-wrap ">
                    <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                      <span className="title font-light">From</span>
                      <span className="desc">{userData?.country}</span>
                    </div>
                    <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                      <span className="title font-light">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                      <span className="title font-light">
                        Avg. response time
                      </span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                      <span className="title font-light">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                      <span className="title font-light">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr className="h-0 border-[0.3px] border-solid border-[#e9e8e8]" />
                  <p>
                  {userData?.desc || "No description provided."}
                  </p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right flex-1 border border-solid border-[#e9e8e8] p-5 flex flex-col gap-5 h-max max-h-[500px] sticky top-[150px]">
            <div className="price flex items-center justify-between">
              <h3 className="font-medium">{data?.shortTitle}</h3>
              <h2 className="font-light">$ {data?.price}</h2>
            </div>
            <p className="text-[gray] m-[10px] ml-0 mr-0">{data?.shortDesc}</p>
            <div className="details flex items-center justify-between text-sm">
              <div className="item flex items-center gap-2.5">
                <img src="/clock.png" alt="" className="w-5" />
                <span>{data?.deliveryTime} Days Delivery</span>
              </div>
              <div className="item flex items-center gap-2.5 ">
                <img src="/recycle.png" alt="" className="w-5" />
                <span>{data?.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features ">
              {data?.features.map((feature, index) => (
                <div
                  key={index}
                  className="item flex items-center gap-2.5 mb-[5px] font-light text-[gray]"
                >
                  <img src="/greencheck.png" alt="" className="w-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="bg-[#1dbf73] p-2.5 text-white font-medium border-none text-[18px] cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
