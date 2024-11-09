import React from "react";
// import Home from "./Home";

import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import withdraw1 from "../assets/withdraw.png";


const Withdraw = () => {
    let navigate = useNavigate();
  const Navigate = () => {
    window.location.href = "/withdraw/confirm";
  };
  return (
    <div>
      <div className="justify-center ">
        <div className="  my-6  w-full md:w-[35%]   ">
          <div className="flex justify-center gap-5 mb-5">
            <h1 className="text-[#959595]  mt-4  leading-[30.8px] text-[20px]">
            WITHDRAW
            </h1>
            <img src={withdraw1} alt="logo" className="w-[50px] " />
          </div>
          <div className="w-full border-2 border-black ">
            <div className="flex justify-between">
              <img
                src={back}
                alt="support"
                onClick={() => navigate(-1)}
                className="w-[23px] p-1 cursor-pointer ml-2 mt-1"
              />
              {/* <img src={support} alt="support"   className="w-[40px]   " /> */}
            </div>
            <div className="mt-2">
              <div className="mb-3 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                  Currency
                </label>
                <input
                  name="Currency"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                  // {...register("email")}
                  placeholder="USDT (TRC20)"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
              <div className="mb-3 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                Your Balance
                </label>
                <input
                  name="amount"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                  placeholder=" Balance Amount"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
              <div className="mb-3 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                Withdraw Amount (Minimum USDT 500)
                </label>
                <input
                  name="network"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                  // {...register("email")}
                  placeholder="Enter Amount - 0.5% Fee"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
              <div className="mb-3 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                Wallet Address
                </label>
                <input
                  name="network"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                  placeholder="Paste Wallet Address"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={() => Navigate()}
                  className="w-[40%] bg-[#959595] hover:bg-[#00b0f0] text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
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
  )
}

export default Withdraw