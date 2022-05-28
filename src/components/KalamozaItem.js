import "./KalamozaItem.css";
import React from "react";
import KalamozaDate from "./KalamozaDate";
import Card from "./UI/Card";


const KalamozaItem = (props) => {
  return (
    <Card>
      <div className="kalamozaItems">
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
