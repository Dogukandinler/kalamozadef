import React,{useState} from "react";
import RecordsForm from "./RecordsForm";
import "./NewRecords.css"

const NewRecords = (props) => {

  const [SelectOne,setSelectedOne] = useState("2022");
  const dropDownAddChangeHandler = (selectedOne) =>{
    setSelectedOne(selectedOne);  
  }
  

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
      <RecordsForm onSaveRecordData={saveRecordDataHandler} onChangeAdd={dropDownAddChangeHandler} ></RecordsForm>
    </div>
  );
};
export default NewRecords;
