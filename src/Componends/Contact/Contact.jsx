import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="container-full mx-auto">
        <div className="bg-[#3F51B5]">
          <div className="flex justify-between items-center mx-10 pt-20 pb-20">
            <div className="w-1/2 ">
              <h2 className="text-white font-bold text-3xl">Contact us</h2>
              <p className="text-white mb-5">
                we love conversations. let us talk!
              </p>
              <form action="" className="flex flex-col">
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="mt-5 rounded outline-none py-3 px-2"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="mt-5 rounded outline-none py-3 px-2"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Tell us about your message"
                  className="mt-5 rounded outline-none pt-5 px-3 mb-5"
                ></textarea>
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-white px-5 py-3 w-40 hover:bg-[#3F51B5] hover:border hover:border-white hover:text-white rounded-3xl"
                />
              </form>
            </div>
            <div className="w-2/5">
              <img src="/src/assets/images/contact-image.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* footer start here */}
      <div className="bg-[#252020] py-20">
        <div className="container mx-auto text-white grid grid-cols-3">
          <div>
            <div>
              <h2 className="font-bold text-xl mb-5">Headquarter</h2>
              <p className="text-sm text-[#909090]">
                1800 dapibus a tortor pretium,
              </p>
              <p className="text-sm text-[#909090] mt-3 mb-5">
                Integer nisl dui, ABC 12000
              </p>
            </div>
            <div>
              <div className="flex flex-row gap-10 text-[#29CA8E] mb-5">
                <FaFacebookSquare></FaFacebookSquare>
                <FaTwitter></FaTwitter>
                <FaInstagram></FaInstagram>
              </div>
              <p className="text-sm text-[#909090] mb-3">
                Copyright © 2019 Company Name
              </p>
              <p className="text-sm text-[#909090]">Design: Masudur Rahman</p>
            </div>
          </div>

          <div>
            <div>
              <h2 className="font-bold text-xl mb-5">Contact Info</h2>
              <p className="text-sm text-[#909090]">Contact Info</p>
              <p className="text-sm text-[#909090] mt-3 mb-5">
                hello@youremail.co
              </p>
            </div>
            <div>
              <h2 className="font-bold text-xl mb-5">Quick Links</h2>
              <p className="text-sm text-[#909090] mb-3">
                Career Investor Terms & Conditions Refund Policy
              </p>
            </div>
          </div>

          <div>
            <div className="flex flex-col">
              <h2 className="font-bold text-xl mb-5">Newsletter Signup</h2>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="bg-[#252020] outline-none border-b-2 border-[#282C34]"
              />
              <input
                type="submit"
                value="Send Me"
                className="border mt-5 border-white w-1/3 rounded-3xl py-2 hover:bg-[#29CA8E] text-sm "
              />
              <p className="text-[12px] text-[#909090] mt-3 mb-5">
                * Please note - we do not spam your email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
