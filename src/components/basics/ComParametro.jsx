import React from "react";

export default function ComParametro(props) {
  const status = props.learningLevel > 1 ? "Avançado" : "Iniciante";
  return (
    <div>
      <h2> {props.titulo} </h2>
      <p>
        {" "}
        {props.learning}
        <span>
          {" "}
          e meu nível é: <strong> {status} </strong>
        </span>
      </p>
    </div>
  );
}
