import React  from "react";
import KalamozaItem from "./KalamozaItem";
   

const Records = (props) => {


  return (
    <div>
      
      <KalamozaItem
        date={props.items[0].date}
        explanation={props.items[0].explanation}
        debtclaim={props.items[0].debtclaim}
        debtBlance={props.items[0].debtBlance}
        claimBlance={props.items[0].claimBlance}
      />
      <KalamozaItem
        date={props.items[1].date}
        explanation={props.items[1].explanation}
        debtclaim={props.items[1].debtclaim}
        debtBlance={props.items[1].debtBlance}
        claimBlance={props.items[1].claimBlance}
      />
      <KalamozaItem
        date={props.items[2].date}
        explanation={props.items[2].explanation}
        debtclaim={props.items[2].debtclaim}
        debtBlance={props.items[2].debtBlance}
        claimBlance={props.items[2].claimBlance}
      />
      <KalamozaItem
        date={props.items[3].date}
        explanation={props.items[3].explanation}
        debtclaim={props.items[3].debtclaim}
        debtBlance={props.items[3].debtBlance}
        claimBlance={props.items[3].claimBlance}
      />
      <KalamozaItem
        date={props.items[4].date}
        explanation={props.items[4].explanation}
        debtclaim={props.items[4].debtclaim}
        debtBlance={props.items[4].debtBlance}
        claimBlance={props.items[4].claimBlance}
      />
      <KalamozaItem
        date={props.items[5].date}
        explanation={props.items[5].explanation}
        debtclaim={props.items[5].debtclaim}
        debtBlance={props.items[5].debtBlance}
        claimBlance={props.items[5].claimBlance}
      />
    </div>
  );
};
export default Records;
