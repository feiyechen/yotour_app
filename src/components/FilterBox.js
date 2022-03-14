import React from 'react'
import { Link } from 'react-router-dom'

const FilterBox = ({ type }) => {

  return (
    <div className='filter-box'>
        <div className='filter-card'>

          {/* Select version */}
          {/* <label for='types'>Choose a type:</label>
          <select name='types' id='types'>
            <option value="Resort">Resort</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Hostel">Hostel</option>
            <option value="Cottage">Cottage</option>
          </select> */}

          <h3>Select Resorts Type</h3>

          <div className='filter-selection'>
          {
            type.map(item => (
              item.Selected === false ? (
                <div>
                  <Link to = {`/resorts/type/${item.Type}`}>
                  <input type="checkbox" id={item.Type} name="type" value={item.Type} />
                  <label htmlFor={item.Type}> {item.Type}</label>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to = {`/resorts/type/${item.Type}`}>
                  <input type="checkbox" id={item.Type} name="type" value={item.Type} checked />
                  <label htmlFor={item.Type}> {item.Type}</label>
                  </Link>
                </div>
              )
            ))
          }
          </div>

        </div>
    </div>
  )
}

export default FilterBox