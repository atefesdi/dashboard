import React, { useContext } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosMore } from 'react-icons/io'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components'
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData
} from '../data/dummy'
import StateContext from '../context/ContextProvider'
import product9 from '../data/product9.jpg'

const Ecommerce = () => {

  const ctx = useContext(StateContext)

  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 lg:w-4/5 w-full h-44 dark:bg-secondary-dark-bg  rounded-xl p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,334.78</p>
            </div>
            <button
              type='button'
              style={{ background: ctx.themeColor }}
              className=' text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  h-10 px-2 mt-3'
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={ctx.themeColor}
              text='Download'
              borderRadius='10px'
             
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap   justify-center gap-1 items-center '>
          {earningData.map(item => (
            <div
              key={item.title}
              className='bg-white h-44 shadow-md m-2 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-44 p-6 pt-9 rounded-2xl '
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white  dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700 w-full'>
          <div className='flex justify-around'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className=' flex items-center gap-2 text-gray-600 dark:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className=' flex items-center gap-2 text-gray-600 dark:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-around dark:bg-secondary-dark-bg '>
            <div className='border-r-1 border-color m-4 pr-10 '>
              <div>
                <p>
                  <span className='font-semibold text-lx'>$95,425</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>
                    23%
                  </span>
                </p>
                <p>Budget</p>
              </div>
              <div className=' mt-8'>
                <p className='text-3xl font-semibold '>$48,478</p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className='mt-5'>
                <SparkLine
                  currentColor='red'
                  id='line-sparkLine'
                  type='Line'
                  height='90px'
                  width='400px'
                  data={SparklineAreaData}
                  color={'red'}
                />
              </div>
            </div>
            <div>
              <Stacked width='400px' height='350px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce
