import "./add.css";
import React from "react";

const Add = () => {
  return (
    <div className="add flex justify-center">
      <div className="container w-[1400px] p-[50px] pl-0 pr-0">
        <h1 className="w-max mb-[30px] text-[gray] font-light text-2xl">
          Add New Gig
        </h1>
        <div className="sections flex justify-between gap-24">
          <div className="info flex-1 flex flex-col gap-2.5 justify-between">
            <label htmlFor="text" className="text-[gray] text-[18px]">
              Title
            </label>
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="cats" className="text-[gray] text-[18px]">
              Category
            </label>
            <select
              name="cats"
              id="cats"
              className="p-5  border-solid  block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md 
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option   className="text-base font-light" value="design">Design</option>   
              <option   className="text-base font-light" value="web">Web Development</option>  
              <option   className="text-base font-light" value="animation">Animation</option>  
              <option   className="text-base font-light" value="music">Music</option> 
            </select>
            <label htmlFor="cover" className="text-[gray] text-[18px]">
              Cover Image
            </label>
            <input className="p-5 " type="file" id="cover"/>
            <label htmlFor="img" className="text-[gray] text-[18px]">
              Upload Images
            </label>
            <input className="p-5 " type="file" id="img" multiple />
            <label htmlFor="desc" className="text-[gray] text-[18px]">
              Description
            </label>
            <textarea
              name=""
              id="desc"
              placeholder="Brief descriptions to introduce your service to customers"
              cols="0"
              rows="16"
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            ></textarea>
            <button
              className="border-none p-5 text-white font-medium
             bg-[#1dbf73] text-[18px] cursor-pointer rounded-md hover:bg-[#10b981]"
            >
              Create
            </button>
          </div>
          <div className="details flex-1 flex flex-col gap-2.5 justify-between mt-2">
            <label htmlFor="service" className="text-[gray] text-[18px] mb-1">
              Service Title
            </label>
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="service"
              placeholder="e.g. One-page web design"
            />
            <label htmlFor="sDesc" className="text-[gray] text-[18px]">
              Short Description
            </label>
            <textarea
              name=""
              id="sDesc"
              placeholder="Short description of your service"
              cols="30"
              rows="10"
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
            ></textarea>
            <label htmlFor="delivery" className="text-[gray] text-[18px]">
              Delivery Time (e.g. 3 days)
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id="delivery"
            />
            <label htmlFor="rev" className="text-[gray] text-[18px]">
              Revision Number
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id="rev"
            />
            <label htmlFor="features" className="text-[gray] text-[18px]">
              Add Features
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              id="features"
              placeholder="e.g. page design"
            />
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              placeholder="e.g. file uploading"
            />
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              placeholder="e.g. setting up a domain"
            />
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="text"
              placeholder="e.g. hosting"
            />
            <label htmlFor="price" className="text-[gray] text-[18px]">
              Price
            </label>{" "}
            <input
              className="p-5 border border-solid border-[lightgrey] rounded-md
              shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200"
              type="number"
              id='price'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
