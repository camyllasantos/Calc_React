import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = parseFloat(altura) / 100; // Convertendo cm para metros
      const imc = (parseFloat(peso) / (alturaMetros ** 2)).toFixed(2);

      let classificacao = "";
      if (imc < 18.5) {
        classificacao = "Abaixo do peso";
      } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
      } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Sobrepeso";
      } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade grau I";
      } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade grau II";
      } else {
        classificacao = "Obesidade grau III";
      }

      setResultado(`IMC: ${imc} - Classificação: ${classificacao}`);
    } else {
      setResultado("Por favor, preencha ambos os campos.");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div className="form">
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            placeholder="Digite sua altura em cm"
          />
        </div>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            placeholder="Digite seu peso em kg"
          />
        </div>
        <button onClick={calcularIMC}>Calcular IMC</button>
      </div>
      {resultado && <p className="resultado">{resultado}</p>}
    </div>
  );
}

export default App;
