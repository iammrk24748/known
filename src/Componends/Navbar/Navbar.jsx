import React from "react";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-full mx-auto ">
      <div className="border-2 border-[#29CA8E] w-full mt-2 overflow-hidden inline-block"></div>
      <div className="-mt-6">
        <div className=" ">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li>Home</li>
                  <li>About</li>
                  <li>Our Teachers</li>
                  <li>Courses</li>
                  <li>Reviews</li>
                  <li>Contact</li>
                </ul>
              </div>
              <Link to="/">
                <p className="btn btn-ghost text-xl">Known</p>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <Link to="/">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    Home
                  </li>
                </Link>
                <Link to="about">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    About
                  </li>
                </Link>
                <Link to="our-teachers">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    Our Teachers
                  </li>
                </Link>
                <Link to="courses">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    Courses
                  </li>
                </Link>
                <Link to="review">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    Reviews
                  </li>
                </Link>
                <Link to="contact">
                  <li className="px-5 py-8 hover:bg-[#29CA8E] hover:text-white text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
            <div className="navbar-end ">
              <div className=" hover:bg-[#29CA8E] hover:text-white flex justify-center items-center px-5 py-8">
                <IoCall></IoCall>
                <p className="ml-5 inline-block">+880 1627 282572</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
