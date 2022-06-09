import "./App.css";
import Records from "./components/Kalamoza/Records";
import NewRecords from "./components/NewRecords/NewRecords";
import React, { useState } from "react";
import { DUMMY_CHECKS } from "./data/dummyData";
import "./MainMenu.css";

const MainMenu = () => {
  const [checks, setChecks] = useState(DUMMY_CHECKS);
  const [selectedFilter, setSelectedFilter] = useState("2022");

  const addRecordHandler = (record) => {
    const newData = [record, ...checks];
    setChecks(newData);
  };

  const getSum = (selection) => {
    let arr = checks;
    arr = arr.filter((x) => x.selection === selection);
    return arr
      .slice(0, arr.length)
      .filter((check) => {
        return check.date.getFullYear().toString() === selectedFilter;
      })
      .reduce((partialSum, a) => partialSum + a.debtclaim, 0);
  };

  return (
    <div className="div-1">
      <div className="Net-box"> NET:{getSum("Alacak") - getSum("Borç")} </div>
      <NewRecords onAddRecord={addRecordHandler}></NewRecords>
      <Records
        setSelectedFilter={setSelectedFilter}
        items={checks}
        setChecks={setChecks}
      />
    </div>
  );
};

export default MainMenu;