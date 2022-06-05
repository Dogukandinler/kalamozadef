import "./KalamozaItem.css";
import React, { useEffect, useState } from "react";
import KalamozaDate from "./KalamozaDate";
import Card from "../UI/Card";

const KalamozaItem = (props) => {
  
  const [isClaim, setIsClaim] = useState(false);

  useEffect(() => {
    const onClickHeader = () => {
      if (props.selection === "Alacak") setIsClaim(!isClaim);
      else setIsClaim(isClaim);
    };
    onClickHeader();
  }, []);

  return (
    <Card>
      <div className={`kalamozaItems ${isClaim ? "kalamozaItemsb" : ""}`}>
        <div className="Tarih">
          <KalamozaDate date={props.date} />
        </div>
        <div className="Açıklama">{props.explanation}</div>
        <div className="Borç">{props.debtclaim}₺</div>
        <div className="Borçbakiye">{props.debtBlance}₺</div>
        <div className="Alacakbakiye">{props.claimBlance}₺</div>
      </div>
    </Card>
  );
};

export default KalamozaItem;
