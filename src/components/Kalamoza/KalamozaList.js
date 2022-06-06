import React  from "react";
import KalamozaItem from "./KalamozaItem";
import "./KalamozaList.css";

const KalamozaList = (props) => {
  const sortByDate = (a, b) => {
    return a.date - b.date;
    
  };

  if (props.items.length === 0) {
    return <p className="p">No Records found</p>;
  }

  const toplamborceklehandler =(addedust,borcas) =>{
   let bData ={...addedust}; 
   console.log(bData)
  }

  // function islemYap() {
  //   let araDegerAlacak = 0;
  //   let araDegerBorc = 0;
  //   let alacakDizi = [];
  //   let borcDizi = [];


  //   for (let i = 0; i < props.items.length; i++) {
  //     if (props.items[i].selection === "Alacak") {
  //       araDegerAlacak = araDegerAlacak + props.items[i].debtclaim;
  //       alacakDizi.push(araDegerAlacak);
          
  //     } else {
  //       araDegerBorc = araDegerBorc + props.items[i].debtclaim;
  //       borcDizi.push(araDegerBorc);
        
  //     }
  //   }
  //   return [alacakDizi,borcDizi];
    
  // }

  // console.log(islemYap());

  return (
    <ul className="checks-list">
      {props.items.sort(sortByDate).map((checks) => (
        <KalamozaItem
          ustetası={toplamborceklehandler}
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
