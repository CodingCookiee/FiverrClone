import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };

  return (
    <div
      className={
        active || pathname !== "/"
          ? "navbar flex flex-col items-center bg-white text-black font-[Montserrat] sticky top-0"
          : "navbar flex flex-col items-center bg-[#013914] text-white font-[Montserrat] sticky top-0"
      }
    >
      <div className="container w-[1400px] flex justify-between p-5 pl-0 pr-0">
        <div className="logo font-bold text-2xl ">
          <Link to="/">
            <span className="text ">fiverr</span>
          </Link>
          <span className="dot text-[#1dbf73]">.</span>
        </div>
        <div className="links flex gap-6 items-center font-normal">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && (
            <button
              className="btn text-white p-[10px] pl-5 pr-5 
            rounded-sm border border-solid border-white bg-transparent 
            cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]"
            >
              Join
            </button>
          )}
          {currentUser && (
            <div
              className="user flex items-center 
            gap-2 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text">{currentUser?.username}</span>
              {open && (
                <div
                  className="options absolute top-12 right-0 bg-white p-5 
                rounded-lg flex flex-col gap-2 border border-solid
                border-gray-300 text-slate-500 w-[250px]"
                >
                  {currentUser?.isSeller && (
                    <div className="seller flex flex-col gap-2">
                      <Link to="/mygigs" className="text">
                        Gigs
                      </Link>
                      <Link to="/add" className="text">
                        Add New Gig
                      </Link>
                    </div>
                  )}
                  <Link to="/orders" className="text">
                    Orders
                  </Link>
                  <Link to="/messages" className="text">
                    Messages
                  </Link>
                  <Link className="text">Log Out</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className="w-full h-0  border-[#ebebeb] border-solid" />
          <div
            className="menu flex justify-between w-[1400px] p-[10px]
         pl-0 pr-0 font-light text-[Montserrat] text-slate-400"
          >
          <Link to='/' className="link menuLink">
            Graphics & Design
          </Link>
          <Link to='/' className="link">
            Videos & Animation
          </Link>
          <Link to='/' className="link">
            Writing and Translation
          </Link>
          <Link to='/' className="link">
            AI Services
          </Link>
          <Link to='/' className="link">
            Digital Marketing
          </Link>
          <Link to='/' className="link">
            Music & Audio
          </Link>
          <Link to='/' className="link">
            Programming & Tech
          </Link>
          <Link to='/' className="link">
            Business & Management
          </Link>
          <Link to='/' className="link">
            Finance
          </Link>
          
          
          </div>
        </>
      )}
    </div>
  );
};
export default Navbar;
