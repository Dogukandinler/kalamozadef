import React from "react";
import { Link } from "react-router-dom";
import "./OpenScreen.css"
import "typeface-rajdhani"
import icon from "./1.png";

const OpenScreen = () => {
  return (
    <div>
      <img  src={icon} alt="" className="icon"></img>
      <div className="OpenScreenText">KALAMOZA DEFTERİ</div>
      <div className="OpenScreenButton">
        <button>
          <Link className="link" to={`/KalamozaDef`}>Uygulamayı Aç</Link>
        </button>
      </div>
    </div>
  );
};

export default OpenScreen;
