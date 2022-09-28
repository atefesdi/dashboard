import React, { useContext } from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries,
  Legend,
  
} from '@syncfusion/ej2-react-charts'

import { areaCustomSeries , areaPrimaryXAxis , areaPrimaryYAxis } from '../../data/dummy'
import StateContext from '../../context/ContextProvider'
import { Header } from '../../components'
const Area = () => {
  const ctx = useContext(StateContext)

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category="Area" title="Inflaction Rate in Percentage" />

     <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border : {width: 0}}}
    tooltip={{enable : true}}
    background={ctx.themeMode === 'Dark' ? '#33373E' : '#fff'}

    >
        <Inject services={[SplineAreaSeries , DateTime  , Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item , index)=>
            <SeriesDirective  key={index} {...item} />
          )}
        </SeriesCollectionDirective>
    </ChartComponent>
   </div>
  )
}

export default Area