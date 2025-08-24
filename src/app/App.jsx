import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  const [animating, setAnimating] = useState(false);

  const jogarMoeda = () => {
    setAnimating(true);

    // espera o tempo da animação e depois sorteia
    setTimeout(() => {
      const lados = ["Cara", "Coroa"];
      const sorteio = lados[Math.floor(Math.random() * lados.length)];
      setResult(sorteio);
      setAnimating(false);
    }, 2000); // 2 segundos de "giro"
  };

  return (
    <>
      <div className="TitleComponent">
        <h1 className="title">Flip the coin</h1>
        <h3 className="desc">Press the coin or the button to flip the coin</h3>
      </div>

      <div className="coin">
        <div className={`HorT ${animating ? "flip" : ""}`}>
          <img
            src={result === "Coroa" ? "/tails.svg" : "/heads.svg"}
            alt="moeda"
            onClick={jogarMoeda}
          />
        </div>

        <div className="shadow">
          <img src="/shadow.svg" alt="sombra" />
        </div>

        <h2 className="result">{result && `${result}`}</h2>

        <div>
          <button onClick={jogarMoeda} disabled={animating} className="botao">
            Jogar
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
