import React from "react";
// import Home from "./Home";
// import logo from "../assets/Logo.PNG";
// import support from "../assets/Support.PNG";
import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate,useParams } from "react-router-dom";
import deposit1 from "../assets/deposit.png";


const Deposit = () => {
  let navigate = useNavigate();
  const {id} =useParams()

  const Navigate = () => {
    window.location.href =  `/deposit/copy/${id}`;
  };

  return (
    <div>
      <div className="justify-center ">
        <div className="  my-6  w-full md:w-[35%]   ">
          <div className="flex justify-center gap-5 mb-4">
            <h1 className=" text-[#959595]  mt-3  leading-[30.8px] text-[20px]">
              DEPOSIT
            </h1>
            <img src={deposit1} alt="logo" className="w-[50px] " />
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
            <div className="mt-5">
              <div className="mb-8 w-[80%]">
                <label className="block text-sm text-left text-[#959595] ">
                  Currency
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
              <div className="mb-8 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                  Amount
                </label>
                <input
                  name="amount"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                  placeholder="Type Amount Here"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>
              <div className="mb-8 w-[80%]">
                <label className="block text-sm text-left text-[#959595]">
                  Network
                </label>
                <input
                  name="network"
                  type="text"
                  className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                  // {...register("email")}
                  placeholder="Choose Network (Tron-TRC20)"
                />
                <div className="text-[#ea3636]">
                  {/* {errors.email?.message} */}
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={() => Navigate()}
                  className="w-[40%] bg-[#959595]  text-[15px] hover:bg-[#00b0f0] shadow-2xl py-2 px-2.5 text-white cursor-pointer rounded-full"
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

export default Deposit;
