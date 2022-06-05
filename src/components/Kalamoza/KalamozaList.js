import React, { useState,useEffect} from "react";
import KalamozaItem from "./KalamozaItem";
import "./KalamozaList.css";

const KalamozaList = (props) => {
  
  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  if (props.items.length === 0) {
    return <p className="p">No Records found</p>;
  }

  function alacakYap() {
    let araDegerAlacak = 0;
    let alacakDizi = [];

    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].selection === "Alacak") {
        araDegerAlacak = araDegerAlacak + props.items[i].debtclaim;
        alacakDizi.push(araDegerAlacak);
          console.log(alacakDizi)
      }
    }
    return alacakDizi;
  }

  function BorcYap() {
    let araDegerBorc = 0;
    let borcDizi = [];

    for (let i = 0; i < props.items.length; i++) {
      if (props.items[i].selection === "Borç") {
        araDegerBorc = araDegerBorc + props.items[i].debtclaim;
        borcDizi.push(araDegerBorc);
          console.log(borcDizi)
      }
    }
    return borcDizi;
  }
  console.log(BorcYap())



  return (
    <ul className="checks-list">
      {props.items.sort(sortByDate).map((checks) => (
        <KalamozaItem
          key={checks.id}
          date={checks.date}
          explanation={checks.explanation}
          debtclaim={checks.debtclaim}
          debtBlance={checks.debtBlance}
          claimBlance={checks.claimBlance}
          selection={checks.selection}
        />
      ))}
    </ul>
  );
};

export default KalamozaList;
