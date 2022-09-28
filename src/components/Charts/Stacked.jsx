import React, { useState } from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts'
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis
} from '../../data/dummy'
import { useContext } from 'react'
import StateContext from '../../context/ContextProvider'

const Stacked = props => {
  const { width, height } = props
  const ctx= useContext(StateContext)

  return (
    <ChartComponent
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{border : {width :0}}}
      tooltip={{enable: true}}
      background={ctx.themeMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings ={{background : `${ctx.themeMode === 'Dark' ? '#334444' : '#fff'}`} }
      
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
