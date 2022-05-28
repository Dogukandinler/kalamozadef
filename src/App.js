import Title from './components/Title';
import "./App.css"
import Records from './components/Records';
import NewRecords from './components/NewRecords/NewRecords';

function App() {

    const checks = [
        { id: "1",company:"", date: new Date(2022, 1, 6),  explanation:"...." ,debtclaim:"",debtBlance:"",claimBlance:"",SelectionCD:"Borç"},
        { id: "2",company:"", date: new Date(2022, 1, 12), explanation:"Yemek" ,debtclaim:300,debtBlance:"",claimBlance:"",SelectionCD:"Borç"},
        { id: "3",company:"", date: new Date(2022, 2, 13), explanation:"Alışveriş" ,debtclaim:100,debtBlance:"",claimBlance:"",SelectionCD:"Borç"},
        { id: "4",company:"", date: new Date(2022, 2, 24), explanation:"Ödeme" ,debtclaim:300,debtBlance:"",claimBlance:"",SelectionCD:"Borç"},
        { id: "5",company:"", date: new Date(2022, 3, 11), explanation:"Satış" ,debtclaim:500, debtBlance:"",claimBlance:"",SelectionCD:"Alacak"},
        { id: "6",company:"", date: new Date(2022, 3, 28), explanation:"Satış" ,debtclaim:600, debtBlance:"",claimBlance:"",SelectionCD:"Alacak"},
 
];  

    const addRecordHandler = (record) =>{
        console.log(record)
    }
    return(

        <div className="div-1">
            <NewRecords onAddRecord={addRecordHandler}></NewRecords> 
            <Title></Title>
            <Records items ={checks}/>
        </div>
    )
}

export default App;
