import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message flex justify-center">
      <div className="container w-[1400px] m-[50px]">
        <span className="breadcrumbs font-light text-[13px] text-[#555]">
          <Link to="/messages">Messages</Link> {'>'} John Doe {'>'}
        </span>
        <div className="messages m-[30px] ml-0 mr-0 p-[50px] flex 
        flex-col gap-5 h-[500px] overflow-y-scroll">
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px]  owner flex-row-reverse self-end	">
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tr-3xl  bg-[#e7e7e7] p-5 text-[#5e5d5d] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item  flex gap-5 max-w-[600px] text-[18px] ">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="w-[40px] h-[40px] rounded-[50%] object-cover"
            />
            <p className="max-w-[500px] rounded-b-3xl rounded-tl-3xl p-5 bg-[royalblue] text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr  className="h-0 border-[0.5px] border-solid border-[lightgrey] mb-5"/>
        <div className="write flex items-center justify-between">
          <textarea type="text" placeholder="write your message" className="w-[80%] h-[100px] min-h-[100px] p-2.5
          border border-solid border-[lightgrey] rounded-[10px] " />
          <button className="bg-[#1dbf73] hover:bg-[#40e076] p-5 text-white rounded-[10px] 
          font-medium border-none cursor-pointer w-[100px]">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;