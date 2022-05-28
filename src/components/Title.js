import React,{useState} from "react";
import "./Title.css";
import KalamozaFilter from "./KalamozaFilter";

const Title = () => {

  const [filteredYear,setFilteredYear] = useState("2022");
  const filterChangeHandlery = (selectedYear) =>{
    setFilteredYear(selectedYear);  
    
  };
  return (
    <div className="Title">
      <KalamozaFilter selected={filteredYear} onChangeFilter={filterChangeHandlery}></KalamozaFilter>
      <div className="TarihB"></div>
      <div className="AçıklamaB">Açıklama</div>
      <div className="BorçB">Borç</div>
      <div className="AlacakB">Alacak</div>
      <div className="BorçbakiyeB">Borç Bakiye</div>
      <div className="AlacakbakiyeB">Alacak Bakiye</div>
    </div>
  );
};
export default Title;
