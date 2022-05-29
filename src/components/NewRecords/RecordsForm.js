import React, { useState } from "react";
import "./RecordsForm.css";

const RecordsForm = (props) => {
  const [enteredExplanation, setEnteredExplanation] = useState("");
  const [enteredAmounth, setEnteredAmounth] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredSelection,setEnteredSelection] = useState("Borç");

  const dropDownAddChangeHandler=(event) => {
    setEnteredSelection(event.target.value);
}

  const explanationChangeHandler = (event) => {
    setEnteredExplanation(event.target.value);
  };
  const amounthChangeHandler = (event) => {
    setEnteredAmounth(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();


    const recordData={
      Selection : enteredSelection,
      explanation: enteredExplanation,
      amounth : enteredAmounth,
      date : enteredDate
    }

    props.onSaveRecordData(recordData)

    setEnteredAmounth("");
    setEnteredDate("");
    setEnteredExplanation("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="Form--items">
        <div className="Form-Date">
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2015-01-01"
          ></input>
        </div>
        <div className="Form-Açıklama">
          <input
            placeholder="Açıklama Giriniz"
            value={enteredExplanation}
            onChange={explanationChangeHandler}
            type="text"
          ></input>
        </div>
        <div>
              <select className='Selectadd' value={props.selected} onChange={dropDownAddChangeHandler}>
                 <option value="Borç">Borç </option>
                 <option value="Alacak">Alacak </option>
              </select> 
        </div>
        <div className="Form-Tutar">
          <input
            placeholder="Tutarı Giriniz"
            value={enteredAmounth}
            type="number"
            min="1"
            max="99999"
            onChange={amounthChangeHandler}
          ></input>
        </div>
        <div>
          <button type="submit">Ekle</button>
        </div>
      </div>
    </form>
  );
};

export default RecordsForm;
