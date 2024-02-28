import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {ReactComponent as Image} from '../../iconsImages/dotted.svg'
import Button from '../button/Button';



function Maincomponent() {

  const [toggle, setToggle] = useState(null);
    

  const toggleButton = (index) => {
    setToggle(index)
  }

  const listItems = [

    {
      icon: <Image/> ,
      headText: 'Customize your online store',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      button: <Button className='bg-red' text=''></Button>
    },
    {
      icon: <Image/> ,
      headText: 'Customize your online store',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      button: <Button className='ccccccccccccc'/>
    },
    {
      icon: <Image/> ,
      headText: 'Customize your online store',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      button: <Button className='ccccccccccccc'/>
    },
    {
      icon: <Image/> ,
      headText: 'Customize your online store',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      button: <Button className='ccccccccccccc'/>
    },
    {
      icon: <Image/> ,
      headText: 'Customize your online store',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      
    }


  ]

  return (
    <div className='container mx-auto p-[5px] w-[800px]'>
      <div className='bg-[#1C181D] text-white flex justify-between rounded-[8px] py-[12px] px-[16px]'>
        <p>Extend your trial for $1/month for 3 months on select plans.</p>
        <div className='flex gap-1 items-center'>
          <button>Select a plan</button>
          <RxCross1 className='text-[20px]' />
        </div>
      </div>
      <div className='rounded-[8px] py-[12px] px-[16px] bg-[#FFFFFF]'>
        <div>
          <div className='flex justify-between'>
            <div>
              <h2>Setup Guide</h2>
              <p>Use this personalized guide to get your store up and running.</p>
            </div>
            <IoIosArrowUp />
          </div>
          <p>1/5 completed</p>
        </div>


        <div>
          {listItems.map((listItems, index) => {
            return (
              <ul>
                <li onClick={() => toggleButton(index) }>
                  <div className='flex items-center'>
                    {listItems.icon}
                    <p>{listItems.headText}</p>
                  </div>
                 {
                   toggle === index && (
                    <div>
                   <p>{listItems.bodyText}<a href="" >Learn More</a></p>
                    <button>{listItems.button}</button>
                  </div>
                   )
                 }
                </li>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Maincomponent
