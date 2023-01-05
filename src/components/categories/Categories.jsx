import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center   px-6 py-16 bg-red-100">
      <div className="max-w-7xl">
      <div className="grid grid-cols-4 grid-rows-2 gap-1 sm:gap-4 bg-blue-200 h-[300px] sm:h-[800px] overflow-hidden" >
        <div className="relative overflow-hidden">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer px-2 sm:px-6 py-2 top-0 left-0 right-0 bottom-0 m-auto  bg-gray-100 w-min h-10 uppercase text-gray-500 text-xs md:text-sm">
            <Link to="/sale">Sale</Link>
          </button>
        </div>
        <div className="row-start-2 row-span-1 relative ">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer px-2 sm:px-6 py-2 top-0 left-0 right-0 bottom-0 m-auto  bg-gray-100 w-min h-10 uppercase text-gray-500 text-xs sm:text-sm">
            <Link to="/products/1">women</Link>
          </button>
        </div>
        <div className="relative col-start-2 row-span-2">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer h-16  px-1 sm:px-6  py-2 top-0 left-0 right-0 bottom-0 m-auto  bg-gray-100  uppercase text-gray-500 text-xs sm:text-sm">
            <Link to="/productsnew">new season</Link>
          </button>
        </div>
        <div className="relative">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer  px-2 sm:px-6  py-2 top-0 left-0 right-0 bottom-0 m-auto bg-blue-500 text-blue-100 w-min h-10 uppercase text-xs sm:text-sm">
            <Link to="/products/2">men</Link>
          </button>
        </div>{" "}
        <div className="relative">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer  px-2 sm:px-6  py-2 top-0 left-0 right-0 bottom-0 m-auto  bg-blue-500 text-blue-100 w-min h-10 uppercase text-xs sm:text-sm">
            <Link to="/products/4">Accessories</Link>
          </button>
        </div>{" "}
        <div className="col-start-3 col-span-2 row-start-2 relative">
          <img
            className="w-full h-full  object-cover "
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute cursor-pointer  px-2 sm:px-6  py-2 top-0 left-0 right-0 bottom-0 m-auto  bg-gray-100 w-min h-10 uppercase text-gray-500 text-xs sm:text-sm">
            <Link to="/subcat/4">shoes</Link>
          </button>
        </div>
      </div>

      </div>
      
    </div>
  );
};
