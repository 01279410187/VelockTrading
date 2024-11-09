import React, { useState } from "react";

export const questions = [
  {
    id: "faq-1",
    title: "",
    info: " ",
  },
  {
    id: "faq-2",
    title: "WHAT IS THE PROFIT PERCENTAGE PER DAY?",
    info: "The platform will automatically grant you a profit of 1% daily on your trading amount, the profit will automatically be transferred to your balance every 24 hours",
  },
  {
    id: "faq-3",
    title: "CAN I WITHDRAW MY PROFIT EVERY DAY?",
    info: "Yes, definitely, you can withdraw your daily profits or the amount on your balance by using the Withdraw Option, note, the platform will allow you to withdraw once every 24 hours, withdrawals will take between 1 hour to 12 hours to effect on your account with any other wallet outside Voleck Platform",
  },
  {
    id: "faq-4",
    title: "CAN I WITHDRAW MY INITIAL INVESTMENT AMOUNT OR CANCEL MY TRADING?",
    info: "Yes, at any time, you can cancel your trading by going to the Trading Center, you will find a list of your trading in progress, simply press the red button on the right (Cancel), please take in consideration once you cancel the trading, you will not receive profit for the day you cancelled the trading. The principal amount will be transferred to your balance automatically.",
  },
  {
    id: "faq-5",
    title: "HOW MANY TIMES CAN I WITHDRAW EVERY DAY?",
    info: "Our Platform is designed to make Withdraw once every 24 hours, so, please make sure you enter the right amount you desire to Withdraw.",
  },
  {
    id: "faq-6",
    title: "WHAT PAYMENT METHOD DOES VOLECK ACCEPT?",
    info: "We are working in USDT-TRC20 Technology; therefore, we accept only USDT-TRC20, please note our R&D department is conducting a research to bring more Cryptos into our system",
  },
  {
    id: "faq-7",
    title: "CAN I PAY IN CASH MONEY?",
    info: "Unfortunately, we do not accept any cash money, our technology works only in USDT-TRC20, we do not hold any responsibility if you pay cash to anyone",
  },

  {
    id: "faq-9",
    title: "WHAT GUARANTEES MY INVESTMENT MONEY?",
    info: "In Crypto market, there is no guarantee on any trading or investment, but we never had failure on our technology to lose money, we are investing your money with safe platforms, but we do not guarantee any platform, you are withdrawing your rewards on daily basis, that means your risk will be lower by each day",
  },
  {
    id: "faq-10",
    title: "DISCLAIMER & PRIVACY POLICY",
    info: "We encourage all our Clients to carefully review our Disclaimer and Privacy Policy before accepting and agreeing to its, also, we recommend that you consult with any financial consultant before registering on Voleck Platform ",
  },
  {
    id: "faq-11",
    title: "HOW REFERRAL WORKS?",
    info: "Introduce your relatives, friends and business partners to register with Voleck Platform, you will automatically receive 5% of their earnings every 24 hours, the platform automatically will deposit 10% of their earnings to your account with us.",
  },

  {
    id: "faq-14",
    title: "WHAT GUARANTEE IS ON MY INVESTMENT ?",
    info: "In Crypto market, there is no guarantee on any investment, but we never had failure on our technology to lose money in arbitrage market, our policy is not to buy and keep the cryptos for future, our policy is to buy from one market and sale in another market at the same time taking the advantage of the price differences, therefore, we do not loose money, we are investing your money in safe markets, also, you are withdrawing your rewards on a daily basis, that means your risk is lowering by each day",
  },
 
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  const FeatureCard = ({ title, info, index }) => (
    <div
      className={`flex flex-row  rounded-[20px]    ${
        index !== questions.length - 1 ? "mb-6" : "mb-0"
      } `}
    >
      <div
        className="flex flex-col flex-1 ml-3 cursor-pointer"
        onClick={() => toggle(index)}
      >
        <h4
          className="  text-black text-[15px] leading-[23.4px] mb-1"
          onClick={() => setExpanded(!expanded)}
        >
          {title}
        </h4>
        <p className=" font-normal text-black  text-[16px] leading-[24px]">
          {clicked === index ? (
            <div className=" font-normal text-black  text-[16px] leading-[24px]">
              <p>{info}</p>
            </div>
          ) : null}
        </p>
      </div>
    </div>
  );
  return (
    <div>
      <h2>FAQ VOLECK</h2>

      <div className={`text-left `}>
        <div onClick={() => toggle(0)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            HOW VOLECK WORKS?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 0 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  We have made it easy for traders to work with us, simply
                  follow the steps below:
                </p>
                <p>
                  1- On Voleck Platform, register and create a new account,
                  then, you will have a Voleck Wallet Address given to you by
                  the platform
                </p>
                <p>
                  2- On Voleck platform, choose Deposit, enter the amount you
                  want to deposit, and copy your wallet address, then go to any
                  wallet you have an account with i.e. Binance, and follow their
                  instructions to transfer USDT-TRC20 to your account with
                  Voleck
                </p>
                <p>
                  3- Once the amount has been received in your Voleck account,
                  it will show on your balance
                </p>
                <p>
                  4- You must press start trading button, entering the amount
                  you want to start trading, then, press start to begin earning
                  your daily profit, (note, if you do not press start trading
                  button, your money simply stays on your account without
                  trading and you will not receive any daily profits)
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>
      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(1)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            WHAT IS THE PROFIT PERCENTAGE PER DAY?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 1 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  The platform will automatically grant you a profit of 1% daily
                  on your trading amount, the profit will automatically be
                  transferred to your balance every 24 hours
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(2)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            CAN I WITHDRAW MY PROFIT EVERY DAY?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 2 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  Yes, definitely, you can withdraw your daily profits or the
                  amount on your balance by using the Withdraw Option, note, the
                  platform will allow you to withdraw once every 24 hours,
                  withdrawals will take between 1 hour to 12 hours to effect on
                  your account with any other wallet outside Voleck Platform
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(3)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            CAN I WITHDRAW MY INITIAL INVESTMENT AMOUNT OR CANCEL MY TRADING?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 3 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  Yes, at any time, you can cancel your trading by going to the
                  Trading Center, you will find a list of your trading in
                  progress, simply press the red button on the right (Cancel),
                  please take in consideration once you cancel the trading, you
                  will not receive profit for the day you cancelled the trading.
                  The principal amount will be transferred to your balance
                  automatically.
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(4)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            WHAT PAYMENT METHOD DOES VOLECK ACCEPT?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 4 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  We are working in USDT-TRC20 Technology; therefore, we accept
                  only USDT-TRC20, please note our R & D department is
                  conducting a research to bring more Cryptos into our system.
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(5)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            CAN I PAY IN CASH MONEY?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 5 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  Unfortunately, we do not accept any cash money, our technology
                  works only in USDT-TRC20, we do not hold any responsibility if
                  you pay cash to anyone
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(6)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            WHAT GUARANTEES MY INVESTMENT MONEY?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 6 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  In Crypto market, there is no guarantee on any trading or
                  investment, but we never had failure on our technology to lose
                  money, we are investing your money with safe platforms, but we
                  do not guarantee any platform, you are withdrawing your
                  rewards on daily basis, that means your risk will be lower by
                  each day
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>
      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(7)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            DISCLAIMER & PRIVACY POLICY
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 7 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  We encourage all our Clients to carefully review our
                  Disclaimer and Privacy Policy before accepting and agreeing to
                  its, also, we recommend that you consult with any financial
                  consultant before registering on Voleck Platform
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>
      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(8)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            HOW REFERRAL WORKS?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 8 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  Introduce your relatives, friends and business partners to
                  register with Voleck Platform, you will automatically receive
                  5% of their earnings every 24 hours, the platform
                  automatically will deposit 10% of their earnings to your
                  account with us.
                </p>
                <p className="mt-4">
                  Simply sign up with us as a Referral and get your Referral
                  Code, make sure they enter your code as a referral while
                  registering a new account.
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(9)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            USEFUL LINKS ON HOW TO BUY AND SELL CRYPTOCURRENCY?
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 9 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  Without any responsibility on Voleck Platform, we provide you
                  with some links below:
                </p>
                <p className="mt-4">
                  How to Buy Cryptocurrency on Binance?
                  <br />
                  <a
                    href=" https://www.binance.com/en/support/faq/how-to-buy-cryptocurrency-on-binance-homepage-400c38f5e0cd4b46a1d0805c296b5582"
                    className="text-blue-600"
                  >
                    https://www.binance.com/en/support/faq/how-to-buy-cryptocurrency-on-binance-homepage-400c38f5e0cd4b46a1d0805c296b5582
                  </a>
                </p>
                <p className="mt-4">
                  How to Sell Cryptocurrency on Binance?
                  <br />
                  <a
                    href="https://www.binance.com/en/support/faq/how-to-sell-cryptocurrency-via-p2p-trading-on-binance-app-360039385091"
                    className="text-blue-600"
                  >
                    https://www.binance.com/en/support/faq/how-to-sell-cryptocurrency-via-p2p-trading-on-binance-app-360039385091
                  </a>
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(10)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px] mb-1"
            onClick={() => setExpanded(!expanded)}
          >
            MORE QUESTIONS
          </h4>
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 10 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>
                  We welcome all of your questions if you have any, send us an
                  email and we shall come back to you as soon as possible.
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>
      <div className={`text-left mt-4`}>
        <div onClick={() => toggle(11)} className="ml-3 cursor-pointer">
          <h4
            className="  text-black text-[15px] leading-[23.4px]"
            onClick={() => setExpanded(!expanded)}
          >
            CONTACT US
          </h4>
          
          <p className=" font-normal text-black  text-[16px] leading-[24px]">
            {clicked === 11 ? (
              <div className=" font-normal text-black  text-[16px] leading-[24px]">
                <p>There are 2 ways to contact us:</p>
                <br />
                <p>
                  Email us on{" "}
                  <span className="text-blue-700">Support@Voleck.com</span>
                </p>
                <p>
                  All email queries will be answered within 48 working hours
                </p>
                <p className="mt-2">Or</p>
                <br />
                <p>Chat with us on Telegram: @Voleck.com</p>

                <p className="mb-5">
                  From Monday to Friday
                  <br />
                  9:00 AM to 6:00 PM (UK Timing)
                </p>
              </div>
            ) : null}
          </p>
        </div>
      </div>

      <div className={`text-left `}>
        {/* {questions.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))} */}
      </div>
    </div>
  );
};

export default FAQ;
