import React,{useState} from "react";
import "./Title.css";
import KalamozaFilter from "./KalamozaFilter";

const Title = (props) => {

  const [filteredYear,setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) =>{
    setFilteredYear(selectedYear);
    props.filterChange(selectedYear)
  };
    

  return (
    
    <div className="Title">
      <KalamozaFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></KalamozaFilter>
      <div className="TarihB"></div>
      <div className="AçıklamaB">Açıklama</div>
      <div className="BorçB">Tutar</div>
      <div className="BorçbakiyeB">Borç Bakiye</div>
      <div className="AlacakbakiyeB">Alacak Bakiye</div>
    </div>
  );
};
export default Title;
