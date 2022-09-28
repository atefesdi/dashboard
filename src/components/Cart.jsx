import React , {useState} from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { cartData } from '../data/dummy'
import Button from './Button'
import StateContext from '../context/ContextProvider'

const Cart = () => {

  
  const [totalPrice , setTotalPrice] = useState(0);

  const raiseItem = (price)=>{
    const priceVlid = price.substring(1);
    setTotalPrice(totalPrice + +priceVlid)
    console.log(totalPrice)   
  }
  const removeItem = (price) =>{
    const priceVlid = price.substring(1);
    if(totalPrice > 0){
      setTotalPrice(totalPrice - +priceVlid)
    }else{
      return
    }
    console.log(totalPrice)   
  }
  


  return (
    <div className='w-screen bg-half-transparent fixed top-0 right-0 nav-item '>
      <div className='bg-white h-screen  float-right w-400 dark:bg-secondary-dark-bg dark:text-gray-200'>
        <div className='flex justify-between items-center m-8'>
          <h2 className='font-semibold '>Shopping Cart</h2>
          <button
            type='button'
            onClick={() => {
              ctx.setThemeSetting(false)
            }}
            style={{ color: 'rgb(153,171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl '
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartData.map((item, index) => (
          <div
            key={index}
            className='flex m-5 border-b-1 p-3 justify-left items-center bg-gray-100 rounded-t-lg'
          >
            <img src={item.image} className='w-28 h-26 rounded-md' />
            <div className='ml-3'>
              <p className='font-semibold'>{item.name}</p>
              <p className='font-thin'>{item.category}</p>
              <div className='flex items-center mt-5'>
                <span className='font-bold'>{item.price}</span>
                <div className='flex items-center  border-color rounded bg-white ml-7'>
                  <p className='p-1  cursor-pointer border-r-1 dark:border-gray-600 border-color hover:text-red-600 '
                  onClick={removeItem.bind(this , item.price)}
                  >
                    <AiOutlineMinus />
                  </p>
                  <p className='p-1 border-color dark:border-gray-600 text-green-600'>
                    0
                  </p>
                  <p className='p-1 cursor-pointer border-l-1 border-color dark:border-gray-600 hover:text-green-600'
                  onClick={raiseItem.bind(this , item.price)}
                  >
                    <AiOutlinePlus />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div>
          <p>Total Price:</p>
          <span>{totalPrice}</span>
        </div>
        <button>Continue Shopping</button>
      </div>
    </div>
  )
}

export default Cart
