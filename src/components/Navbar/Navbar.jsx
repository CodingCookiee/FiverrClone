import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className='navbar flex flex-col items-center bg-[#013914]
         text-white font-[Montserrat]'>
        <div className='container w-[1400px] flex justify-between p-5 pl-0 pr-0'>
        <div className='logo font-bold text-2xl '>
        {/* <Link to='/'> */}
        <span className='text '>fiverr</span>
        {/* </Link> */}
            <span className='dot text-[#1dbf73]'>.</span>
        </div>
        <div className='links flex gap-6 items-center font-normal'>
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign in</span>
            <span>Become a Seller</span>
            <button className='btn text-white p-[10px] pl-5 pr-5 
            rounded-sm border border-solid border-white bg-transparent 
            cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]'>Join</button>
        </div>
        </div>
        <hr className='w-full h-0  border-[#ebebeb] border-solid'/>
        <div className='menu flex justify-between w-[1400px] p-[10px]
         pl-0 pr-0 font-light text-[Montserrat] text-slate-400'>
        <span>Test</span>
        <span>Test</span>
        <span>Test</span>
        <span>Test</span>
        </div>
        </div>
      
    );
}
export default Navbar