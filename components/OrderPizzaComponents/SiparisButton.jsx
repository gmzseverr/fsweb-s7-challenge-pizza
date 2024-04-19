import React from "react";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/siparisButton.css";

function SiparisButton({ onClick, isDisabled }) {
  return (
    <button className="button-siparis" onClick={onClick} disabled={isDisabled}>
      SİPARİŞ VER
    </button>
  );
}

export default SiparisButton;
