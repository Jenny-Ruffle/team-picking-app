import React from "react";
import "./index.css";


const Button = ({ className = 'button', text, disabled = false, onClick }) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;