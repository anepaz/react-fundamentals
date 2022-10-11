import React from "react";

function numAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function Aleatorio(props) {
  return (
    <>
      <h1>Número aleatório</h1>
      <p>
        <strong>O número mínimo é: </strong> {props.min}
      </p>
      <p>
        <strong>O número máximo é: </strong> {props.max}
      </p>
      <p>
        <strong>O número aleatório gerado é :</strong>{" "}
        {numAleatorio(props.min, props.max)}
      </p>
    </>
  );
}
