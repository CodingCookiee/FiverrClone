 import React from "react";

const Features = () => {
    const paraClass = "text-sm text-gray-500 font-light leading-7 tracking-normal	";
    const titleClass = "flex items-center gap-2.5 font-medium text-gray-500 text-xl";
    const img = "w-5 h-5";
    const expLine = "w-[50px] h-[2px] bg-gray-500 transition-all duration-1000 ease-in-out hover:w-[80px] hover:bg-[#1dbf73]"
    const expItem = "item flex flex-col items-center justify-center gap-2.5 text-center cursor-pointer w-[250px] h-[150px]"
  return (
    <>
      <div className="features bg-[#f1fdf7] flex justify-center p-[100px] pl-0 pr-0">
        <div className="container flex items-center w-[1400px] gap-6">
          <div className="item flex flex-col gap-3">
            <h1 className="font-bold mb-2.5 text-2xl ">A whole world of freelance talent at your fingertips</h1>
            <div className={titleClass}>
              <img src="/check.png" alt="" className={img} />
              The best for every budget
            </div>
            <p className={paraClass}>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className={titleClass}>
              <img src="/check.png" alt="" className={img} />
              Quality work done quickly
            </div>
            <p className={paraClass}>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className={titleClass} >
              <img src="check.png" alt=""  className={img}/>
              Protected payments, every time
            </div>
            <p className={paraClass}>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className={titleClass}>
              <img src="/check.png" alt="" className={img} />
              24/7 support
            </div>
            <p className={paraClass}>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item bg-black  w-[700px]">
            <video src="/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore flex justify-center p-[100px] pl-0 pr-0">
        <div className="container w-[1400px] ">
          <h1 className="font-bold text-3xl text-[#555]">Explore the marketplace</h1>
          <div className="items flex justify-between flex-wrap w-full">
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
                className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Graphics & Design</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>

              <span className="font-light text-sm">Digital Marketing</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Writing & Translation</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Video & Animation</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Music & Audio</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Programming & Tech</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Business</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Lifestyle</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Data</span>
            </div>
            <div className={expItem}>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
                 className="w-10 h-10"
              />
              <div className={expLine}></div>
              <span className="font-light text-sm">Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark bg-[#0d084d] p-[100px] pl-0 pr-0 flex justify-center items-center">
        <div className="container text-white flex items-center justify-between w-[1400px] gap-5">
          <div className="item">
            <h1 className="font-bold text-4xl mb-2.5">
              Fiverr <i className="font-light">business</i>
            </h1>
            <h1 className="font-bold text-3xl mb-5">
              A business solution designed for <i className="font-light">teams</i>
            </h1>
            <p className= 'text-white mb-5 text-lg'>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title text-white font-light text-md flex gap-2.5 mb-3">
              <img src="check.png" alt="" className="w-5 h-5" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title text-white font-light text-md flex gap-2.5 mb-2">
              <img src="check.png" alt="" className="w-5 h-5" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title text-white font-light text-md flex gap-2.5 mb-1" >
              <img src="/check.png" alt=""  className="w-5 h-5"/>
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button className="bg-[#1dbf73] border-none text-white
             p-[10px] pl-[20px] pr-[20px] rounded-sm w-max cursor-pointer text-md mt-5">
             Explore Fiverr Business
             </button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Features;
