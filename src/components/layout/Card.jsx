import "./Card.css";
import React from "react";

export default (props) => {
  const cardStyle = {
    backgroundColor: props.color || "#ffc3af",
    borderColor: props.color || "#ffc3af",
  };
  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
