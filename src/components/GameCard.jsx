
import '../App.css'
import GameModal from "./GameModal";

const GameCard = ({preco, desconto, imagem, titulo, onClick, formatarMoeda, onAddCarrinho}) => {
 
  const precoComDesconto = preco - (preco * desconto) / 100;
  return (
    
<div className="col">
  <div className='jogoCard'>
<hr className='text-light w-100'/>
    <div className="d-flex justify-content-between align-items-center p-3 rounded ">
      <div className='d-flex align-items-start gap-2' onClick={onClick} role='button'>
      <img className='img-fluid imgJogoCard' src={imagem} alt={titulo} />
      <div>
        <h5 className="text-white fw-bold fs-6 mb-0">{titulo}</h5>
      </div>
      </div>

      <div
        className="d-flex align-items-center gap-2 p-2 rounded col-6 w-50 "
      >
        {desconto > 0 ? (
          <>
       
            <span
              className="desconto h-100 fw-bold fs-5 h5 m-0"
             
            >
              -{desconto}%
            </span>
            <div>
            <span className="row m-0 p-0 text-end text-secondary text-decoration-line-through small">
              {preco }
            </span>
            <span className="row corValor m-0 p-0 fs-4 text-end fw-bolder">
              {formatarMoeda(precoComDesconto)}
            </span>
            </div>
          </>
        ) : (
          <span className="text-white fw-bold fs-4">
            {preco == 0? ("Grátis") : preco}
          </span>
        )}
        <button
          className="btn btn-success desconto text-light w-25 border-0 fs-6"
          onClick={onAddCarrinho}
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