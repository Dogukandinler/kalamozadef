import "./KalamozaItem.css";
import React, { useEffect, useState } from "react";
import KalamozaDate from "./KalamozaDate";
import Card from "../UI/Card";

const KalamozaItem = (props) => {
  const [isClaim, setIsClaim] = useState(false);

  useEffect(() => {
    const onBackgroundColor = () => {
      if (props.selection === "Alacak") setIsClaim(!isClaim);
      else setIsClaim(isClaim);
    };
    onBackgroundColor();
  }, []);

  return (
    <Card>
      <div className={`kalamozaItems ${isClaim ? "kalamozaItemsb" : ""}`}>
        <div className="Tarih">
          <KalamozaDate date={props.date} />
        </div>
        <div className="Açıklama">{props.explanation}</div>
        <div className="Borç">{props.debtclaim}₺</div>
        <div className="Borçbakiye">{!isClaim ? props.sum + "₺" : ""}</div>
        <div className="Alacakbakiye">{isClaim ? props.sum + "₺" : ""}</div>
        <button onClick={props.deleteItem} className="btn11"> X </button>
      </div>
    </Card>
  );
};

export default KalamozaItem;
