import "./App.css"
import Records from './components/Records';
import NewRecords from './components/NewRecords/NewRecords';
import React,{useState} from "react";

const DUMMY_CHECKS=[
    { id: "1",company:"", date: new Date(2022, 1, 6),  explanation:"...." ,debtclaim:300,debtBlance:"",claimBlance:"",selectionCD:"Borç"},
        { id: "2",company:"", date: new Date(2021, 1, 12), explanation:"Yemek" ,debtclaim:300,debtBlance:"",claimBlance:"",selectionCD:"Borç"},
        { id: "3",company:"", date: new Date(2020, 2, 13), explanation:"Alışveriş" ,debtclaim:100,debtBlance:"",claimBlance:"",selectionCD:"Borç"},
        { id: "4",company:"", date: new Date(2019, 2, 24), explanation:"Ödeme" ,debtclaim:300,debtBlance:"",claimBlance:"",selectionCD:"Borç"},
        { id: "5",company:"", date: new Date(2022, 3, 11), explanation:"Satış" ,debtclaim:500, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "7",company:"", date: new Date(2019, 1, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "8",company:"", date: new Date(2020, 3, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "9",company:"", date: new Date(2022, 3, 20), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "10",company:"", date: new Date(2021, 3, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "11",company:"", date: new Date(2018, 6, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
        { id: "12",company:"", date: new Date(2018, 3, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",selectionCD:"Alacak"},
 
]

const App=() => {

    const [checks,setChecks] = useState(DUMMY_CHECKS);
            

    const addRecordHandler = (record) =>{
        const newData =[record,...checks]
        setChecks(newData)
    }
    return(

        <div className="div-1">
            <NewRecords onAddRecord={addRecordHandler}></NewRecords> 
            <Records items ={checks}/>
        </div>
    )
}

export default App;
