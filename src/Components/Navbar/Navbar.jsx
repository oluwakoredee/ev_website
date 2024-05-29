import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="nav ">
      <div className="nav-logo mt-[-35px] ml-[-80px] xl:ml-6">EV-olution</div>
      {/* <ul className='nav-menu'>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </ul> */}

      <div className="md:flex hidden  lg:flex xl:mt-2 lg:bg-transparent xl:gap-[90px] uppercase lg:backdrop-blur-lg lg:mt-[40px] lg:pr-[200px] lg:gap-10 md:bg-[rgb(255,255,255,4%)] p-5 text-white gap-5 xl:pr-[0px]">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2  border-white flex items-center  gap-2 "
              : " flex items-center  gap-2"
          }
          to={"/"}
        >
          <p>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white flex items-center  gap-2"
              : "flex items-center gap-2"
          }
          to={"/destination"}
        >
          <p>Explore</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white flex items-center  gap-2"
              : "flex items-center gap-2"
          }
          to={"crew"}
        >
          <p>About</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "  flex items-center  gap-2"
              : "flex items-center gap-2"
          }
          to={"Technology"}
        >
          <p className="bg-white text-black p-3 px-5 rounded-full">Contact</p>
        </NavLink>
      </div>
      <div className="md:hidden xl:hidden ">
        <span
          className="text-white relative z-40"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-8  text-3xl right-5 top-5 fixed z-30"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dhvwthnzq/image/upload/v1710170668/space-tour/Group_lvuedt.png"
              alt=""
              className="h-8 text-3xl right-5 top-5 fixed z-30"
            />
          )}
        </span>
        {show && (
          <div className="bg-slate-400 uppercase z-30 h-full  w-[50%] text-white bg-transparent  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-[-12px] text-base   pl-5 pr-20 top-0 pt-20 absolute  ">
            <NavLink className="flex items-center gap-2" to={"/"}>
              <p>Home</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/destination"}>
              <p>Explore</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"crew"}>
              <p>About</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"Technology"}>
              <p>Contact</p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
