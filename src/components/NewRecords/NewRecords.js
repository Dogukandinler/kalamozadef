import React from "react";
import RecordsForm from "./RecordsForm";
import "./NewRecords.css"

const NewRecords = (props) => {

  

  const saveRecordDataHandler = (enteredRecordData) =>{
    const recordData = {
      ...enteredRecordData,
      id: Math.random().toString()
    };
    console.log(recordData)
    props.onAddRecord(recordData)
    
  }
  return (
    <div className="NewRecords-items">
      <RecordsForm onSaveRecordData={saveRecordDataHandler} ></RecordsForm>
    </div>
  );
};
export default NewRecords;
