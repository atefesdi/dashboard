import React, { useContext } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import StateContext from '../context/ContextProvider'
import { userProfileData } from '../data/dummy'
import avatar from '../data/avatar.jpg'

const Chat = () => {

  const ctx = useContext(StateContext)


  return (
    <div className=' absolute w-400 shadow-xl h-auto top-16 right-5 bg-white p-5 border-1 dark:border-gray-600 dark:bg-secondary-dark-bg dark:text-white'
    style={{zIndex: "1000"}}
    >
      <div className='flex justify-between items-center '>
        <h2 className='font-semibold '>User Profile</h2>
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
      <div  className='flex my-2  dark:bg-gray-700 p-2 rounded-md  justify-center items-center'>
          <img src={avatar} className='w-28 h-28 rounded-full' />
          <div className='ml-3'>
            <p className='text-gray-500'>Atefe Saeedi</p>
            <span className=' font-thin text-gray-400'>Front-end Developer</span>
            <p>atefe.saeedi1994@gmail.com</p>
          </div>
        </div>
      {userProfileData.map((item, index) => (
        <div key={index} className='flex my-2 border-b-1 dark:bg-gray-700 p-2 rounded-md cursor-pointer'>
         
         <div className='w-14 h-14 rounded-lg flex justify-center items-center' style={{color: item.iconColor , background:item.iconBg}}>{item.icon}</div>
          <div className='ml-3'>
            <p className='text-gray-500'>{item.title}</p>
            <p>{item.desc}</p>
            
          </div>
        </div>
      ))}
      <button className='w-full  text-gray-700 mt-2 h-10 hover:opacity-50' style={{background : ctx.themeColor}}>
        Logout
      </button>
    </div>
  )
}

export default Chat
