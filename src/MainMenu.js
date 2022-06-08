import "./App.css";
import Records from "./components/Kalamoza/Records";
import NewRecords from "./components/NewRecords/NewRecords";
import React, { useState } from "react";
import { DUMMY_CHECKS} from "./data/dummyData";
import "./MainMenu.css"


const MainMenu = () => {
  let mahmut = "ses deneme 1 2";
  const [checks, setChecks] = useState(DUMMY_CHECKS);

  const addRecordHandler = (record) => {
    const newData = [record, ...checks];
    setChecks(newData);
  };
  return (
    <div className="div-1">
      <div className="Net-box"> NET:{mahmut} </div>
      <NewRecords onAddRecord={addRecordHandler}></NewRecords>
      <Records items={checks} setChecks={setChecks} />
    </div>
  );
};

export default MainMenu;
