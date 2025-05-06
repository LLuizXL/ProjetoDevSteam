import React from "react";

const Cards = (props) => {
  return (
    <div className="container p-3 border border-light rounded-3">
      <h2>Cartão # {props.index}: </h2>
      <div className="form-label">Número do cartão: {props.cardNum}</div>
      <div className="form-label">Codigo de segurança: {props.cardCVV}</div>
      <div className="form-label">Data de vencimento: {props.cardDate}</div>
    </div>
  );
};

export default Cards;
