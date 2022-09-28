import React, { useContext } from 'react'
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts'

import { lineCustomSeries , LinePrimaryXAxis , LinePrimaryYAxis } from '../../data/dummy'
import StateContext from '../../context/ContextProvider'

const LineChart = () => {

  const ctx = useContext(StateContext)

  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border : {width: 0}}}
    tooltip={{enable : true}}
    background={ctx.themeMode === 'Dark' ? '#33373E' : '#fff'}

    >
        <Inject services={[LineSeries , DateTime , Tooltip , Legend]} />
        <SeriesCollectionDirective>
          {lineCustomSeries.map((item , index)=>
            <SeriesDirective  key={index} {...item} />
          )}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
