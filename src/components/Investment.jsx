import React, { useEffect, useState } from "react";
import back from "../assets/arow 1.png";
import logo from "../assets/Logo.PNG";

import backHome from "../assets/homeicon.png";
import setting from "../assets/setting.PNG";
import deposit from "../assets/deposit.png";
import withdraw from "../assets/withdraw.png";
import transefer from "../assets/tranfer.png";
import wallet from "../assets/walletAddress.png";
import fqa from "../assets/FAQ.png";
import lang from "../assets/langusge.png";
import support from "../assets/service.png";
import tel from "../assets/telegram.png";
import privacy from "../assets/privacy.png";
import referrlas from "../assets/referral.png";
import disclamer from "../assets/disclamer.png";
import logut from "../assets/loguot.png";
import trading from '../assets/tradingCenter.PNG'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const user = localStorage.getItem("token");




const Investment = () => {
  const {id} =useParams()
  const [Name, setName] = useState('')
  const [Id, setId] = useState('')
  const [Balance, setBalance] = useState('')
  const [BalanceWithProfit, setBalanceWithProfit] = useState('')

  let navigate = useNavigate();
  const depositLink = () => {
    window.location.href =  `/deposit/${id}`;
  };
  const settingLink = () => {
    window.location.href = "/setting";
  };
  const withdrawLink = () => {
    window.location.href = "/withdraw";
  };
  const startTradingLink = () => {
    window.location.href = "/startTrading";
  };

  const transferLink = () => {
    window.location.href = "/transfer";
  };
  const walletAddressLink = () => {
    window.location.href = "/walletAddress";
  };
  const TradingProgressLink = () => {
    window.location.href = "/tradingProgress";
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location='/';
    
  };

  const getUserInfo =async()=>{
    try {

      const userInfo= await axios.get(`https://test-mjx1.onrender.com/api/users/userProfile/${id}`)
      setName(userInfo.data.data.first)
      setId(userInfo.data.data.id)
      setBalance(userInfo.data.data.balanceWithoutProfit)
      setBalanceWithProfit(userInfo.data.data.balanceWithProfit)

      console.log(userInfo.data)
      
    } catch (error) {
      console.log(error.response.data.message);
      
    }

  }
  useEffect(() => {
    getUserInfo()
  }, [])
  return (
    <div className="justify-center   w-[390px] h-full  border-2 border-black">
      <div className="flex justify-between">
        <img
          src={back}
          alt="support"
          onClick={() => navigate(-1)}
          className="w-[23px] h-[30px] cursor-pointer p-1 ml-2 mt-1 "
        />
        <div className="mt-1 text-[#959595]   italic leading-[30.8px] text-[20px] ">
          Welcome
        </div>
        <img
          src={setting}
          onClick={()=>settingLink()}
          alt="support"
          className="w-[30px] cursor-pointer mt-6 mr-3 "
        />
      </div>
      <div className="flex justify-start ml-2 -mt-6 ">
        <img src={logo} alt="logo" className="w-[150px] " />
        <div class="absolute  ml-36 w-1.5 h-[13%] md:h-[14%] md:mt-7 sm:h-[12%] sm:mt-4 mt-6 bg-[#959595]"></div>
        <div className="flex flex-col items-start mt-8">
          <div className="ml-3 text-[#959595] font-semibold text-[20px]">
            {Name}
          </div>
          <div className="ml-3 text-[#959595] font-semibold text-[15px]">
            Client ID: {id}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5 mb-6">
        <div className="w-[45%] bg-[#00b0f0]  text-[15px] py-3 px-2 text-white  font-normal cursor-pointer   border-[1px]  border-black">
          <div className="float-left justify-start font-semibold -ml-2 -mt-3 text-[11.5px]">
            Today's Earning (USDT-TRC20)
          </div>
          <div className="text-center  mt-2 text-[20px]">{BalanceWithProfit ? BalanceWithProfit:"0"}</div>
        </div>
        <div className="w-[45%] bg-white  text-[15px] py-3 px-2 text-white  font-normal cursor-pointer   border-[1px] border-black">
          <div className="float-right justify-end font-semibold text-[#959595] -mr-2 -mt-3 text-[11.5px]">
            Balance (USDT-TRC20)
          </div>
          <div className="text-center text-black  mt-2 text-[20px]">
          {Balance ? Balance :"0"}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <button
          onClick={() => startTradingLink()}
          className="w-[60%] bg-[#959595] hover:bg-[#00b0f0] shadow-[#959595] hover:shadow-[#00b0f0] shadow-2xl font-semibold  text-[20px] py-2 px-2 text-white cursor-pointer rounded-full"
        >
          Start Trading
        </button>
      </div>
      <div className=" flex-col flex-1 mt-5 justify-center border-t-4 border-[#00b0f0]">
        <div className="flex flex-row mt-2 ml-1 justify-evenly">
          <div className="flex flex-col text-center">
            <img
              src={deposit}
              alt="deposit"
              onClick={() => depositLink()}
              className="w-[50px] cursor-pointer "
            />
            <p
              className="text-[#959595] hover:text-[#00b0f0] text-[10px] cursor-pointer"
              onClick={() => depositLink()}
            >
              Deposit
            </p>
          </div>

          <div className="flex flex-col text-center">
            <img
              src={withdraw}
              alt="withdraw"
              onClick={() => withdrawLink()}
              className="w-[49px] cursor-pointer"
            />
            <p
              className="text-[#959595] hover:text-[#00b0f0] text-[10px] cursor-pointer"
              onClick={() => withdrawLink()}
            >
              Withdraw
            </p>
          </div>

          <div>
            <img
              src={transefer}
              alt="transfer"
              onClick={() => transferLink()}
              className="w-[50px] cursor-pointer "
            />
            <p
              className="text-[#959595] hover:text-[#00b0f0] text-[10px] cursor-pointer"
              onClick={() => transferLink()}
            >
              Transfer
            </p>
          </div>
        </div>
        {/* <div className="flex flex-row mt-2 ml-1 justify-evenly">

          <img src={deposit} alt="deposit" onClick={()=>depositLink()} className="w-[50px] cursor-pointer " />
          <img src={withdraw} alt="withdraw" onClick={()=>withdrawLink()}className="w-[50px] cursor-pointer" />

          <img src={transefer} alt="transfer"  onClick={()=>transferLink()}className="w-[50px] cursor-pointer"  />
        </div> */}
        <div className="flex flex-row mt-2 ml-1 justify-evenly ">
          <div className="flex flex-col text-center">
            <img
              src={wallet}
              alt="address"
              onClick={() => walletAddressLink()}
              className="w-[45px] cursor-pointer ml-1"
            />
            <p
              className="text-[#959595] hover:text-[#00b0f0] text-[9px]  cursor-pointer"
              onClick={() => walletAddressLink()}
            >
              Wallet Address
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img src={fqa} alt="logo" className="w-[45px] mr-2" />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[9px] mr-2 cursor-pointer">
              FAQ
            </p>
          </div>
          <div className="flex flex-col text-center">
            <img src={trading} alt="logo" className="w-[49px] ml-1 " onClick={()=>TradingProgressLink()}/>
            <p className="text-[#959595] hover:text-[#00b0f0] text-[8px] ml-1 cursor-pointer" onClick={()=>TradingProgressLink()}>
            Trading Center
            </p>
          </div>
         
        </div>
        <div className="flex flex-row mt-2 ml-1 justify-evenly">
          <div className="flex flex-col text-center">
            <img src={support} alt="support" className="w-[50px] ml-2 " />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[9px]  cursor-pointer">
              Customer Support
            </p>
          </div>
          <div className="flex flex-col mt-1 text-center">
            <img src={tel} alt="logo" className="w-[45px] mr-4" />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[9px] mr-4  cursor-pointer">
              Telegram
            </p>
          </div>
          <div className="flex flex-col mr-2 text-center">
            <img src={privacy} alt="logo" className="w-[45px]  " />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[7px]  cursor-pointer">
              Privacy & Policy
            </p>
          </div>
        </div>

        <div className="flex flex-row mt-2 ml-1 justify-evenly ">
          <div className="flex flex-col text-center">
          <img src={referrlas} alt="logo" className="w-[50px] " />
          <p className="text-[#959595] hover:text-[#00b0f0] text-[9px]  cursor-pointer">
             Referrals
            </p>

          </div>
          <div className="flex flex-col mt-1 text-center">
            <img src={disclamer} alt="logo" className="w-[50px] " />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[9px]   cursor-pointer">
              Disclaimer
            </p>
          </div>
          
          <div className="flex flex-col text-center">
            <img src={logut} alt="logo" className="w-[50px] cursor-pointer " onClick={handleLogout}/>
            <p className="text-[#959595] hover:text-[#00b0f0] text-[10px]  cursor-pointer " onClick={handleLogout}>
             Logout
            </p>
          </div>
         

         
        </div>
        <div className="flex justify-center mt-2">
        <div className="flex flex-col text-center">
            <img src={lang} alt="logo" className="w-[49px] mr-1 " />
            <p className="text-[#959595] hover:text-[#00b0f0] text-[9px] mr-1 cursor-pointer">
              Language
            </p>
          </div>

        </div>
      </div>
      <div className="mt-5 mb-3 text-left ml-7">
        <img src={backHome} alt="support" className="w-[25px] cursor-pointer" />
      </div>
    </div>
  );
};

export default Investment;
