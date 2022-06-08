import React from "react";
import KalamozaItem from "./KalamozaItem";
import "./KalamozaList.css";

const KalamozaList = (props) => {
  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  if (props.items.length === 0) {
    return <p className="p">No Records found</p>;
  }



  const deleteItem = (id) => {
    const tmp = props.allItems.filter((x) => x.id !== id);
    props.setChecks(tmp);
  };

  const getSum = (index, selection) => {
    let arr = props.items;
    if (selection === "Alacak") {
      arr = arr.filter((x) => x.selection === selection);
    } else if (selection === "Borç") {
      arr = arr.filter((x) => x.selection === selection);
    }
    return arr
      .sort(sortByDate)
      .slice(0, index)
      .reduce((partialSum, a) => partialSum + a.debtclaim, 0);
  };

  return (
    <ul className="checks-list">
      {props.items
        .filter((x) => x.selection !== "Alacak")
        .sort(sortByDate)
        .map((checks, index) => (
          <KalamozaItem
            deleteItem={() => deleteItem(checks.id)}
            key={checks.id}
            date={checks.date}
            sum={getSum(index + 1, "Borç")}
            explanation={checks.explanation}
            debtclaim={checks.debtclaim}
            selection={checks.selection}
          />
        ))}
      {props.items
        .filter((x) => x.selection === "Alacak")
        .sort(sortByDate)
        .map((checks, index) => (
          <KalamozaItem
            deleteItem={() => deleteItem(checks.id)}
            key={checks.id}
            date={checks.date}
            sum={getSum(index + 1, "Alacak")}
            explanation={checks.explanation}
            debtclaim={checks.debtclaim}
            selection={checks.selection}
          />
        ))}
    </ul>
  );
};

export default KalamozaList;
