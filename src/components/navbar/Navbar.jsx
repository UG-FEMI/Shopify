import React, { useState } from 'react'
import Logo from '../../iconsImages/logo.svg'
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoCheckmarkOutline, IoFilter} from 'react-icons/io5'
import { MdOutlineStorefront } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




function Navbar() {
  const [click, setClick] = useState(null);

  const clickButton =() => {
    setClick(!click)
  }
  const [alert, setAlert] = useState(null);

  const AlertButton =() => {
    setAlert(!alert)
  }

  return (
    <nav className='bg-[#1C181D]'>
      <div className='px-3 flex item-center justify-between p-2'>
        <header className='flex gap-1'>
          <img src={Logo} alt="" />
          <h1 className='text-[20px] text-[white]'>shopify</h1>
        </header>
        <div className='flex items-center gap-1 stroke-[#616161] bg-[#303030] text-white py-1 px-2 w-[400px] h-[30px] p-[8px] rounded-[6px] border-[1px]'>
          <CiSearch className='text-[20px]' />
          <input type="text" placeholder='Search' className='border-none outline-none w-full bg-transparent' />
        </div>
        <div className='flex gap-1 items-center relative'>
          <div onClick={AlertButton}>
            <IoNotificationsOutline className='text-white text-[30px] py-1 rounded-[6px] stroke-[#616161] bg-[#303030]' />
          </div>
          {
            alert &&
            <div  className='bg-[#f9f9f9] absolute w-[350px] top-11 right-0 rounded-[10px] p-2'>
              <div className='flex items-center justify-between pb-5'>
                  <h1 className='text-[14px] font-[500]'>Alerts</h1>
                  <div className='flex gap-1 items-center text-[#636262]'>
                    <IoFilter/>
                    <IoIosCheckmarkCircleOutline/>
                  </div>
              </div>
              <div className='bg-[#e7e7e7] p-2 text-center'>
                <h1 className='text-[13px]'>Alerts about your store and account will show here</h1>
              </div>
            </div>
          }
          <div onClick={clickButton} className='flex items-center gap-8px text-[white] cursor-pointer h-[32px] py-[8px] pl-[8px] rounded-[8px] stroke-[#616161] bg-[#303030]'>
            <h1 className='mr-[8px] text-[12px]'>Davii Collections</h1>
            <h1 className='rounded-[6px] bg-green-400 h-[30px] w-[30px] text-center p-[5px] text-[14px] font-[500]'>DC</h1>
          </div>

          {
            click && 
            <div className='bg-[#f9f9f9] absolute w-[270px] top-11 right-0 rounded-[10px] p-2'>
                  <div>
                    <div className='flex items-center justify-between bg-gray-200 px-2 py-1 rounded-[6px]'>
                      <div className='flex items-center gap-3'>
                        <h1 className='rounded-[6px] bg-green-400 h-[30px] w-[30px] text-center p-[5px] text-[14px] font-[500]'>DC</h1>
                        <h2 className='font-[500] text-[15px]'>Davii Collections</h2>
                      </div>
                      <IoCheckmarkOutline />
                    </div>
                    <div className='flex items-center gap-3 p-2 font-[500]'>
                      <MdOutlineStorefront className='text-[18px]' />
                      <h3 className='text-[14px]'>All stores</h3>
                    </div>
  
                  </div>
                  <hr className='py-[5px]'/>
                  <ul className='main-list leading-[2.5rem] text-[13px] text-[#434040]'>
                    <li>Help Center </li>
                    <li>ChangeLog</li>
                    <li>Community Forum</li>
                    <li>Hire a Shopify Patner</li>
                    <li >Keyboard Shortcuts</li>
                    <hr className='py-[5px] mt-3'/>
                    
                      <div className='leading-[1.2rem] p-2'>
                        <h2>Ayodele Femi</h2>
                        <p className='opacity-60'>ayodele.mickey89@gmail.com</p>
                      </div>
                    
                    <li>Manage Account</li>
                    <li>Log Out</li>
                  </ul>  
                </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar


