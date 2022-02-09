import React from 'react'
import Filterbtn from './Filterbtn'
import '../../style/Filterbox.css'
function Filterbox({filterResalt}){
  return(
    <div>
    <div className='filter-box'>
      <div className='filter-left'>
      <button onClick={()=>filterResalt(2020)}>2020</button>
      <select  className='filter-select'>
  <option value="filter1" selected disabled hidden>Filter 1</option>
  {/* <option value="1" onClick={()=>filterResalt(2020)} >2020</option> */}
  {/* <button onClick={()=>filterResalt(2020)}>2020</button> */}
  {/* <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option> */}
</select>
<select className='filter-select' name="filter2" >
  <option value="" selected disabled hidden>Filter 2</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
<select className='filter-select' name="filter3" id="cars">
  <option value="" selected disabled hidden>Filter 3</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
      </div>
      <div className='filter-right'>
        <Filterbtn/>
      </div>
     
    </div>
  </div>
  )
}

export default Filterbox;