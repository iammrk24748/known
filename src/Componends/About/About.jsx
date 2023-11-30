import React from "react";
import { FaCertificate, FaUsers } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import Banner from "../Banner/Banner";

const About = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto grid grid-cols-2 ">
        <div className="">
          <h2 className="text-[#353535] text-3xl font-bold">
            Start your journey to a better life with online practical courses
          </h2>
          <div className="flex flex-col mt-10">
            <div className="flex items-center">
              <div className="bg-[#29CA8E] text-white text-3xl p-3 mr-5 rounded-full">
                <FaUsers></FaUsers>
              </div>
              <div>
                <h2 className="text-[#454545] text-xl font-bold">
                  Professional Trainers
                </h2>
                <p className="text-[#757575] text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  ipsa voluptatibus.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-5 mb-5">
              <div className="bg-[#29CA8E] text-white text-3xl p-3 mr-5 rounded-full">
                <FaCertificate></FaCertificate>
              </div>
              <div>
                <h2 className="text-[#454545] text-xl font-bold">
                  International Certifications
                </h2>
                <p className="text-[#757575] text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  ipsa voluptatibus.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#29CA8E] text-white text-3xl p-3 mr-5 rounded-full">
                <FaChartColumn></FaChartColumn>
              </div>
              <div>
                <h2 className="text-[#454545] text-xl font-bold">
                  Free for 3 months
                </h2>
                <p className="text-[#757575] text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                  ipsa voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* form field */}
        <div>
          <div className="container mx-auto ">
            <div className="flex flex-col justify-center items-center ml-32 bg-[#252020] rounded-full py-20 w-4/5">
              <h2 className="text-white text-3xl font-bold mb-10">
                Signup today
              </h2>
              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#252020] mt-5 "
              />
              <input
                type="email"
                placeholder="Your Email Address"
                className="bg-[#252020] mt-5"
              />
              <input
                type="password"
                placeholder="Your Password"
                className="bg-[#252020] mt-5"
              />
              <input
                type="submit"
                value="Ger Started"
                className=" mt-5 bg-white px-10 py-3 rounded-3xl hover:bg-blue-600 hover:text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
