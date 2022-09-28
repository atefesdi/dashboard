import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import StateContext from '../context/ContextProvider'

const Sidebar = () => {
  const ctx = useContext(StateContext)

  const activelinks =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white  text-md m-2'
  const normalLinks =
    'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const closeHandler = () => {
    if( ctx.isActiveMenu && ctx.screenSize <900 ){
      ctx.setIsActiveMenu(false)
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 '>
      <div
        className={` transition-all  duration-500 ${
          ctx.isActiveMenu ? ' opacity-1 ' : ' opacity-0'
        }`}
      >
        <div className='flex justify-between items-center'>
          <Link
            to='/'
            className='item-center flex mt-4 text-xl  gap-3 ml-3 font-extrabold tracking-tight dark:text-white text-slate-900'
          >
            <SiShopware /> <span>Admin Dashboard</span>
          </Link>
          <TooltipComponent content='Menu' position='BottomCenter'>
            <button
              type='button'
              className='text-xl rounded-full p-3  hover:bg-light-gray mt-4 block md:hidden '
              onClick={closeHandler}
            >
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map(item => (
            <div key={item.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>
              {item.links.map(link => (
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  onClick={closeHandler}
                  style={({isActive})=> ({backgroundColor : isActive ? ctx.themeColor : ""})}
                  className={({ isActive }) =>
                    isActive ? activelinks : normalLinks
                  }
                >
                  {link.icon}
                  <span className='capitalize'>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
