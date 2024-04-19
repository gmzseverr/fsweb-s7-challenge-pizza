import { useHistory } from "react-router-dom";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/home.css";
import React from "react";

function Home() {
  const history = useHistory();

  const handleOrderPizza = () => {
    history.push("/order-page");
  };
  return (
    <div>
      <div className="home-container">
        <img className="logo-img" src="../Assets/mile1-assets/logo.svg" />
        <img
          className="banner-pizza"
          src="../Assets/mile1-assets/home-banner.png"
        />
        <h1 className="pizza-text">
          KOD ACIKTIRIR <br />
          PİZZA DOYURUR
        </h1>

        <button className="aciktim-button" onClick={handleOrderPizza}>
          ACIKTIM
        </button>
      </div>
    </div>
  );
}

export default Home;
