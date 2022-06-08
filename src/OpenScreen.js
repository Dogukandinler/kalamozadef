import React from "react";
import { Link } from "react-router-dom";
import "./OpenScreen.css"

const OpenScreen = () => {
  return (
    <div>
      <div className="OpenScreenText">Kalamoza Defteri</div>
      <div className="OpenScreenButton">
        <button>
          <Link className="link" to={`/KalamozaDef`}>Uygulamayı Aç</Link>
        </button>
      </div>
    </div>
  );
};

export default OpenScreen;
