import React from "react";
import GigCard from "../../components/gigCard/GigCard.jsx";
import { useRef, useState, useEffect } from "react";
import { useQuery } from "react-query";
import newRequest from "../../utils/newRequest.js";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();

 // Modify the queryFn in useQuery to handle the popular sort
const { isLoading, error, data, refetch } = useQuery({
  queryKey: ["gigs", search, sort],
  queryFn: () => {
    return newRequest
      .get(
        `/gigs${search ? search : "?"}${search ? "&" : ""}min=${
          minRef.current.value || 0
        }&max=${maxRef.current.value || 1000000000}&sort=${sort}`
      )
      .then((res) => {
        let gigs = res.data;
        if (sort === "popular") {
          // Sort by rating, filtering for ratings > 4
          return gigs.sort((a, b) => {
            const ratingA = Math.round(a.totalStars / a.starNumber) || 0;
            const ratingB = Math.round(b.totalStars / b.starNumber) || 0;
            
            // First prioritize gigs with rating > 4
            const isHighRatedA = ratingA > 4;
            const isHighRatedB = ratingB > 4;
            
            if (isHighRatedA && !isHighRatedB) return -1;
            if (!isHighRatedA && isHighRatedB) return 1;
            
            // Then sort by actual rating value
            return ratingB - ratingA;
          });
        }
        return gigs;
      });
  },
});

  
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
  };

  return (
    <div className="gigs w-full flex justify-center">
      <div
        className="container w-[1400px] p-[30px] pl-0 pr-0 flex
         flex-col gap-[15px]"
      >
        <span className="breadcrumbs font-light text-[13px] text-[#555] text-uppercase ">
          Fiverr {">"} Graphics & Design {">"}
        </span>
        <h1 className="font-bold text-2xl">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with fiverr's AI artists
        </p>
        <div className="menu flex items-center justify-between mb-5">
          <div className="left flex items-center gap-2.5 text-[#555] font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="p-[5px] border border-solid border-[lightgrey] rounded-md outline-none text-[#999] "
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="p-[5px] border border-solid border-[lightgrey] rounded-md outline-none text-[#999]"
            />
            <button
              onClick={apply}
              className="p-[5px] pl-2.5 pr-2.5 bg-[#1dbf73] hover:bg-[#10b981] text-white border-none font-medium rounded-md cursor-pointer "
            >
              Apply
            </button>
          </div>
          <div className="right relative flex items-center gap-2.5">
            <span className="sortBy text-[#555] font-light">Sort by</span>
            <span className="sortType font-medium ">
              {sort === "sales"
                ? "Best Selling"
                : sort === "createdAt"
                ? "Newest"
                : "Popular"}
            </span>
            <img
              src="/down.png"
              alt=""
              onClick={() => setOpen(!open)}
              className="cursor-pointer w-[17px]"
            />
            {open && (
              <div
                className="rightMenu p-5 bg-white absolute top-[30px] right-0 z-10 
              flex flex-col gap-5 border border-solid border-[lightgrey] rounded-md text-[#555] cursor-pointer"
              >
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("popular")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards flex justify-between flex-wrap ">
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
            "Something went wrong!"
          ) : (
            data.map((gig) => <GigCard key={gig._id} item={gig} />)
          )}
        </div>
      </div>
    </div>
  );
};
export default Gigs;
