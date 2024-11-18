import "./featured.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const popularBtn =
    "text-white bg border border-solid border-white rounded-3xl text-sm p-[5px] pl-2.5 pr-2.5 cursor pointer";

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/gigs?search=${encodeURIComponent(input)}`);
    };
    

  return (
    <div
      className="featured flex justify-center bg-[#013914] 
    h-[600px] text-white"
    >
      <div className="featured__container flex items-center w-[1400px]">
        <div className="featured__left flex flex-col gap-8">
          <h1 className="text-6xl font-normal">
            Find the perfect <i className="font-light ">freelance</i> services
            for your business
          </h1>
          <div
            className="search flex items-center justify-between
           bg-white rounded-md overflow-hidden"
          >
            <div className="searchInput flex items-center gap-2.5">
              <img src="/search.png" alt="" className="w-5 h-5 m-2.5" />
              <input
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Search for any service . . ."
                className="text-gray-500 w-[300px] h-8 rounded-md p-2 border-none
               outline-none shadow-sm appearance-none focus:outline-none "
              />
            </div>
            <button
              onClick={handleSubmit}
              className=" w-[120px] h-[50px] border-none bg-[#1dbf73] cursor-pointer"
            >
              Search
            </button>
          </div>
          <div className="popular flex items-center gap-2.5 ">
            <span>Popular:</span>
            <button className={popularBtn}>Web Design</button>
            <button className={popularBtn}>WordPress</button>
            <button className={popularBtn}>Logo Design</button>
            <button className={popularBtn}>AI Services</button>
          </div>
        </div>
        <div className="featured__right">
          <div className="featured__right__image">
            <img
              src="/man.png"
              alt="Featured Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
