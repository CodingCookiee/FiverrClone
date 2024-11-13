import './footer.css'
import React from 'react';

const Footer = () => {
    return (
        <div className="footer flex justify-center m-[50px] ml-0 mr-0">
      <div className="container w-[1400px]">
        <div className="top flex justify-between">
          <div className="item flex flex-col gap-5">
            <h2 className='text-md font-semibold '>Categories</h2>
            <span className='font-light text-[#555]'>Graphics & Design</span>
            <span className='font-light text-[#555]'>Digital Marketing</span>
            <span className='font-light text-[#555]'>Writing & Translation</span>
            <span className='font-light text-[#555]'>Video & Animation</span>
            <span className='font-light text-[#555]'>Music & Audio</span>
            <span className='font-light text-[#555]'>Programming & Tech</span>
            <span className='font-light text-[#555]'>Data</span>
            <span className='font-light text-[#555]'>Business</span>
            <span className='font-light text-[#555]'>Lifestyle</span>
            <span className='font-light text-[#555]'>Photography</span>
            <span className='font-light text-[#555]'>Sitemap</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className='text-md font-semibold '>About</h2>
            <span className='font-light text-[#555]'>Press & News</span>
            <span className='font-light text-[#555]'>Partnerships</span>
            <span className='font-light text-[#555]'>Privacy Policy</span>
            <span className='font-light text-[#555]'>Terms of Service</span>
            <span className='font-light text-[#555]'>Intellectual Property Claims</span>
            <span className='font-light text-[#555]'>Investor Relations</span>
            <span className='font-light text-[#555]'>Contact Sales</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className='text-md font-semibold'>Support</h2>
            <span className='font-light text-[#555]'>Help & Support</span>
            <span className='font-light text-[#555]'>Trust & Safety</span>
            <span className='font-light text-[#555]'>Selling on fiverr</span>
            <span className='font-light text-[#555]'>Buying on fiverr</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className='text-md font-semibold'>Community</h2>
            <span className='font-light text-[#555]'>Customer Success Stories</span>
            <span className='font-light text-[#555]'>Community hub</span>
            <span className='font-light text-[#555]'>Forum</span>
            <span className='font-light text-[#555]'>Events</span>
            <span className='font-light text-[#555]'>Blog</span>
            <span className='font-light text-[#555]'>Influencers</span>
            <span className='font-light text-[#555]'>Affiliates</span>
            <span className='font-light text-[#555]'>Podcast</span>
            <span className='font-light text-[#555]'>Invite a Friend</span>
            <span className='font-light text-[#555]'>Become a Seller</span>
            <span className='font-light text-[#555]'>Community Standards</span>
          </div>
          <div className="item flex flex-col gap-5">
            <h2 className='text-md font-semibold'>More From Fiverr</h2>
            <span className='font-light text-[#555]'>fiverr Business</span>
            <span className='font-light text-[#555]'>fiverr Pro</span>
            <span className='font-light text-[#555]'>fiverr Logo Maker</span>
            <span className='font-light text-[#555]'>fiverr Guides</span>
            <span className='font-light text-[#555]'>Get Inspired</span>
            <span className='font-light text-[#555]'>fiverr Select</span>
            <span className='font-light text-[#555]'>ClearVoice</span>
            <span className='font-light text-[#555]'>fiverr Workspace</span>
            <span className='font-light text-[#555]'>Learn</span>
            <span className='font-light text-[#555]'>Working Not Working</span>
          </div>
        </div>
        <hr className='m-[50px] ml-0 mr-0 h-0 border border-solid border-[#e5e5e5]' />
        <div className="bottom flex items-center justify-between">
          <div className="left w-max flex items-center justify-center gap-2">
            <h2 className='text-xl font-bold text-[#555]'>fiverr</h2>
            <span className='whitespace-nowrap text-sm'>© fiverr International Ltd. 2023</span>
          </div>
          <div className="right w-max flex items-center gap-7">
            <div className="social flex gap-5">
              <img src="/twitter.png" alt="" />
              <img src="/facebook.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/pinterest.png" alt="" />
              <img src="/instagram.png" alt="" />
            </div>
            <div className="link flex items-center gap-2.5">
              <img src="/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link flex items-center gap-2.5 ">
              <img src="/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    );
}

export default Footer;
