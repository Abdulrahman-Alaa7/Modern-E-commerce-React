import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/components/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProducts from "./pages/CompareProducts";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import ProductPage from "./pages/ProductPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsService from "./pages/TermsService";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import ShippingPage from "./pages/ShippingPage";
import Payment from "./pages/Payment";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="information" element={<CheckOut />} />
            <Route path="information/shipping" element={<ShippingPage />} />
            <Route path="information/shipping/payment" element={<Payment />} />
            <Route path="store" element={<OurStore />} />
            <Route path="store/:id" element={<ProductPage />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-service" element={<TermsService />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
