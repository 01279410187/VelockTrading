import React from "react";
// import Home from "./Home";
// import logo from "../assets/Logo.PNG";
// import support from "../assets/Support.PNG";
import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import deposit1 from "../assets/deposit.png";
import setting from '../assets/setting.PNG'
import arow2 from '../assets/arow2.PNG'
const Setting = () => {
  let navigate = useNavigate();
  const Navigate = () => {
    window.location.href = "/deposit/copy";
  };

  return (
    <div>
      <div className="justify-center ">
        <div className="  my-6  w-full md:w-[35%]  sm:w-[35%]  ">
          <div className="flex justify-center gap-5 mb-4">
            <h1 className=" text-[#959595]  mt-1  leading-[30.8px] text-[20px]">
                SETTING
            </h1>
            <img src={setting} alt="logo" className="w-[40px] " />
          </div>

          <div className="flex justify-end flex-col">
            <div className="flex justify-end gap-16">
            <p className="text-[#959595]">Change Password</p>
             <img src={arow2} alt="arrow" className="w-[23px]  cursor-pointer " />

            </div>
            <div className="flex justify-end items-start mt-2 gap-8">
            <p className="text-[#959595]">Change Email Address</p>
             <img src={arow2} alt="arrow" className="w-[23px]  cursor-pointer " />

            </div>
           

          </div>
          <div className="w-full border-2 border-black ">
            <div className="flex justify-between">
              <img
                src={back}
                alt="support"
                onClick={() => navigate(-1)}
                className="w-[23px] p-1 ml-2 mt-1 cursor-pointer "
              />
              {/* <img src={support} alt="support"   className="w-[40px]   " /> */}
            </div>
            <div className="flex justify-center">
                <p>CHANGE PASSWORD</p>

            </div>
            <div className="mt-5">
              <div className="mb-8 w-[80%]">
                <label className="block text-sm text-left text-[#959595] ">
                 Old Password
                </label>
                <input
                  name="Currency"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                  placeholder="USDT (TRC20)"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>



              <div className="flex justify-evenly">
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  Password
                </label>
                <input
                  name="username"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
              <div className="mb-1 w-[35%]">
                <label className="block text-sm text-left text-[#959595]">
                  Retype Password
                </label>
                <input
                  name="username"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
            </div>
           

              <div className="mt-5">
                <button
                  onClick={() => Navigate()}
                  className="w-[40%] bg-[#959595]  text-[15px] hover:bg-[#00b0f0] shadow-gray-900 shadow-2xl py-2 px-2.5 text-white cursor-pointer rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="mb-3 text-left ml-7">
              <img
                src={backHome}
                alt="support"
                className="w-[25px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
