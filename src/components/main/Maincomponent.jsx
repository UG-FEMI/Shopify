import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ReactComponent as Image } from '../../iconsImages/dotted.svg'
import Button from '../button/Button';
import Shop from '../../iconsImages/shop.png'
import Store from '../../iconsImages/store.png'
import Domain from '../../iconsImages/domain.png'
import Product from '../../iconsImages/product.png'
import Pay from '../../iconsImages/payment.png'



function Maincomponent() {

  const [toggle, setToggle] = useState(null);


  const toggleButton = (index) => {
    setToggle(index)
  }

  const listItems = [

    {
      headText: 'Customize your online store',
      bodyText: 'Choose a theme and add your logo, color and images to refelct your brand.',
      button: <Button  text='Customize theme' />,
      image: Shop
    },
    {
      headText: 'Add your first product',
      bodyText: 'Write a description, add photo, and set pricing for the product you plan to sell',
      button: <Button className='borde' text='Add product'/>,
      image: Product
    },
    {
      headText: 'Add a custom domain',
      bodyText: 'Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store.',
      button: <Button  text='Add Domain' />,
      image: Domain
    },
    {
      headText: 'Name your store',
      bodyText: 'Your temporary  store name is femi collections. The store name appears in your admin and your online store',
      button: <Button  text='Name store' />,
      image: Store
    },
    {
      headText: 'Setup a payment provider',
      bodyText: 'Choose a payment provider to start accepting payments, you would need to an create acccount with the payment providervand set it up with your shopify store',
      button: <Button text='Set up payment' />,
      image: Pay
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
        <div className='pb-3'>
          <div className='flex justify-between'>
            <div className='pb-2'>
              <h2 className='pb-2 text-[15px] font-[600]'>Setup Guide</h2>
              <p className='text-[13px] font-[400]'>Use this personalized guide to get your store up and running.</p>
            </div>
            <IoIosArrowUp />
          </div>
          <p className='text-[13px] font-[300]'>1/5 completed</p>
        </div>


        <div>
          {listItems.map((listItems, index) => {
            return (
              <ul key={index}>
                <li onClick={() => toggleButton(index)}>
                  <div className={`py-3 px-1 ${toggle === index ? 'bg-[#f4f4f4]' : 'null'}`}>
                    <div className='flex items-center gap-2'>
                      <Image /> 
                      <p className={`text-[14px] font-[400] ${toggle === index ? 'font-[550]' : ''}`} >{listItems.headText}</p>
                    </div>
                    {
                      toggle === index && (

                        <div className='flex px-[32px]'>
                          <div>
                            <p className='py-4 text-[15px] font-[300] text-[#575558]'>{listItems.bodyText} <a href="" className='text-blue-600 font-[400]'>Learn More</a></p>
                            <button className='bg-[#303030] px-3 py-1 text-white rounded-[8px] text-[12px]'>{listItems.button}</button>
                          </div>
                          <img className src={listItems.image} alt="" />
                        </div>
                      )
                    }
                  </div>
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
