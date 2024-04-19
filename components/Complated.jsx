import { useLocation } from "react-router-dom";

import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/complated.css";

function Complated({ pizzas, pizzaAdi }) {
  const location = useLocation();
  const { boyut, kalinlik, secilenMalzemeler, ekMalzemeFiyat, toplamFiyat } =
    location.state;

  return (
    <div className="final">
      <div className="success-page">
        <img
          className="success-image"
          src="./Assets/mile1-assets/logo.svg"
          alt="Logo"
        />
        <div className="content-container">
          <div className="text-container">
            <h4 className="italik-text">lezzetin yolda</h4>
            <h1 className="tebrikler-text">SİPARİŞİNİZ ALINDI</h1>
            <hr />
          </div>
          <div className="ozet-container">
            <h2 className="pizza-ad">{pizzaAdi}</h2>
          </div>
          <div className="bilgiler">
            <span className="bilgi">
              <p className="light">Boyut:</p>
              <p className="bold"> {boyut} </p>
            </span>
            <span className="bilgi">
              <p className="light">Hamur:</p>
              <p className="bold">{kalinlik} </p>
            </span>
            <span className="bilgi">
              <p className="light">Ek Malzemeler:</p>
              <p className="bold">{secilenMalzemeler} </p>
            </span>
          </div>
        </div>
        <div
          style={{ marginTop: "50px", marginBottom: "50px" }}
          className="siparis-tutar"
        >
          <div className="siparis-card">
            <h3 style={{ color: "#ffffff" }}>Sipariş Toplamı</h3>
            <div className="secimler">
              <h4 style={{ color: "#ffffff" }}>Seçimler</h4>
              <p style={{ color: "#ffffff" }}>{ekMalzemeFiyat} TL</p>
            </div>
            <div className="toplam">
              <h4 style={{ color: "#ffffff" }}>Toplam</h4>
              <p style={{ color: "#ffffff" }}>{toplamFiyat} TL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Complated;
