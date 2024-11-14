import React from "react";
import { gigs } from "../../data.js";
import GigCard from "../../components/gigCard/GigCard.jsx";
import { useRef, useState } from "react";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs w-full flex justify-center">
      <div
        className="container w-[1400px] p-[30px] pl-0 pr-0 flex
         flex-col gap-[15px]"
      >
        <span className="breadcrumbs font-light text-[13px] text-[#555] text-uppercase ">
          Fiverr {'>'} Graphics & Design {'>'}
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
              {sort === "sales" ? "Best Selling" : "Newest"}
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
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards flex justify-between flex-wrap ">
          {gigs.map((gig) => (
            <GigCard item={gig} key={gig.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gigs;
