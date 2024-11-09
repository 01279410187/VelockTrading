import React from "react";
import { useNavigate } from "react-router-dom";
import TradingCenter from "./TradingCenter";
import TradingProgress from "./TradingProgress";

const ApproveCancel = () => {
  const [showModal, setShowModal] = React.useState(true);
  let navigate = useNavigate();
  return (
    <>
      <TradingCenter />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative  my-6 bg-white w-full md:w-[35%] sm:w-[35%] sm:p-5 p-3 border-2 border-black ">
              {/*content*/}
               <div className="float-right">
                <button className=" rounded-md w-[30px] h-[30px] text-[15px] text-white bg-[#00b0f0]" onClick={()=>setShowModal(false)}>
                   X
                </button>

               </div>
              <div className="flex justify-center mt-7">
                <p>
                  This Trading has been cancelled, the amount traferred to your
                  Balance!
                </p>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default ApproveCancel;
