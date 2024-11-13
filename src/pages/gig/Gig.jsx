import "./gig.css";
import React from "react";
import { Slider } from "infinite-react-carousel/lib";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons

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

  return (
    <div className="gig flex justify-center">
      <div className="container w-[1400px] flex gap-[50px] p-[30px] pl-0 pr-0">
        <div className="left flex-[2] flex flex-col gap-5">
          <span className="breadcrumbs font-light text-uppercase text-[13px] text-[#555]">
            Fiverr {'>'} Graphics & Design {'>'}
          </span>
          <h1 className="font-bold text-2xl">
            I will create ai generated art for you
          </h1>
          <div className="user flex items-center gap-2.5">
            <img
              className="pp w-[32px] h-[32px] rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="font-medium text-sm">Anna Bell</span>
            <div className="stars flex items-center gap-0.5">
              <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
              <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
              <span className="text-md font-bold text-[#bdbcbc]">5</span>
            </div>
          </div>
          <Slider {...settings} className="slider ">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
          </Slider>
          <h2 className="font-normal">About This Gig</h2>
          <p className="font-light text-[#555] leading-6	">
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller mt-[50px] flex flex-col gap-5">
            <h2>About The Seller</h2>
            <div className="user flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100px] h-[100px] rounded-[50%] object-cover"
              />
              <div className="info flex flex-col gap-2.5">
                <span>Anna Bell</span>
                <div className="stars flex items-center gap-[5px]">
                  <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                  <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                  <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                  <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                  <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                  <span className="text-md font-bold text-[#bdbcbc]">5</span>
                </div>
                <button className="bg-white rounded-md border border-solid border-[gray] p-[10px]">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="box border border-solid border-[#bdbcbc] p-[20px] rounded-md mt-5">
              <div className="items flex justify-between flex-wrap ">
                <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                  <span className="title font-light">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item  w-[300px] flex flex-col gap-2.5 mb-2.5">
                  <span className="title font-light">Avg. response time</span>
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
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews mt-[50px]">
            <h2>Reviews</h2>
            <div className="item  flex flex-col gap-5 mb-5 ml-0 mr-0 ">
              <div className="user flex items-center">
                <img
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="w-[50px] h-[50px] rounded-[50%] object-cover"
                />
                <div className="info flex flex-col gap-0.5 ml-2">
                  <span>Garner David</span>
                  <div className="country flex items-center gap-2.5 text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <span className="text-md font-bold text-[#bdbcbc] ">5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful flex items-center gap-2.5">
                <span>Helpful?</span>
                <img src="/like.png" alt="" className="w-5 cursor-pointer" />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className="w-5 cursor-pointer" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-0 border-[0.3px] border-solid border-[#e9e8e8] m-[50px] ml-0 mr-0" />
            <div className="item  flex flex-col gap-5 mb-5 ml-0 mr-0 ">
              <div className="user flex items-center">
                <img
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="pp w-[50px] h-[50px] rounded-[50%] object-cover"
                />
                <div className="info flex flex-col gap-0.5 ml-2">
                  <span>Sidney Owen</span>
                  <div className="country flex items-center gap-2.5 text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                      className="w-5"
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <span className="text-md font-bold text-[#bdbcbc] ">5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful flex items-center gap-2.5">
                <span>Helpful?</span>
                <img src="/like.png" alt="" className="w-5 cursor-pointer" />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className="w-5 cursor-pointer" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-0 border-[0.3px] border-solid border-[#e9e8e8] m-[50px] ml-0 mr-0" />
            <div className="item  flex flex-col gap-5 mb-5 ml-0 mr-0 ">
              <div className="user flex items-center">
                <img
                 
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                  className="pp w-[50px] h-[50px] rounded-[50%] object-cover"
                />
                <div className="info flex flex-col gap-0.5 ml-2">
                  <span>Lyle Giles </span>
                  <div className="country flex items-center gap-2.5 text-[gray]">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-5"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <img src="/star.png" alt="" className="h-[14px] w-[14px]" />
                <span className="text-md font-bold text-[#bdbcbc] ">5</span>
              </div>
              <p>
                The designer took my photo for my book cover to the next level!
                Professionalism and ease of working with designer along with
                punctuality is above industry standards!! Whatever your project
                is, you need this designer!
              </p>
              <div className="helpful flex items-center gap-2.5">
                <span>Helpful?</span>
                <img src="/like.png" alt="" className="w-5 cursor-pointer" />
                <span>Yes</span>
                <img src="/dislike.png" alt="" className="w-5 cursor-pointer" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex-1 border border-solid border-[#e9e8e8] p-5 flex flex-col gap-5 h-max max-h-[500px] sticky top-[150px]">
          <div className="price flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light">$ 59.99</h2>
          </div>
          <p className="text-[gray] m-[10px] ml-0 mr-0">
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details flex items-center justify-between text-sm">
            <div className="item flex items-center gap-2.5">
              <img src="/clock.png" alt="" className="w-5" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item flex items-center gap-2.5 ">
              <img src="/recycle.png" alt="" className="w-5" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features ">
            <div className="item flex items-center gap-2.5 mb-[5px] font-light text-[gray]">
              <img src="/greencheck.png" alt="" className="w-5" />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center gap-2.5 mb-[5px] font-light text-[gray]">
              <img src="/greencheck.png" alt="" className="w-5" />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center gap-2.5 mb-[5px] font-light text-[gray]">
              <img src="/greencheck.png" alt="" className="w-5" />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center gap-2.5 mb-[5px] font-light text-[gray]">
              <img src="/greencheck.png" alt="" className="w-5" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-[#1dbf73] p-2.5 text-white font-medium border-none text-[18px] cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
