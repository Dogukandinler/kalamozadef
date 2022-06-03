import "./KalamozaItem.css";
import React, { useEffect, useState } from "react";
import KalamozaDate from "./KalamozaDate";
import Card from "../UI/Card";

const KalamozaItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onClickHeader = () => {
      if (props.selection === "Alacak") setIsOpen((i) => !isOpen);
      else setIsOpen(isOpen);
    };
    onClickHeader();
  }, []);

  return (
    <Card>
      <div className={`kalamozaItems ${isOpen ? "kalamozaItemsb" : ""}`}>
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
