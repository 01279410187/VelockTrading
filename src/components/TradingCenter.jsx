import React, { useState } from "react";
// import Home from "./Home";

import back from "../assets/arow 1.png"
import backHome from "../assets/homeicon.png";
import { useNavigate } from "react-router-dom";
import trading from '../assets/tradingCenter.PNG'

const data = [
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "3,000.0000",
    withdraw: "",
    Trading: "",
    profit: "220.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "(4,000.0000)",
    Trading: "",
    profit: "220.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "3,200.0000",
    withdraw: "",
    Trading: "(5,000.0000)",
    profit: "170.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "(4,000.0000)",
    Trading: "",
    profit: "100.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "6,000.0000",
    withdraw: "",
    Trading: "(5,000.0000)",
    profit: "170.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "(4,000.0000)",
    Trading: "",
    profit: "100.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "2,500.0000",
    withdraw: "",
    Trading: "",
    profit: "150.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "",
    Trading: "6,000.0000",
    profit: "100.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "(4,000.0000)",
    Trading: "",
    profit: "100.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "",
    Trading: "6,000.0000",
    profit: "100.0000",
  },
  {
    Date: "25-02-23",
    Ref: "xxxx",
    deposit: "",
    withdraw: "(4,000.0000)",
    Trading: "",
    profit: "100.0000",
  },
];

const TradingData = [
  {
    Date: "25-02-23",
    Finish: "22:15:45",
    deposit: "3,000.0000",
    profit: "30.00",
    TradingStatus: "Working",
    CancelTrading: "Cancel",
   
   
  },
  {
    Date: "24-02-23",
    Finish: "22:15:45",
    deposit: "4,000.0000",
    profit: "40.00",
    TradingStatus: "Working",
    CancelTrading: "Cancel",
  },
  
];

const TradingCenter = () => {
  let navigate = useNavigate();
  const Navigate = () => {
    window.location.href = "/tradingCenter/Cancel";
  };


  return (
    <div className="justify-center ">
      <div className="  my-6  w-full md:w-[35%] sm:w-[35%]">
        <div className="flex justify-center gap-5 mb-4">
            <h1 className=" text-[#959595]  mt-3  leading-[30.8px] text-[20px]">
            TRADING CENTER
            </h1>
            <img src={trading} alt="logo" className="w-[50px] " />
          </div>
        <div className="w-full border-2 border-black ">
          <div className="flex justify-between">
            <img
              src={back}
              alt="back"
              onClick={() => navigate(-2)}
              className="w-[23px] cursor-pointer p-1 ml-2 mt-1"
            />
            {/* <img src={support} alt="support"   className="w-[40px]   " /> */}
          </div>
          <div className="flex justify-center">
            <h1 className="mt-3 text-[#959595]     text-[15px]">
              TRADING IN PROGRESS
            </h1>
          </div>
          <div className="flex justify-center mt-3 mb-4">
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer   border-2 border-[#959595]">
              <div className="text-center   text-[15px]">Your Balance</div>
            </div>
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer    border-2 border-[#959595]">
              <div className="text-center    text-[15px]">12,500.00</div>
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-4">
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer   border-2 border-[#959595]">
              <div className="text-center   text-[15px]">Date:</div>
            </div>
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer    border-2 border-[#959595]">
              <div className="text-center    text-[15px]">26-02-23</div>
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-4">
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer   border-2 border-[#959595]">
              <div className="text-center   text-[15px]">Trading Through:</div>
            </div>
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]   font-normal cursor-pointer    border-2 border-[#959595]">
              <div className="text-center    text-[15px]">23:12:59</div>
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-4">
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer   border-2 border-[#959595]">
              <div className="text-center   text-[15px]">Trading Amount</div>
            </div>
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer    border-2 border-[#959595]">
              <div className="text-center    text-[15px]">12,500.0000</div>
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-4">
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer   border-2 border-[#959595]">
              <div className="text-center   text-[15px]">Daily Profit</div>
            </div>
            <div className="w-[45%] bg-white   py-2 px-2 text-[#959595]  font-normal cursor-pointer    border-2 border-[#959595]">
              <div className="text-center    text-[15px]">125.0000</div>
            </div>
          </div>

        
          <div className="justify-center border-t-4 border-[#959595]">
            <h1 className="mt-3 text-[#959595]     text-[15px]">
              TRNSACTIONS HISTORY
            </h1>
            <div className="justify-center border-b-2 mt-4 border-black w-[92%]"></div>
          </div>
          <div className="flex justify-center">
            <table className="w-full gap-5 mt-4">
              <tr className="">
                <th className="text-[#959595] font-normal">Date</th>
                <th className="text-[#959595] font-normal">Ref</th>
                <th className="text-[#959595] font-normal">Deposit</th>
                <th className="text-[#959595] font-normal">Withdrawal</th>
                <th className="text-[#959595] font-normal">Trading</th>
                <th className="text-[#959595] font-normal">Profit</th>
              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key} className="">
                    <td className=" text-[12px] text-[#959595] font-poppins whitespace-nowrap text-center  ">
                      {val.Date}
                    </td>
                    <td className="text-[12px] text-[#959595] font-poppins text-center">
                      {val.Ref}
                    </td>
                    <td className="  text-[12px] text-[#959595] font-poppins text-center">
                      {val.deposit}
                    </td>
                    <td className="text-red-600 text-[12px] font-poppins text-center ">
                      {val.withdraw}
                    </td>
                    <td className="text-[12px] text-red-600 font-poppins text-center ">
                      {val.Trading}
                    </td>
                    <td className="text-[12px] text-[#959595] font-poppins text-center">
                      {val.profit}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className="mt-2 mb-3 text-left ml-7">
            <img
              src={backHome}
              alt="home"
              className="w-[25px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingCenter;
