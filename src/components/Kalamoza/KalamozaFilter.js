import React from 'react'
import "./KalamozaFilter.css"

const KalamozaFilter = (props) => {


    const dropDownChangeHandler=(event) => {
        props.onChangeFilter(event.target.value);
    }
  return (
    <div>
         <div>
             <select className='Filterby' value={props.selected} onChange={dropDownChangeHandler} >
                 <option value="2022">2022 </option>
                 <option value="2021">2021 </option>
                 <option value="2020">2020 </option>
                 <option value="2019">2019 </option>
                 <option value="2018">2018 </option>
             </select>
         </div>
    </div>
  )
}


export default KalamozaFilter