import React from "react";
import { useNavigate } from "react-router-dom";
import TradingCenter from "./TradingCenter";
import TradingProgress from "./TradingProgress";

const CancelTrading = () => {
  const [showModal, setShowModal] = React.useState(true);
  let navigate = useNavigate();
  const Navigate = () => {
    window.location.href = "/tradingCenter";
  };

  return (
    <>
      <TradingProgress />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative  my-6 bg-white w-full md:w-[35%] sm:w-[35%] sm:p-5 p-3 border-2 border-black ">
              {/*content*/}

              <div className="flex justify-center">
                <p>
                  Are you sure you want to cancel this trading? You will lose
                  your daily profit!
                </p>
              </div>
              <div className="flex justify-center gap-3 mt-3 ">
                <button
                    onClick={()=>Navigate()}
                  className="w-[20%] bg-[#959595] hover:bg-[#00b0f0] shadow-2xl text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                >
                  Yes
                </button>
                <button
                    onClick={()=>setShowModal(false)}
                  className="w-[20%] bg-[#959595] hover:bg-[#00b0f0] shadow-2xl text-[15px] py-2 px-2.5 text-white cursor-pointer rounded-md"
                >
                  No
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default CancelTrading;
