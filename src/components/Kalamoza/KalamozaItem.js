import "./KalamozaItem.css";
import React, { useEffect, useState } from "react";
import KalamozaDate from "./KalamozaDate";
import Card from "../UI/Card";

const KalamozaItem = (props) => {
  
  const [claimBlanceAll,AlacakSet] = useState(0)
  const [debtBlanceAll,BorcSet] = useState(0)
  const [isClaim, setIsClaim] = useState(false);

  const alacakBorcekle  = () => {
    if (props.selection === "Alacak"){
        BorcSet(props.debtclaim) }

    else {
      AlacakSet(props.debtclaim)}

  }
  useEffect(() => {
    const onBackgroundColor = () => {
      if (props.selection === "Alacak") setIsClaim(!isClaim);
      else setIsClaim(isClaim);
    };
   onBackgroundColor();
   alacakBorcekle();

  }, []);
  const Ekleee =() =>{

    const bData={
      borc : claimBlanceAll,
      alacak: debtBlanceAll,
    }
  
    props.ustetası(bData)

  };

  return (
    <Card>
      <div className={`kalamozaItems ${isClaim ? "kalamozaItemsb" : ""}`}>
        <div className="Tarih">
          <KalamozaDate date={props.date} />
        </div>
        <div className="Açıklama">{props.explanation}</div>
        <div className="Borç">{props.debtclaim}₺</div>
        <div className="Borçbakiye">{claimBlanceAll}₺</div>
        <div className="Alacakbakiye">{debtBlanceAll}₺</div>
        <button onClick={Ekleee}>Ekle</button>
      </div>
    </Card>
  );
};

export default KalamozaItem;
