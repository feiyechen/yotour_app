import React from 'react'
import { Link } from 'react-router-dom'

const FilterBox = ({ types, change }) => {

  return (
    <div className='filter-box'>
        <div className='filter-card'>

          <h3>Select Resorts Type</h3>

          <div className='filter-selection'>

          {
            types.map(item => (
              
                <>
                  <Link to = {`/resorts/type/${item.type}`}>
                    <input type="checkbox" id={item.type} name="type" value={item.type} checked={item.Selected} onClick={() => change(item.type)}/>
                    <label htmlFor={item.type} onClick={() => change(item.type)}> {item.type} </label>
                    {/* <label htmlFor={item.Type} onClick={() => change(item.Type)}> {item.Type} {`Checked: ${item.Selected}`}</label> */}
                  </Link>
                </>
              
              )
            )
          }

          </div>

        </div>
    </div>
  )

}

export default FilterBox