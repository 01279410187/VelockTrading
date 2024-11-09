import React, { useState } from "react";
import Deposit from "./Deposit";
import qr from "../assets/QR.PNG";
import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import Withdraw from "./Withdraw";

const WithdrawConfirm = () => {
  const [showModal, setShowModal] = React.useState(true);
  let navigate = useNavigate();

  return (
    <>
      <Withdraw />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative  my-6 bg-white w-full md:w-[35%] sm:w-[35%] sm:p-5 p-3 border-2 border-black ">
              {/*content*/}
              <div className="flex justify-between mt-0 mb-3">
                <img
                  src={back}
                  alt="back"
                  onClick={() => navigate(-1)}
                  className="w-[23px] p-1 cursor-pointer  ml-2 mt-1 "
                />
              </div>

              <div className="flex justify-center">
                <div className="flex mt-4 mb-4 ">
                  <div  className="w-[260px]" >
                    <label className="block text-sm text-left text-[#959595]">
                      Verification Code
                    </label>
                    <input
                      name="username"
                      type="text"
                      className={`bg-gray-50 border-2   border-[#959595] text-black text-[12px]  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                      placeholder="Enter Verification Code - Sent by an Email"
                    />
                  </div>

                  <button
                    //   onClick={handelCopy}
                    className="w-[50px] h-[68%] bg-[#959595]  text-[12px] mt-5 text-white cursor-pointer "
                  >
                    Resend
                  </button>

                  <div className="text-[#ea3636]">
                    {/* {errors.email?.message} */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  //   onClick={handelCopy}
                  className="w-[50%] bg-[#959595] hover:bg-[#00b0f0]  text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                >
                  Verify
                </button>
              </div>
              <div className="mb-3 text-left">
                <img
                  src={backHome}
                  alt="support"
                  className="w-[30px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default WithdrawConfirm;
