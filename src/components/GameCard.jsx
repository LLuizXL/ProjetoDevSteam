import React from 'react'
import '../App.css'

const GameCard = (props) => {
  const precoComDesconto = props.preco - (props.preco * props.desconto) / 100;
  return (
    
<div className="col">
  <div className='jogoCard'>
<hr className='text-light w-100'/>
    <div className="d-flex justify-content-between align-items-center p-3 rounded ">
      <div className='d-flex align-items-start gap-2' onClick={props.onClick} role='button'>
      <img className='img-fluid imgJogoCard' src={props.imagem} alt={props.titulo} />
      <div>
        <h5 className="text-white fw-bold fs-6 mb-0">{props.titulo}</h5>
      </div>
      </div>

      <div
        className="d-flex align-items-center gap-2 p-2 rounded col-6 w-50 "
      >
        {props.desconto > 0 ? (
          <>
       
            <span
              className="desconto h-100 fw-bold fs-5 h5 m-0"
             
            >
              -{props.desconto}%
            </span>
            <div>
            <span className="row m-0 p-0 text-end text-secondary text-decoration-line-through small">
              {props.preco }
            </span>
            <span className="row corValor m-0 p-0 fs-4 text-end fw-bolder">
              {props.formatarMoeda(precoComDesconto)}
            </span>
            </div>
          </>
        ) : (
          <span className="text-white fw-bold fs-4">
            {props.preco == 0? ("Grátis") : props.preco}
          </span>
        )}
        <button
          className="btn btn-success desconto text-light w-25 border-0 fs-6"
          onClick={props.onAddCarrinho}
        >
         <i className="bi bi-cart-plus text-center "></i>
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default GameCard