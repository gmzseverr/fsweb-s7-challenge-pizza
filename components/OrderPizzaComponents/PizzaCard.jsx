import React from "react";
import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/pizzaCard.css";
function PizzaCard() {
  const pizzas = [
    {
      pizzaAdi: "Sucuk Aşkı Pizza",
      price: 85,
      rate: "4.9",
      comments: "128",
      description:
        "İtalyan mutfağından esinlenerek hazırladığımız Şahane Sucuklu pizza, mis gibi kokan taze sucuklarla ve lezzetli peynirlerle dolu. İnce hamurumuzun altında kavrulmuş olan sucuklar, her dilimde size bir ısı dalgası sunuyor. Bu pizza, lezzetin ve doygunluğun en mükemmel kombinasyonunu sunuyor. Şimdi sipariş verin ve bir dilim mutluluğun tadını çıkarın!",
    },
  ];
  return (
    <div className="pizza-card">
      {pizzas.map((pizza, index) => (
        <span key={index} className="pizza-details">
          <h3 className="pizza-name">{pizza.pizzaAdi}</h3>
          <div className="info">
            <div className="price-rating">
              <h2 className="price-section">{pizza.price} ₺</h2>
              <div className="rating-comment">
                <p className="rate">{pizza.rate}</p>
                <p className="comment">{pizza.comments}</p>
              </div>
            </div>
          </div>
          <p className="description">{pizza.description}</p>
        </span>
      ))}
    </div>
  );
}

export default PizzaCard;
