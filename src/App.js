import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Investment from './components/Investment';
import Login from './components/Login';
import Deposit from './components/Deposit';
import VoleckWallet from './components/VoleckWallet';
import Withdraw from './components/Withdraw';
import WithdrawConfirm from './components/WithdrawConfirm';
import Transfer from './components/Transfer';
import WalletAddress from './components/WalletAddress';
import StartTrading from './components/StartTrading';
import TradingCenter from './components/TradingCenter';
import Register from './components/Register';
import VerifyAccount from './components/VerifiyAccount';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import CancelTrading from './components/CancelTrading';
import TradingProgress from './components/TradingProgress';
import ApproveCancel from './components/ApproveCancel';
import Setting from './components/Setting';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import Privacy from './components/Privacy';
import Referrals from './components/Referrals';

function App() {
  return (
    <div className="section">
       {/* <Login/> */}
       {/* <Investment/> */}
    
       <Routes>
       <Route path="/" element={<Home/> } />
       <Route path="/login" element={<Login />} />
       <Route path="/Invest/:id" element={<Investment />} />
       <Route path='/deposit/:id' element={<Deposit/>}/>
       <Route path='/deposit/copy/:id' element={<VoleckWallet />}/>
       <Route path='/register/Verify/:id' element={<VerifyAccount />}/>
       <Route path='/forgetPassword' element={<ForgetPassword/>}/>
       <Route path='/resetPassword/:id' element={<ResetPassword/>}/>
       <Route path='/withdraw/confirm' element={<WithdrawConfirm />}/>
       <Route path='/withdraw' element={<Withdraw/>}/>
       <Route path='/transfer' element={<Transfer/>}/>
       <Route path='/walletAddress' element={<WalletAddress/>}/>
       <Route path='/startTrading' element={<StartTrading/>}/>
       <Route path='/tradingCenter' element={<ApproveCancel/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/tradingProgress/Cancel' element={<CancelTrading/>}/>
       <Route path='/tradingProgress' element={<TradingProgress/>}/>
       <Route path='/setting' element={<Setting/>}/>
       <Route path='/FAQ' element={<FAQ/>}/>
       <Route path='/disclaimer' element={<Disclaimer/>}/>
       <Route path='/privacy' element={<Privacy/>}/>
       <Route path='/referral' element={<Referrals/>}/>







      




       </Routes>
    </div>
  );
}

export default App;
