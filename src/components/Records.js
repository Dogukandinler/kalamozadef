import React,{useState} from "react";
import KalamozaItem from "./KalamozaItem";
import Card from "./UI/Card";
import Title from "./Title";


const Records = (props) => {

  const [filteredYear, setFilterYear] = useState("2022");

  const filteredYearHandler =(FilteredYear) =>{
   setFilterYear(FilteredYear);
  
  };

  const filteredChecks = props.items.filter(checks =>{
    return checks.date.getFullYear().toString()===filteredYear;
  });

  const sortByDate = (a, b) => {
    return a.date - b.date;
  }



  return (
    
    
    <Card>
      <Title filterChange={filteredYearHandler}></Title>
      {
      filteredChecks.sort(sortByDate).map((checks) =>(
        <KalamozaItem
        key ={checks.id}
        date= {checks.date}
        explanation={checks.explanation}
        debtclaim={checks.debtclaim}
        debtBlance={checks.debtBlance}
        claimBlance={checks.claimBlance}
        selectionCD={checks.selectionCD}
        />
      ))}
    </Card>
     
  );
};

export default Records;