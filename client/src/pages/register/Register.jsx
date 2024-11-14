import React from 'react';
import ToggleSwitch from './toggleSwitch';

const Register = () => {
    return (
        <div className="register flex items-center justify-center ">
        <form
        className='w-[960px] flex gap-[120px] p-[100px] pl-0 pr-0'
        >
          <div className="left flex-1 flex flex-col gap-2.5 justify-between">
            <h1 className='text-[#555555] font-semibold text-2xl'>Create a new account</h1>
            <label htmlFor="username" className='color-[gray] text-[18px]'>Username</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
              name="username"
              type="text"
              id='username'
              placeholder="John Doe"
             
            />
            <label htmlFor="email" className='color-[gray] text-[18px]'>Email</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
              name="email"
              type="email"
              id='email'
              placeholder="johndoe@example.com"
             
            />
            <label htmlFor="password" className='color-[gray] text-[18px]'>Password</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200' name="password" type="password" id='password'/>
            <label htmlFor="file" className='color-[gray] text-[18px]'>Profile Picture</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200' type="file" id='file' />
            <label htmlFor="country" className='color-[gray] text-[18px]'>Country</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
              name="country"
              type="text"
              id='country'
              placeholder="Usa"
             
            />
            <button
            className='bg-[#1dbf73] hover:bg-[#10b981] transition-all text-[white] p-[20px] rounded-md border-none font-medium text-[18px] cursor-pointer'
             type="submit"
             >Register</button>
          </div>
          <div className="right flex-1 flex flex-col gap-2.5 justify-between">
            <h1 className='text-[#555555] font-semibold text-2xl'>I want to become a seller</h1>
            <div className="toggleSwitch flex items-center gap-2">
            <label htmlFor="toggle" className='color-[gray] text-[18px]'>Activate the seller account</label>
            <ToggleSwitch />
            </div>
            <label htmlFor="phone" className='color-[gray] text-[18px]'>Phone Number</label>
            <input
            className='p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
              name="phone"
              type="text"
              id='phone'
              placeholder="+1 234 567 89"
             
            />
            <label htmlFor="desc" className='color-[gray] text-[18px]'>Description</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id="desc"
              cols="30"
              rows="10"
               className='min-h-[200px] p-[20px] border border-solid border-[lightgrey] rounded-md  shadow-sm appearance-none focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-200'
            ></textarea>
          </div>
        </form>
      </div>
    );
}

export default Register;
