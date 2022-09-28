import React,{useContext} from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { BsCheck } from 'react-icons/bs'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import StateContext from '../context/ContextProvider'

const ThemeSettings = () => {


  const ctx = useContext(StateContext)
  return (
    <div className='w-screen bg-half-transparent fixed nav-item top-0 right-0 '>
      <div className='h-screen bg-white dark:text-gray-200 dark:bg-secondary-dark-bg float-right w-400  '>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold'>Settings</p>
          <button
            type='button'
            onClick={() => {ctx.setThemeSetting(false)}}
            style={{ color: 'rgb(153,171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl '
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className='border-t-1 flex-col border-color p-4 mx-4'>
          <p className='font-semibold text-lg'>Theme Options</p>
          <div>
            <input
              type='radio'
              id='light'
              name='theme'
              value='Light'
              onChange={ctx.modeHandler}
              checked={ctx.themeMode === "Light"}
            />
            <label htmlFor='light' className='ml-2 text-md cursor-pointer'>
              Light
            </label>
          </div>

          <div>
            <input
              type='radio'
              id='dark'
              name='theme'
              value='Dark'
              onChange={ctx.modeHandler}
              checked={ctx.themeMode === "Dark" }
            />
            <label htmlFor='dark' className='ml-2 text-md cursor-pointer'>
              Dark
            </label>
          </div>
        </div>
        <div className='border-t-1 flex-col border-color p-4 mx-4'>
          <p className='font-semibold text-lg'>Theme Colors</p>
          <div className='flex gap-3 mt-5'>
            {themeColors.map((item, index) => (
              <TooltipComponent
                content={item.name}
                key={index}
                position='TopCenter'
              >
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button
                  type='button'
                  className='h-10 w-10 cursor-pointer flex gap-5
                  items-center rounded-full'
                  style={{backgroundColor: item.color}}
                  onClick={()=>{ctx.colorHandler(item.color)}}
                  >
                  <BsCheck 
                  className={`ml-2 text-2xl text-white ${item.color === ctx.themeColor ? 'block' : 'hidden'} `}
                  />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings
