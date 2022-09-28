import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import StateContext from '../context/ContextProvider'
import { chatData } from '../data/dummy'

const Chat = () => {

  const ctx = useContext(StateContext)


  return (
    <div className=' absolute shadow-xl w-400 h-auto top-16 right-20 bg-white p-5 border-1 dark:border-gray-600 dark:bg-secondary-dark-bg dark:text-white'
    style={{zIndex: "1000"}}
    >
      <div className='flex justify-between items-center '>
        <h2 className='font-semibold '>Messages</h2>
        <button
          type='button'
          onClick={() => {
            ctx.closeClickHandler()
          }}
          style={{ color: 'rgb(153,171, 180)', borderRadius: '50%' }}
          className='text-2xl p-2 hover:drop-shadow-xl  hover:bg-slate-100 dark:hover:bg-gray-700'
        >
          <MdOutlineCancel />
        </button>
      </div>
      {chatData.map((item, index) => (
        <div key={index} className='flex my-2 bg-gray-100 dark:bg-gray-700 p-2 rounded-md cursor-pointer'>
          <img src={item.image} className='w-20 h-25 rounded-md' />
          <div className='ml-3'>
            <p className='text-gray-500'>{item.message}</p>
            <p>{item.desc}</p>
            <span className=' font-thin text-gray-400'>{item.time}</span>
          </div>
        </div>
      ))}
      <button className='w-full  text-gray-700 mt-2 h-10 hover:opacity-50' style={{background : ctx.themeColor}}>
        see all messages
      </button>
    </div>
  )
}

export default Chat
