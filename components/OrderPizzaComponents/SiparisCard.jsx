import React from "react";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/siparisCard.css";

function SiparisCard({ count, secilenMalzemelerLength }) {
  const pizzaFiyat = count * 85;
  const ekMalzemeFiyat = secilenMalzemelerLength * 5;
  const toplamFiyat = pizzaFiyat + ekMalzemeFiyat;

  return (
    <div className="siparis-card">
      <h3>Sipariş Toplamı</h3>
      <div className="secimler">
        <h4>Seçimler</h4>
        <p>{ekMalzemeFiyat} TL</p>
      </div>
      <div className="toplam">
        <h4>Toplam</h4>
        <p>{toplamFiyat} TL</p>
      </div>
    </div>
  );
}

export default SiparisCard;
