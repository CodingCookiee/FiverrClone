
const Review = ( ) => {
  
  return(
    <div className="review mt-[50px] pb-5">
<h2 className='font-medium text-xl text-[gray] mb-5'>Reviews</h2>
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
    this, the only artist Ill be using on Fiverr. Communication
    was amazing, each and every day he sent me images that I was
    free to request changes to. They listened, understood, and
    delivered above and beyond my expectations. I absolutely
    recommend this gig, and know already that Ill be using it
    again very very soon
  </p>
  <div className="helpful flex items-center gap-2.5">
    <span>Helpful?</span>
    <img src="/like.png" alt="" className="w-5 cursor-pointer" />
    <span>Yes</span>
    <img
      src="/dislike.png"
      alt=""
      className="w-5 cursor-pointer"
    />
    <span>No</span>
  </div>
</div>
</div>

  );
}

export default Review;