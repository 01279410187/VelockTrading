import React from "react";
// import Home from "./Home";

import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import transfer1 from "../assets/tranfer.png";
const Transfer = () => {
    let navigate = useNavigate();
//   const Navigate = () => {
//     window.location.href = "/withdraw/confirm";
//   };
    return (
        <div>
          <div className="justify-center ">
            <div className="  my-6  w-full md:w-[35%]   ">
              <div className="flex justify-center gap-5 mb-5">
                <h1 className="text-[#959595]  mt-2  leading-[30.8px] text-[20px]">
                TRANSFER
                </h1>
                <img src={transfer1} alt="logo" className="w-[50px] " />
              </div>
              <div className="w-full border-2 border-black ">
                <div className="flex justify-between ">
                  <img
                    src={back}
                    alt="back"
                    onClick={() => navigate(-1)}
                    className="w-[23px] cursor-pointer p-1 ml-2 mt-1"
                  />
                  {/* <img src={support} alt="support"   className="w-[40px]   " /> */}
                </div>
                <div className="mt-2">
                  <div className="mb-3 w-[80%]">
                    <label className="block text-sm text-left text-[#959595]">
                    User Balance
                    </label>
                    <input
                      name="Currency"
                      type="text"
                      className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                      // {...register("email")}
                      placeholder="12,500.0000"
                    />
                    <div className="text-[#ea3636]">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>
                  <div className="mb-3 w-[80%]">
                    <label className="block text-sm text-left text-[#959595]">
                    Receiver's User ID
                    </label>
                    <input
                      name="amount"
                      type="text"
                      className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                      // {...register("email")}
                      placeholder="Enter Receiver's User ID"
                    />
                    <div className="text-[#ea3636]">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>
                  <div className="mb-3 w-[80%]">
                    <label className="block text-sm text-left text-[#959595]">
                    Transfer Amount
                    </label>
                    <input
                      name="network"
                      type="text"
                      className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                      // {...register("email")}
                      placeholder="Enter Amount to Transfer"
                    />
                    <div className="text-[#ea3636]">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>
                  <div className="mb-3 w-[80%]">
                    <label className="block text-sm text-left text-[#959595]">
                    Transfer Password
                    </label>
                    <input
                      name="network"
                      type="text"
                      className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                      // {...register("email")}
                      placeholder="Enter Transfer Password"
                    />
                    <div className="text-[#ea3636]">
                      {/* {errors.email?.message} */}
                    </div>
                  </div>
    
                  <div className="mt-5">
                    <button
                    //   onClick={() => Navigate()}
                      className="w-[40%] bg-[#959595] hover:bg-[#00b0f0] text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                    >
                      Approve
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

export default Transfer