import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Index"
import Dashboard from './Pages/Dashbord';
import Login from './Pages/Login';
import { Flip, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Wishlist from './Pages/Wishlist';
import Account_details from './Pages/Account_details';
import Account_address from './Pages/Account_address';
import Account_order from './Pages/Account_order';
import Product_list from './Pages/Product_list';
import Product_page1 from './Pages/Product_page1';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import { useEffect, useState } from 'react';
import Contactus from './Pages/Contactus';
import Aboutus from './Pages/Aboutus';
import Loader from './Components/Loader';
import Order_details from './Pages/Order_details';
import Error_page from './Pages/Error_page';
let loaded = false;



function App() {

  // useEffect(() => {

  //   const LoadExternalScript = () => {
  //     const externalScript = document.createElement("script");
  //     // externalScript.onerror = loadError;
  //     externalScript.id = "external";
  //     externalScript.async = true;
  //     externalScript.type = "text/javascript";
  //     externalScript.setAttribute("crossorigin", "anonymous");
  //     document.body.appendChild(externalScript);
  //     externalScript.src = '/js/app-html.js';
  //   };

  //   LoadExternalScript()

  //   // const script = document.createElement("script");
  //   // script.src = "/js/app.js";
  //   // script.async = true;
  //   // document.body.appendChild(script);

  //   // return () => {
  //   //   document.body.removeChild(script);
  //   // }
  //   // require("./asstes/js/vendor-special/lazysizes.min.js")
  //   // require("./asstes/js/vendor-special/ls.bgset.min.js")
  //   // require("./asstes/js/vendor-special/ls.aspectratio.min.js")
  //   // require("./asstes/js/vendor-special/jquery.min.js")
  //   // require("./asstes/js/vendor-special/jquery.ez-plus.js")
  //   // require("./asstes/js/vendor/vendor.min.js")
  //   // require("./asstes/js/app-html.js")
  // }, [])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
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
        <Route exact path="/account-order/:id" element={<Homepage Component={Order_details} />} />
        <Route path="/products">
          <Route path=":category" element={<Homepage Component={Product_list} />} />
          <Route path=":category/:subcategory" element={<Homepage Component={Product_list} />} />
          <Route path=":category/:subcategory/:id" element={<Homepage Component={Product_page1} />} />
        </Route>
        <Route exact path="/cart" element={<Homepage Component={Cart} />} />
        <Route exact path="/checkout" element={<Homepage Component={CheckOut} />} />
        <Route exact path="/contact" element={<Homepage Component={Contactus} />} />
        <Route exact path="/about" element={<Homepage Component={Aboutus} />} />
        <Route exact path="*" element={<Homepage Component={Error_page} />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>

  );
}

export default App;
