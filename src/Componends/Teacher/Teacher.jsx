import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import About from "../About/About";

const Teacher = () => {
  return (
    <div>
      <About></About>
      <div className="container-full mx-auto bg-[#F9F9F9] ">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Teacher</h2>
          <p>Meet Professional Trainers</p>
        </div>
        <div className=" flex flex-cols container mx-auto gap-5 my-10">
          <div className="w-64">
            <div className="text-center bg-white">
              <img
                src="/src/assets/images/author-image1.jpg"
                alt=""
                className=""
              />
              <h2 className="font-bold text-xl text-[#454545]">Mark Wilson</h2>
              <p className="text-sm mb-5">I love Teaching</p>
            </div>
            <div className=" w-64 bg-red-500"></div>
            <div className="flex flex-row space-x-8 bg-white pb-5 bg-whiteitems-start justify-center  ">
              <FaFacebookSquare></FaFacebookSquare>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
            </div>
          </div>
          <div className="w-64">
            <div className="text-center bg-white">
              <img
                src="/src/assets/images/author-image2.jpg"
                alt=""
                className=""
              />
              <h2 className="font-bold text-xl text-[#454545]">Catherine</h2>
              <p className="text-sm mb-5">Education is the key!</p>
            </div>
            <div className=" w-64 bg-red-500"></div>
            <div className="flex flex-row space-x-8 bg-white pb-5 bg-whiteitems-start justify-center  ">
              <FaFacebookSquare></FaFacebookSquare>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
            </div>
          </div>
          <div className="w-64">
            <div className="text-center bg-white">
              <img
                src="/src/assets/images/author-image3.jpg"
                alt=""
                className=""
              />
              <h2 className="font-bold text-xl text-[#454545]">Jessie Ca</h2>
              <p className="text-sm mb-5">I like Online Courses</p>
            </div>
            <div className=" w-64 bg-red-500"></div>
            <div className="flex flex-row space-x-8 bg-white pb-5 bg-whiteitems-start justify-center  ">
              <FaFacebookSquare></FaFacebookSquare>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
            </div>
          </div>
          <div className="w-64">
            <div className="text-center bg-white">
              <img
                src="/src/assets/images/author-image4.jpg"
                alt=""
                className=""
              />
              <h2 className="font-bold text-xl text-[#454545]">Andrew Berti</h2>
              <p className="text-sm mb-5">Learning is fun</p>
            </div>
            <div className=" w-64 bg-red-500"></div>
            <div className="flex flex-row space-x-8 bg-white pb-5 bg-whiteitems-start justify-center  ">
              <FaFacebookSquare></FaFacebookSquare>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
