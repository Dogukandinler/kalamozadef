import React,{ useState } from "react";
import KalamozaFilter from "./KalamozaFilter";
import KalamozaItem from "./KalamozaItem";
   

const Records = (props) => {

  const [filteredYear,setFilteredYear] = useState("2022");
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <KalamozaFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></KalamozaFilter>
      <KalamozaItem
        date={props.items[0].date}
        explanation={props.items[0].explanation}
        debt={props.items[0].debt}
        claim={props.items[0].claim}
        debtBlance={props.items[0].debtBlance}
        claimBlance={props.items[0].claimBlance}
      />
      <KalamozaItem
        date={props.items[1].date}
        explanation={props.items[1].explanation}
        debt={props.items[1].debt}
        claim={props.items[1].claim}
        debtBlance={props.items[1].debtBlance}
        claimBlance={props.items[1].claimBlance}
      />
      <KalamozaItem
        date={props.items[2].date}
        explanation={props.items[2].explanation}
        debt={props.items[2].debt}
        claim={props.items[2].claim}
        debtBlance={props.items[2].debtBlance}
        claimBlance={props.items[2].claimBlance}
      />
      <KalamozaItem
        date={props.items[3].date}
        explanation={props.items[3].explanation}
        debt={props.items[3].debt}
        claim={props.items[3].claim}
        debtBlance={props.items[3].debtBlance}
        claimBlance={props.items[3].claimBlance}
      />
      <KalamozaItem
        date={props.items[4].date}
        explanation={props.items[4].explanation}
        debt={props.items[4].debt}
        claim={props.items[4].claim}
        debtBlance={props.items[4].debtBlance}
        claimBlance={props.items[4].claimBlance}
      />
      <KalamozaItem
        date={props.items[5].date}
        explanation={props.items[5].explanation}
        debt={props.items[5].debt}
        claim={props.items[5].claim}
        debtBlance={props.items[5].debtBlance}
        claimBlance={props.items[5].claimBlance}
      />
    </div>
  );
};
export default Records;
