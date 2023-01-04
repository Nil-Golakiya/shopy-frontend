import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Index"
import Dashboard from './Pages/Dashbord';
import Login from './Pages/Login';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Pages/Wishlist';
import Account_details from './Pages/Account_details';
import Account_address from './Pages/Account_address';
import Account_order from './Pages/Account_order';
let loaded = false;



function App() {


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route exact path="/" element={<Homepage Component={Dashboard} />} />
        <Route exact path="/wishlist" element={<Homepage Component={Wishlist} />} />
        <Route exact path="/account-details" element={<Homepage Component={Account_details} />} />
        <Route exact path="/account-address" element={<Homepage Component={Account_address} />} />
        <Route exact path="/account-order" element={<Homepage Component={Account_order} />} />
        <Route path="/products" element={<Homepage Component={Account_order} />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
