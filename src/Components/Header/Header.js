import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiWechatFill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { GiCircleClaws } from "react-icons/gi";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="w-full h-12 bg-white drop-shadow-md sticky top-0 header_nav ">
        <div className="px-10 py-4 inline-flex">
          <button>
            <FaBars
              onClick={() => setNavbar(!navbar)}
              className="text-xl font-light "
            />
          </button>
          <div className=" absolute right-0 inline-flex gap-x-5 px-10">
            <div className="inline-flex gap-x-1 text-slate-500">
              <small className="text-xs">Help</small>
              <AiOutlineQuestionCircle />
            </div>
            <div className="inline-flex gap-x-1 text-slate-500">
              <small>FAQ</small>
              <RiWechatFill />
            </div>

            <BsSearch className="text-2xl " />
            <GiCircleClaws className="text-2xl " />
          </div>
        </div>
      </div>
      <nav
        className={
          navbar
            ? "absolute z-10 w-56 bg-white text-white h-full navbar transition duration-500 ease "
            : "absolute navbar z-10 w-56 bg-white text-white h-full  transform -translate-x-full transition duration-500 ease"
        }
      >
        <div className="divide-y divide-slate-300 text-black text-sm font-semibold ">
          <div className="py-2 pl-5 mt-2 hover:bg-blue-700 hover:text-white">
            <span>Home</span>
          </div>
          <div>
            <Link to="/Profile">
              <div className=" py-2 pl-5 hover:bg-blue-700 hover:text-white">
                Profile
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Message">
              <div className=" py-2 pl-5 hover:bg-blue-700 hover:text-white">
              Messaging
              </div>
            </Link>
          </div>
          <div>
            <Link to="/Survey">
              <div className=" py-2 pl-5 hover:bg-blue-700 hover:text-white">
              Survey
              </div>
            </Link>
          </div>
          <div className="py-2 pl-5 hover:bg-blue-700 hover:text-white">
            <span>Appointment System</span>
          </div>
          <div className="py-2 pl-5 hover:bg-blue-700 hover:text-white">
            <span>Upload Documents</span>
          </div>
          <div className="py-2 pl-5 hover:bg-blue-700 hover:text-white">
            <span>Work Pipeline</span>
          </div>
          <div className="py-2 pl-5 hover:bg-blue-700 hover:text-white">
            <span>Services</span>
          </div>
          <div className="py-2 pl-5 hover:bg-blue-700 hover:text-white">
            <span>Library</span>
          </div>
          <div>
            <Link to="/">
              <div className=" py-2 pl-5 hover:bg-blue-700 text-rose-600">
                Signout
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
