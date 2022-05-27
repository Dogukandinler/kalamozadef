import React,{useState} from "react";
import "./RecordsForm.css";

const RecordsForm = () => {

  const[enteredExplanation,setEnteredExplanation]=useState("");
  const[enteredAmounth,setEnteredAmounth]=useState("");
  const[enteredDate,setEnteredDate]=useState("");
  
  const explanationChangeHandler = (event) =>{
    setEnteredExplanation(event.target.value);
  };
  const amounthChangeHandler = (event) =>{
    setEnteredAmounth(event.target.value);
  };
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value); 
  };
  const submitHandler = (event) =>{
     event.preventDefault();
     console.log(enteredExplanation);
     console.log("enteredExplanation");
     console.log(enteredAmounth);
     console.log(enteredDate);

  }
   
  return (
    <form onSubmit={submitHandler}> 
      <div className="Form--items">
        <div className="Form-Date">
          <input type="date" onChange={dateChangeHandler} min="2015-01-01"></input>
        </div>
        <div className="Form-Açıklama">
          <input placeholder="Açıklama Giriniz" onChange={explanationChangeHandler} type="text"></input>
        </div>
        <div className="Form-Tutar">
          <input
            placeholder="Tutarı Giriniz"  
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
