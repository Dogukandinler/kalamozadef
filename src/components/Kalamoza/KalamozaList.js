import React from "react";
import KalamozaItem from "./KalamozaItem";
import "./KalamozaList.css"

const KalamozaList = (props) => {

    const sortByDate = (a, b) => {
        return a.date - b.date;
      }

  if (props.items.length===0){
        return <p className="p">No Records found</p>;
      }  
    
    return <ul className="checks-list"> 
        {props.items.sort(sortByDate).map((checks)=>(
          <KalamozaItem 
          key ={checks.id}
          date= {checks.date}
          explanation={checks.explanation}
          debtclaim={checks.debtclaim}
          debtBlance={checks.debtBlance}
          claimBlance={checks.claimBlance}
          selection={checks.selection}
          />
        ))}
    </ul>
      }

export default KalamozaList;