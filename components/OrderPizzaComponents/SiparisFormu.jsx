import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/styles/SiparisForm.css";
import Malzemeler from "./Malzemeler.jsx";
import Counter from "./Counter.jsx";
import BoyutSecim from "./BoyutSecim.jsx";
import PizzaCard from "./PizzaCard.jsx";
import SiparisCard from "./SiparisCard.jsx";
import Note from "./Note.jsx";
import SiparisButton from "./SiparisButton.jsx";
import NameForm from "./NameForm.jsx";
import Header from "/Users/gmzsever/Downloads/workintechTasks/fsweb-s7-challenge-pizza-main/src/components/Header.jsx";

function SiparisFormu() {
  const [boyut, setBoyut] = useState("");
  const [kalinlik, setKalinlik] = useState("");
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);

  const [isDisabled, setIsDisabled] = useState(true);

  const history = useHistory(); //butonu yeni sayafaya yönlendirmek için
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [count, setCount] = useState(1);

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

  const pizzaOrder = pizzas.map((pizza) => {
    const malzemelerListe = {};
    secilenMalzemeler.forEach((malzeme, index) => {
      malzemelerListe[`malzeme${index + 1}`] = malzeme;
    });
    return {
      user: name,
      pizzaAdi: pizza.pizzaAdi,
      fiyat: pizza.price,
      puan: pizza.rate,
      yorumlar: pizza.comments,
      boyut: boyut,
      kalinlik: kalinlik,
      malzemeler: malzemelerListe,
    };
  });

  ////// Counter

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  ///----------------

  // isim en az üç harf --- boşluk yok, hepsi büyük harf
  const handleNameChange = (event) => {
    const newName = event.target.value.toUpperCase().replace(/\s/g, "");
    setName(newName);
    if (newName.length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    console.log("Müşterimiz", newName);
  };

  //hamur boyutu için fonksiyon (seçildi/seçilmedi)
  const handleSizeChange = (event) => {
    setBoyut(event.target.value);
    checkValidity();
    console.log("Seçilen boyut:", event.target.value);
  };

  //kalınlık fonksiyonu----------
  const handleThicknessChange = (event) => {
    setKalinlik(event.target.value);
    checkValidity();
    console.log("Seçilen kalınlık:", event.target.value);
  };

  //----------Malzeme-----
  const secilenMalzemelerLength = secilenMalzemeler.length;
  //malzeme seçimi fonksiyonu
  const handleMalzemeSecimi = (event) => {
    const { value, checked } = event.target;
    //10'dan fazla isr uyarı
    if (checked) {
      if (secilenMalzemeler.length <= 10) {
        setSecilenMalzemeler((prevState) => [...prevState, value]);
      } else {
        event.preventDefault();
        alert("En fazla 10 malzeme seçebilirsiniz!");
      }
    } else {
      setSecilenMalzemeler((prevState) =>
        prevState.filter((malzeme) => malzeme !== value)
      );
    }
    checkValidity();
    console.log("Seçilen malzemeler:", secilenMalzemeler);
  };

  //4'ten az seçildiyse buton disabled
  const checkValidity = () => {
    if (boyut && kalinlik && secilenMalzemelerLength > 3) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  //butona basınca çalışacak fonksiyon => gerekenler tamamlandıysa sipariş başarılı / değilse uyarı
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length < 3) {
      console.error("Lütfen geçerli bir ad giriniz.");
      alert("Lütfen geçerli bir ad giriniz.");
      return;
    }

    if (!boyut || !kalinlik || secilenMalzemelerLength < 4) {
      console.error(
        "Lütfen gerekli alanları doldurunuz ve en az 4 malzeme seçiniz!"
      );

      return;
    }

    axios
      .post("https://reqres.in/api/pizza", pizzaOrder)
      .then((response) => {
        console.log("Sipariş Özetiniz:", response.data);
        history.push({
          pathname: "/success-page",
          state: {
            name,
            boyut,
            kalinlik,
            secilenMalzemeler,
            count,
            secilenMalzemelerLength,
          },
        });
      })
      .catch((error) => {
        console.error("Siparişiniz alınamadı! Tekrar Deneyiniz!");
        alert("Siparişiniz alınamadı! Tekrar Deneyiniz!", error);
      }, 1000);
  };

  return (
    <div className="siparis-formu">
      <div className="pizza-container">
        {pizzas.map((pizza, index) => (
          <PizzaCard key={index} pizza={pizza} />
        ))}
      </div>

      <BoyutSecim
        handleSizeChange={handleSizeChange}
        handleThicknessChange={handleThicknessChange}
      />

      <Malzemeler
        malzemeler={[
          "Peynir",
          "Sucuk",
          "Mantar",
          "Tavuk Izgara",
          "Soğan",
          "Domates",
          "Mısır",
          "Jalepeno",
          "Sarımsak",
          "Biber",
          "Ananas",
          "Kabak",
          "Ton Balığı",
          "Mozarella",
          "Zeytin",
        ]}
        handleMalzemeSecimi={handleMalzemeSecimi}
      />
      <Note />
      <div className="siparisiniz-container">
        <Counter
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <div className="siparis-sonuc">
          <NameForm
            name={name}
            isValid={isValid}
            handleNameChange={handleNameChange}
          />
          <SiparisCard
            count={count}
            secilenMalzemelerLength={secilenMalzemelerLength}
          />

          <SiparisButton onClick={handleSubmit} disabled={isDisabled} />
        </div>
      </div>
    </div>
  );
}

export default SiparisFormu;
