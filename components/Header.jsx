import React from "react";

function Header() {
  return (
    <div
      className="header"
      style={{
        backgroundColor: "#c20608",
        height: "200px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "70px",
        padding: "0 20px",
      }}
    >
      <div>
        <img
          src="./Assets/mile1-assets/logo.svg"
          alt="Logo"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            padding: "50px",
          }}
        />
      </div>
      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            gap: "20px",
            fontFamily: "'Barlow', sans serif",
            color: "white",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <li>
            <a style={{ color: "white" }} href="/">
              Anasayfa
            </a>
          </li>
          <li>
            <a style={{ color: "white" }} href="/">
              Seçenekler
            </a>
          </li>
          <li>
            <a style={{ color: "white" }} href="/">
              Sipariş Oluştur
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
