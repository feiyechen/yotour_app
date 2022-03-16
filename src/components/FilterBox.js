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
              
                <div>
                  <Link to = {`/resorts/type/${item.Type}`}>
                    <input type="checkbox" id={item.Type} name="type" value={item.Type} checked={item.Selected} onChange={() => change(item.Type)}/>
                    <label htmlFor={item.Type}> {item.Type} {`Checked: ${item.Selected}`} </label>
                  </Link>
                </div>
              
              )
            )
          }

          </div>

        </div>
    </div>
  )

}

export default FilterBox