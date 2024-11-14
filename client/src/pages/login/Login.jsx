import React from 'react';


const Login = () => {
    return (
        <div className='login flex items-center justify-center'>
            <div className="login">
      <form
      className='w-[300px] h-full p-[100px] pl-0 pr-0 flex flex-col gap-5 '
      >
        <h1 className='text-[gray] mb-5 font-light text-2xl'>Sign in</h1>
        <label htmlFor="username" className='text-[gray] text-[18-px]'>Username</label>
        <input
          name="username"
          type="text"
          id='username'
          placeholder="John Doe"
          className='p-5 border border-solid border-[lightgrey] rounded-md'
        />

        <label htmlFor="password" className='text-[gray] text-[18-px]'>Password</label>
        <input
          name="password"
          type="password"
          id='password'
          className='p-5 border border-solid border-[lightgrey] rounded-sm'
        />
        <button 
        type="submit"
        className='border-none p-5 text-white font-medium bg-[#1dbf73]
        hover:bg-[#10b981] transition-all rounded-md mt-5 text-[18px] cursor-pointer'
         >Login</button>
      </form>
    </div>
        </div>
    );
}

export default Login;
