import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective , Page , Selection
,  Inject , Edit , Toolbar , Sort , Filter } from '@syncfusion/ej2-react-grids'

import { customersData , customersGrid } from '../data/dummy'

import { Header } from '../components'

const Customers = () => {
  return <div className='m-20 md:m-10 bg-white rounded-3xl'>
  <Header category="Pages" title="Customers" />
  <GridComponent
  dataSource={customersData}
  allowPaging
  allowSorting
  toolbar={['Delete'  ]}
  editSettings={{
    allowDeleting: true , 
    allowEditing: true,
  }}
  width=  "auto"
  >
    <ColumnsDirective>
      {customersGrid.map((item , index)=>(
        <ColumnDirective key={index} {...item} />
      ))}
    </ColumnsDirective>
    <Inject services={[Page  , Toolbar ,  Selection , Edit , Sort, Filter]} />
  </GridComponent>
</div>
}

export default Customers