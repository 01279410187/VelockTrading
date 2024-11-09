import React, { useEffect, useState } from "react";
import Deposit from "./Deposit";
import qr from "../assets/QR.PNG";
import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const VoleckWallet = () => {
  const [showModal, setShowModal] = React.useState(true);
  const [address, setAddress] = useState('')
  const {id} =useParams()

 
  const getUserInfo =async()=>{
    try {

      const userInfo= await axios.get(`http://localhost:5000/api/users/userProfile/${id}`)

      setAddress(userInfo.data.data.address)
    

      console.log(userInfo.data)
      
    } catch (error) {
      console.log(error.response.data.message);
      
    }

  }
  useEffect(() => {
    getUserInfo()
  }, [])
  const handelCopy = () => {
    navigator.clipboard.writeText(address);
    alert("Copied");
  };

  let navigate = useNavigate();

  return (
    <>
      <Deposit />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative  my-6 bg-white w-full md:w-[35%] sm:p-5 p-3 border-2 border-black ">
              {/*content*/}
              <div className="flex justify-between mt-0 mb-3">
                <img
                  src={back}
                  alt="support"
                  onClick={() => navigate(-1)}
                  className="w-[23px] p-1 cursor-pointer ml-2 mt-1 "
                />
              </div>
              <div className="flex justify-center">
                <img src={qr} alt="qr" className="w-[150px] " />
              </div>
              <div className="flex justify-center">
                <div className="mb-8 mt-4 w-[80%]">
                  <label className="block text-sm text-left text-[#959595]">
                    Wallet Address:
                  </label>
                  <input
                    name="username"
                    type="text"
                    className={`bg-gray-50  border-2   border-[#959595] text-black text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                    // {...register("email")}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <div className="text-[#ea3636]">
                    {/* {errors.email?.message} */}
                  </div>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handelCopy}
                  className="w-[50%] bg-[#959595] hover:bg-[#00b0f0]  text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                >
                  Copy Wallet Address
                </button>
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
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default VoleckWallet;
