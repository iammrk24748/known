import React from "react";
import About from "../About/About";

const Banner = () => {
  return (
    <div>
      <div className="-mt-5">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/src/assets/images/slider-image1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/src/assets/images/slider-image2.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="/src/assets/images/slider-image3.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Bottom */}
      <div className="grid grid-cols-3 mx-20 mt-20 gap-5 mb-20">
        <div className="border border-[#EAEAEA] py-28 px-10">
          <span className="bg-[#3F51B5] p-5 text-2xl text-white font-bold rounded-full">
            01
          </span>
          <h2 className="text-[#454545] text-xl mt-10  font-bold">
            Trending Courses
          </h2>
          <p className="text-[#747474] text-sm">
            Known is free education HTML Bootstrap Template. You can modify in
            any way and use this for your website.
          </p>
        </div>
        <div className="border border-[#EAEAEA] py-28 px-10">
          <span className="bg-[#3F51B5] p-5 text-2xl text-white font-bold rounded-full">
            02
          </span>
          <h2 className="text-[#454545] text-xl mt-10  font-bold">
            Books & Library
          </h2>
          <p className="text-[#747474] text-sm ">
            You are allowed to use Known HTML Template for your commercial or
            non-commercial websites.
          </p>
        </div>
        <div className="border border-[#EAEAEA] py-28 px-10">
          <span className="bg-[#3F51B5] p-5 text-2xl text-white font-bold rounded-full">
            03
          </span>
          <h2 className="text-[#454545] text-xl mt-10  font-bold">
            Certified Teachers
          </h2>
          <p className="text-[#747474] text-sm">
            Please spread a word about us. Template redistribution is NOT
            allowed on any download website.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
