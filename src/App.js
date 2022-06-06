import "./App.css";
import Records from "./components/Kalamoza/Records";
import NewRecords from "./components/NewRecords/NewRecords";
import React, { useState } from "react";
import { DUMMY_CHECKS } from "./data/dummyData";

const App = () => {
  const [checks, setChecks] = useState(DUMMY_CHECKS);

  const addRecordHandler = (record) => {
    const newData = [record, ...checks];
    setChecks(newData);
  };
  return (
    <div className="div-1">
      <NewRecords onAddRecord={addRecordHandler}></NewRecords>
      <Records items={checks} setChecks={setChecks} />
    </div>
  );
};

export default App;
