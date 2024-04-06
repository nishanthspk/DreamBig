import React from 'react'
import DreamBig from './assets/DreamBig.png'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className=' gradient-container h-screen font-mono overflow-x-hidden'>
        <div className=" pt-[10%] text-center">
            <p className=' text-6xl font-semibold flex justify-center'>Welcome to DreamBig!</p>
            <p className=' text-2xl pt-6 flex justify-center'>We revolutionize fantasy cricket predictions by providing transparent <br />transactions and reliable insights, ensuring a fair and trustworthy <br /> gaming experience for all users.</p>
            <div className="flex justify-center items-center hover:scale-95 ease-in-out duration-150 pt-3">
              <Link
                to="/landing"
                className="py-3 px-3 w-auto border-2 border-black flex justify-center cursor-pointer font-semibold text-black hover:bg-black hover:border-white hover:text-white"
              >
                Get started 🡥
              </Link>
            </div>
        </div>
        <div>
            <img className=' absolute bottom-0 w-full opacity-5' src={DreamBig} alt="" />
        </div>
    </div>
  )
}

export default Landing
