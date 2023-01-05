import React from "react";
//import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-100 w-screen flex flex-col justify-center items-center   px-6 py-16 ">
      <div className="max-w-7xl">
        <div className="flex flex-col">
          <div className="flex gap-4 mb-8">
            <div className="flex flex-[1] flex-col gap-2 text-gray-400 text-sm ">
              <h1 className="text-gray-500 text-lg">Categories</h1>
              <Link to="/products/1">
                <span>Women</span>
              </Link>
              <Link to="/products/2">
                <span>Men</span>
              </Link>
              <Link to="/products/3">
                <span>Children</span>
              </Link>
              <Link to="/products/4">
                <span>Accessories</span>
              </Link>
              <Link to="/productsnew">
                <span>New Arrivals</span>
              </Link>
            </div>
            <div className="flex flex-[1] flex-col gap-2 text-gray-400 text-sm ">
              <h1 className="text-gray-500 text-lg">Links</h1>
              <Link to="/faq">
                <span>FAQ</span>
              </Link>
              <span>Pages</span>
              <Link to="/">
                <span>Stores</span>
              </Link>
              <span>Compare</span>
              <span>Cookies</span>
            </div>
            <div className="flex  flex-[1] flex-col gap-2 text-gray-400 text-sm ">
              <h1 className="text-gray-500 text-lg">About</h1>
              <span>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor
                e.
              </span>
            </div>
            <div className="flex flex-[1] flex-col gap-2 text-gray-400 text-sm ">
              <h1 className="text-gray-500 text-lg">Contact</h1>
              <span>
                Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                eiusmod tempor t, seddo eiusmod tempor
                incididunt ut labore etdolore.
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-blue-500 font-bold text-xl ">
                LGengstore
              </span>
              <span className="text-xs text-gray-400">
                © Copyright 2023. All Rights Reserved
              </span>
            </div>
            <div className="right">
              <img className="h-6 sm:h-12" src="/img/payment.png" alt="payments" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
