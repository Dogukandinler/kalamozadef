import React,{useState} from "react";
import KalamozaItem from "./KalamozaItem";
import Card from "./UI/Card";
import Title from "./Title";


const Records = (props) => {

  const [filteredYear, setFilterYear] = useState("");

  const filteredYearHandler =(FilteredYear) =>{
   setFilterYear(FilteredYear);
  
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  return (
    <div>
    <Title filterChange={filteredYearHandler}></Title>
    <Card>
      {
      filteredExpenses.map((checks) =>(
        <KalamozaItem
        key ={checks.id}
        date={checks.date}
        explanation={checks.explanation}
        debtclaim={checks.debtclaim}
        debtBlance={checks.debtBlance}
        claimBlance={checks.claimBlance}
        selectionCD={checks.selectionCD}
        />
      ))}
    </Card>
    </div> 
  );
};

export default Records;