import React,{useState} from "react";
import RecordsForm from "./RecordsForm";
import "./NewRecords.css"

const NewRecords = (props) => {
  
   
  const  [show,setShow] =useState(false)

  

  const saveRecordDataHandler = (enteredRecordData) =>{
    const recordData = {
      ...enteredRecordData,
      id: Math.random().toString()
    };
    props.onAddRecord(recordData)
    
  }
  return ( 
    <div className="KayıtEkleGöster">
    <button type="button"  onClick={()=>setShow(!show)}>{show ===true? "X":"Kayıt Ekle"}</button>
     <div className="NewRecords-items">
      {show &&<RecordsForm onSaveRecordData={saveRecordDataHandler} ></RecordsForm> }
    </div> 
    </div>
  );
};
export default NewRecords;
