import React from "react";

const TrustedBy = () => {
    const imgClass = "h-[50px] object-contain"
  return (
    <div className="trustedB bg-[#fafafa] flex justify-center items-center h-[100px] ">
      <div className="container w-[760px] flex items-center justify-center gap-5 text-slate-500 ">
        <span className="font-medium">Trusted by:</span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt=""
          className={imgClass} 
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
          className={imgClass}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
          className={imgClass}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
          className={imgClass}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
          className={imgClass}
        />
      </div>
    </div>
  );
};

export default TrustedBy;
