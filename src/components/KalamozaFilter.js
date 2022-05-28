import React from 'react'

const KalamozaFilter = (props) => {


    const dropDownChangeHandlery=(event) => {
        props.onChangeFilter(event.target.value);
    }
    const dropDownChangeHandlerm=(event) => {
        props.onChangeFilter(event.target.value);
    }


  return (
    <div>
         <div>
             <select value={props.selectedy} onChange={dropDownChangeHandlery}>
                 <option value="2022">2022 </option>
                 <option value="2021">2021 </option>
                 <option value="2020">2020 </option>
                 <option value="2019">2019 </option>
                 <option value="2018">2018 </option>
             </select>
         </div>
         <div>
             <select value={props.selectedm} onChange={dropDownChangeHandlerm}>
                 <option value="01">Ocak </option>
                 <option value="02">Şubat </option>
                 <option value="03">Mart </option>
                 <option value="04">Nisan </option>
                 <option value="05">Mayıs </option>
                 <option value="06">Haziran </option>
                 <option value="07">Temmuz </option>
                 <option value="08">Ağustos </option>
                 <option value="09">Eylül </option>
                 <option value="10">Ekim </option>
                 <option value="11">Kasım </option>
                 <option value="12">Aralık </option>

             </select>
         </div>
    </div>
  )
}


export default KalamozaFilter