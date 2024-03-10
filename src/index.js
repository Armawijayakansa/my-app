import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1
      style={{
        color: "red",
        fontSize: "50px",
        textTransform: "uppercase",
      }}
    >
      PECEL RESTO SIAP SAJI
    </h1>
  );
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu Kita</h2>

      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh warteg mang udin sebagai pemenuhan makanan
            kesehatan yang diperlukan dalam kehidupan sehari-hari.
          </p>
          <ul className="foods">
            {data.map((food) => (
              <Food foodObj={food} key={food.nama} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong, gan, besok datang Lagi.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 20;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return <FooterOpenHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  } else {
    return <FooterClosedHour jamBuka={jamBuka} jamTutup={jamTutup} />;
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <p>
          {new Date().getFullYear()} Warung Mang Udin | jam buka {jamBuka} - jam tutup {jamTutup}
        </p>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}
function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <p>
        Maaf gan masih tutup. Coba dateng lagi sekitar jam {jamBuka}-{jamTutup}.
      </p>
    </footer>
  );
}
function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img src={foto} alt={nama} width="100" height="70" />
      <ul>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : "Habis"}</span>
      </ul>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
