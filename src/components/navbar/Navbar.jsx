import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
//import "./navbar.scss";
import "../../index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Cart } from "../cart/Cart";
import { Menu } from "../menu/Menu";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="bg-white w-screen flex flex-col justify-center items-center  border-b-1 border-gray-200 px-6 pb-4  sticky  top-0 z-50">
      <div className=" max-w-7xl w-full py-4 mx-8 flex justify-between items-center">
        {/* LGStore */}
        <div className="flex items-center gap-2">
          <div
            className="lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <MenuOutlinedIcon className="text-[48px]" />
          </div>

          <Link
            className=" uppercase text-lg   mr-2 sm:text-4xl font-bold text-indigo-700"
            to="/"
          >
            LGengStore
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
            {/* <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button> */}
          </form>

          <FavoriteBorderIcon className="" />

          <div className="relative" onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingCartOutlinedIcon className="mr-4" />
            <span className="text-sm w-5 h-5 rounded-full bg-indigo-600 text-indigo-100 absolute top-[-10px] right-0 flex items-center justify-center ">
             {products.length}
            </span>
          </div>
        </div>
      </div>

      {/*re */}

      <div className="hidden lg:flex justify-between w-full max-w-7xl  ">
        <div className="flex gap-1 items-center">
          <MonetizationOnOutlinedIcon />
          <Link className="link" to="/sale">
            {/* <img src="/img/en.png" alt="" /> */}
            <span className="text-pink-600 font-bold">Sale</span>
          </Link>
          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link to="/productsnew">
            <span>New Season</span>
          </Link>

          <KeyboardArrowDownIcon />
        </div>
        <div className="item">
          <Link className="link" to="/products/2">
            Men
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/1">
            Women
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/3">
            Children
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/products/4">
            Accessories
          </Link>
        </div>

        <div className="item">
          <Link className="link" to="/">
            Homepage
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            About
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            Contact
          </Link>
        </div>
        <div className="item">
          <Link className="link" to="/">
            Stores
          </Link>
        </div>
        <div className="icons">
          <Link to="/faq">
            <PersonOutlineOutlinedIcon />
          </Link>
        </div>
      </div>
      {cartOpen && <Cart className="relative " />}
      {menuOpen && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
    </div>
  );
};

export default Navbar;
