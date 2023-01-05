import React from "react";
import "../../index.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
export const Menu = ({ menuOpen, setMenuOpen }) => {
  console.log("menu   " + menuOpen);
  return (
    <div
      className="fixed lg:hidden top-[120px] left-0 w-screen h-screen bg-red-600 bg-opacity-0 z-auto"
      onClick={() => {
        setMenuOpen(false);
      }}
    >
      <div
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(-800px)" }}
        className="flex flex-col relative w-[160px] h-128 gap-4 -top-[30px] left-0  px-8 py-4 text-gray-600 bg-white shaddow-lg transition-all"
      >
        <div className="flex">
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
        <Link className="link" to="/faq">
          <PersonOutlineOutlinedIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};
