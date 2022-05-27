import Title from './components/Title';
import "./App.css"
import Records from './components/Records';
import NewRecords from './components/NewRecords/NewRecords';

function App() {

    const checks = [
        { id: "1",company:"", date: new Date(2022, 1, 6),  explanation:"Orospu cocuklarına hayır parası" ,debt:100, claim:0,debtBlance:100,claimBlance:0},
        { id: "2",company:"", date: new Date(2022, 1, 12), explanation:"Yemek" ,debt:300, claim:0,debtBlance:400,claimBlance:0},
        { id: "3",company:"", date: new Date(2022, 2, 13), explanation:"Alışveriş" ,debt:100, claim:0,debtBlance:500,claimBlance:0},
        { id: "4",company:"", date: new Date(2022, 2, 24), explanation:"Ödeme" ,debt:300, claim:0,debtBlance:800,claimBlance:0},
        { id: "5",company:"", date: new Date(2022, 3, 11), explanation:"Satış" ,debt:0, claim:100,debtBlance:800,claimBlance:100},
        { id: "6",company:"", date: new Date(2022, 3, 28), explanation:"Satış" ,debt:0, claim:500,debtBlance:800,claimBlance:600},
 
];  

    return(

        <div className="div-1">
            <NewRecords></NewRecords>
            <Title></Title>
            <Records items ={checks}/>
        </div>
    )
}

export default App;
