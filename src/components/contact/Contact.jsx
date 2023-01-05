import "../../index.css"
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';


export const Contact = () => {
  return (
    <div className="bg-blue-500 w-screen  flex items-center justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center px-8">
      <span className="text-blue-100 font-bold py-8 text-lg sm:text-2xl uppercase mr-2" >be in touch with us</span>
        <form className="flex">
            <input className="px-4 w-36 py-4 sm:w-48 text-sm rounded-md sm:rounded-l-md" type="text" placeholder="Enter your email" />
            <button className="bg-gray-700 hidden sm:flex text-gray-200 px-8 py-4 uppercase text-lg rounded-r-md"> join us</button>
        </form>
        <div className="hidden lg:flex gap-2 text-blue-100 text-xl">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            <PinterestIcon />
        </div>

      </div>
        
    </div>
  )
}
