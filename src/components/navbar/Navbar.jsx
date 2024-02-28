import React from 'react'
import Logo from '../../iconsImages/logo.svg'
// import Notification from '../../iconsImages/notifyicon.svg'
// import Search from '../../iconsImages/searchicon.svg'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";


function Navbar() {
  return (
    <nav className='bg-[#1C181D] '>
      <div className='container mx-auto flex  justify-between p-2'>
        <header className='flex'>
          <img src={Logo} alt="" />
          <h1>shopify</h1>
        </header>
        <div className='flex items-center gap-1 stroke-[#616161] bg-[#303030] text-white py-1 px-2 w-[480px] h-[32px] p-[8px] rounded-[8px] border-[1px]'>
          {/* <img src={Search} alt="" className=''/> */}
          <CiSearch className='text-[20px]'/>
          <input type="text" placeholder='Search' className='border-none outline-none w-full bg-transparent'/>
        </div>
        <div className='flex gap-1 items-center'>
          {/* <img src={Notification} alt="" className='] text-[white] h-[32px] p-[8px] rounded-[8px] stroke-[#616161] bg-[#303030]'/> */}
          <div className='text-white text-[20px] p-[8px]  h-[32px] rounded-[8px] stroke-[#616161] bg-[#303030]'>
          <IoNotificationsOutline />
          </div>
          <div className='flex items-center gap-8px text-[white]  h-[32px] py-[8px] pl-[8px] rounded-[8px] stroke-[#616161] bg-[#303030]'>
            <h2 className='mr-[8px]'>Davii Collections</h2>
            <h3 className='rounded-[6px] bg-green-400 h-[30px] w-[30px] text-center p-[3px]'>DC</h3>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


