import React, { useContext, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import StateContext from '../context/ContextProvider'

const NavButton = ({ color, dotColor, customFunc, title, icon }) => {
  return (
    <TooltipComponent content={title} position='BottomCenter'>
      <button
        type='button'
        onClick={() => customFunc()}
        style={{ color }}
        className='relative text-xl rounded-full p-3 hover:bg-light-gray'
      >
        <span
          style={{ background: dotColor }}
          className='absolute inline-flex h-4 w-4 right-1 top-1 rounded-full '
        />
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const ctx = useContext(StateContext)

  useEffect(()=>{

    const sizeOfScreen = () => {
      let currentWidth = window.innerWidth
      ctx.setScreenSize(currentWidth)
    }

    window.addEventListener("resize" , sizeOfScreen)
    sizeOfScreen();
  }, []);

  useEffect(()=>{
    if(ctx.screenSize < 900){
      ctx.setIsActiveMenu(false)
    }else{
      ctx.setIsActiveMenu((true))
    }
  } , [ctx.screenSize])

  const activeMenuHandler = () => {
    ctx.setIsActiveMenu(prev => !prev)
  }

  return (
    <div className={`flex justify-between p-2 relative transition-all dark:bg-secondary-dark-bg bg-white`}>
      <NavButton
        title='Menu'
        customFunc={activeMenuHandler}
        color={ctx.themeColor}
        icon={<AiOutlineMenu />}
      />
      <div className='flex'>
        <NavButton
          title='Cart'
          customFunc={() => ctx.clickHandler('cart')}
          color={ctx.themeColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title='Chat'
          dotColor='#03C9D7'
          customFunc={() => ctx.clickHandler('chat')}
          color={ctx.themeColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title='Notification'
          dotColor='rgb(254, 201, 15)'
          customFunc={() => ctx.clickHandler('notification')}
          color={ctx.themeColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content='Profile' position='BottomCenter'>
          <div
            className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg '
            onClick={() => ctx.clickHandler('userProfile')}
          >
            <img
              src={avatar}
              className='rounded-full w-8 h-8'
              alt='user-profile'
            />
            <p>
              <span className='text-gray-400 text-14 '>Hi,</span>
              <span className='text-gray-400 font-bold ml-1 text-14'>
                Atefe
              </span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />
          </div>
        </TooltipComponent>
        {ctx.isClicked.cart && <Cart />}
        {ctx.isClicked.chat && <Chat />}
        {ctx.isClicked.userProfile && <UserProfile />}
        {ctx.isClicked.notification && <Notification />}
      </div>
    </div>
  )
}

export default Navbar
