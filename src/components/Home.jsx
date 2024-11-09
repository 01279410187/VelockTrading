import React from "react";
import logo from "../assets/Logo.PNG";
import support from "../assets/Support.PNG";
import home from "../assets/Home.PNG";
import precsntage from "../assets/presentage.PNG";
import { Link } from "react-router-dom";

const Home = () => {

  const FQALink = () => {
    window.location.href = "/FAQ";
  };
  const DisclamerLink = () => {
    window.location.href = "/disclaimer";
  };
  const PrivacyLink = () => {
    window.location.href = "/privacy";
  };
  return (
    <div className="  justify-center   w-[390px] h-full  border-2 border-black ">
      <div className="flex justify-center mt-5 md:mt-0 sm:mt-0">
        <div className="flex justify-between w-full ">
          <div className="">
            <img src={logo} alt="logo" className="w-[150px] " />
          </div>

          <div className="md:mt-13 sm:mt-13 mt-12 text-[#959595] font-semibold  italic leading-[30.8px] text-[30px] ">
            Welcome
          </div>

          <div className="mt-6 mr-5 md:mt-7 sm:mt-7">
            <img src={support} alt="support" className="w-[50px] " />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5 md:mt-0 sm:mt-0">
        <img
          src={home}
          alt="home"
          className=" w-full md:w-[400px] sm:w-[400px] "
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-5 mb-2 md:mt-0 sm:mt-0">
        <div className=" mt-7 text-[#959595] font-semibold italic leading-[30.8px] text-[30px] ">
          Earn Weekly
        </div>
        <div className=" mt-2 text-[#959595] font-semibold italic leading-[30.8px] text-[15px] ">
          "Daily Withdrawal"
        </div>
      </div>
      <div className="flex justify-center mt-5 mb-2 md:mt-0 sm:mt-0">
        <img
          src={precsntage}
          alt="pre"
          className="md:w-[350px]  sm:w-[350px] w-[360px]"
        />
      </div>
      <div className="flex justify-center mt-10 md:mt-4 sm:mt-4">
        <Link to='/login' className=" md:w-[50%] sm:w-[50%]  w-[50%] bg-[#959595] hover:bg-[#00b0f0] shadow-[#959595] hover:shadow-[#00b0f0] shadow-2xl text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-full ">
          Login / Register
        </Link>
      </div>
      <div className="flex flex-row justify-center gap-1 mt-16 md:mt-8 sm:mt-8">
        <button onClick={()=>FQALink()}className="w-[20%] bg-white  text-[15px] py-2 px-2 text-[#959595]  font-normal cursor-pointer rounded-md  border-2 border-[#b7b7b7]">
          FAQ
        </button>
        <button onClick={()=>DisclamerLink()} className="w-[20%] bg-white  text-[13px] py-2 px-2 text-[#959595] cursor-pointer font-normal rounded-md  border-2 border-[#b7b7b7]">
          Disclaimer
        </button>
        <button onClick={()=>PrivacyLink()} className="w-[20%] bg-white  text-[15px] py-2 px-2 text-[#959595] cursor-pointer font-normal rounded-md  border-2 border-[#b7b7b7]">
          Privacy
        </button>
        <button className="w-[20%] bg-white  text-[15px] py-2 px-2 text-[#959595] cursor-pointer font-normal rounded-md  border-2 border-[#b7b7b7]">
          Referral
        </button>
      </div>
    </div>
  );
};

export default Home;
