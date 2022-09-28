import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { cartData } from '../data/dummy'
import Button from './Button'
import StateContext from '../context/ContextProvider'

const Cart = () => {
  const [cartValues, setCartValues] = useState(cartData)
  const [totalPrice, setTotalPrice] = useState(0)

  const ctx = useContext(StateContext)

  const raiseItem = id => {
    let productIndex = cartValues.findIndex(item => item.id == id)
    let product = cartValues[productIndex]

    const newProduct = { ...product, count: product.count + 1 }

    cartValues[productIndex] = { ...newProduct }
    setCartValues(cartValues)
    setTotalPrice(totalPrice + +product.price.substring(1))
  }

  const removeItem = id => {
    let productIndex = cartValues.findIndex(item => item.id == id)
    let product = cartValues[productIndex]
    if (product.count > 0) {
      const newProduct = { ...product, count: product.count - 1 }
      cartValues[productIndex] = { ...newProduct }
      setCartValues(cartValues)
      setTotalPrice(totalPrice - +product.price.substring(1))
    }
  }

  return (
    <div className='w-screen bg-half-transparent fixed top-0 right-0 nav-item '>
      <div className='bg-white h-screen  float-right w-400 dark:bg-secondary-dark-bg dark:text-gray-200'>
        <div className='flex justify-between items-center m-8'>
          <h2 className='font-semibold '>Shopping Cart</h2>
          <button
            type='button'
            onClick={() => {
              ctx.closeClickHandler()
            }}
            style={{ color: 'rgb(153,171, 180)', borderRadius: '50%' }}
            className='text-2xl p-3 hover:drop-shadow-xl hover:bg-slate-100 dark:hover:bg-gray-700'
          >
            <MdOutlineCancel />
          </button>
        </div>
        {cartValues.map(item => (
          <div
            key={item.id}
            className='flex m-5 border-b-1 p-3 dark:bg-secondary-dark-bg justify-left items-center bg-gray-100 rounded-t-lg'
          >
            <img src={item.image} className='w-28 h-26 rounded-md' />
            <div className='ml-3'>
              <p className='font-semibold'>{item.name}</p>
              <p className='font-thin'>{item.category}</p>
              <div className='flex items-center mt-5'>
                <span className='font-bold'>{item.price}</span>
                <div className='flex items-center  border-color rounded bg-white dark:bg-gray-600 ml-7'>
                  <p
                    className='p-1  cursor-pointer border-r-1 dark:border-gray-600 border-color hover:text-red-600 '
                    onClick={removeItem.bind(this, item.id)}
                  >
                    <AiOutlineMinus />
                  </p>
                  <p className='p-1 border-color dark:border-gray-600 text-green-600'>
                    {item.count}
                  </p>
                  <p
                    className='p-1 cursor-pointer border-l-1 border-color dark:border-gray-600 hover:text-green-600'
                    onClick={raiseItem.bind(this, item.id)}
                  >
                    <AiOutlinePlus />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className='flex-col items-center justify-center mt-10'>
          <div className='flex font-bold items-center justify-center'>
            <p>Total Price:</p>
            <span className='ml-5'>{totalPrice}</span>
          </div>
          <div className='flex item-center justify-center'>
            <button
              className='w-44 h-10 mt-8 rounded-md text-white hover:opacity-50 '
              style={{ background: ctx.themeColor }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
