import { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../utils/CarrinhoContext";
import { useLocation} from "react-router";

import "../App.css";
import Header from "../components/Header";
import CarrinhoOffCanvas from "../components/CarrinhoOffCanvas";
import { GlobalContext } from "../main.jsx"


function JogosPage() {
  const location = useLocation();
  const jogo = location.state;
  const precoComDesconto = jogo.preco - (jogo.preco * jogo.desconto) / 100;
  
  const {
    carrinhoItem,
    handleAddCarrinho,
    handleRemoveCarrinho,
    handleUpdateCarrinho,
  } = useContext(CarrinhoContext);
  const { formatarMoeda } = useContext(GlobalContext);

  const [imagemPrincipal, setImagemPrincipal] = useState(jogo.imagens[0]);

  // Troca automática da imagem principal a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = jogo.imagens.indexOf(imagemPrincipal);
      const nextIndex = (currentIndex + 1) % jogo.imagens.length;
      setImagemPrincipal(jogo.imagens[nextIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, [imagemPrincipal, jogo.imagens]);

  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <div id="PaginaLoja" className="paginaLoja container mt-4">
        {/* Cabeçalho */}
        <div className="row mb-4">
          <div className="col">
            <h1 className="text-start">{jogo.titulo}</h1>
          </div>
        </div>

        {/* Área Principal */}
        <div className="row">
     
          {/* Coluna Esquerda */}
          <div className="col-lg-8 order-2 order-md-1">
            <div className="mb-3">
              <img
                src={imagemPrincipal}
                alt="Imagem Principal"
                className="img-fluid rounded imagemPrincipal"
              />
            </div>
            <div className="miniaturas-container">
              {jogo.imagens.map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setImagemPrincipal(imagem)}
                  className={`img  miniatura${
                    imagem === imagemPrincipal ? "border-primary miniatura" : ""
                  }`}
                />
              ))}
            </div>
          </div>
                 {/* Coluna Direita */}
                 <div className="col-lg-4 order-1 order-md-2 mb-4 ">
              <div className="card paginaLoja text-light">
                <img
                  src={jogo.imagem}
                  alt="Capa do Jogo"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">{jogo.descricao}</p>
                  <p className="text-muted text-light">
                    <small>Data lançamento: {jogo.Anolancamento}</small>
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    {jogo.categorias &&
                      jogo.categorias.map((categoria, index) => (
                        <span key={index} className="badge bg-primary text-light">
                          {categoria}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          </div>
        {/* Rodapé de Compra/Promoção */}
        <div className="row mt-4 w-50 mx-auto">
  <div className="col">
    <div className="d-flex justify-content-between align-items-center p-3 rounded bg-secondary">
      <div>
        <h5 className="text-white fw-bold mb-0">Comprar {jogo.titulo}</h5>
       {jogo.desconto > 0?(
        <>
         <p className="text-info mb-0">Promoção especial! Termina em breve</p>
         </>
       ) : <p></p>}
      </div>

      <div
        className="d-flex align-items-center gap-2 p-2 rounded compraPage"
      >
        {jogo.desconto > 0 ? (
          <>
       
            <span
              className="desconto h-100 fw-bold h5 m-0"
             
            >
              -{jogo.desconto}%
            </span>
            <div>
            <span className="row m-0 p-0 text-end text-secondary text-decoration-line-through small">
              {formatarMoeda(jogo.preco)}
            </span>
            <span className="row corValor m-0 p-0 fs-4 text-end fw-bolder">
              {formatarMoeda(precoComDesconto)}
            </span>
            </div>
          </>
        ) : (
          <span className="text-white fw-bold fs-5">
            {formatarMoeda(jogo.preco)}
          </span>
        )}
        <button
          className="btn btn-success desconto text-light w-100 border-0"
          onClick={() =>
            handleAddCarrinho({
              id: jogo.id, 
              titulo: jogo.titulo, 
              desconto: jogo.desconto,
              preco: jogo.preco, 
              imagem: jogo.imagem, 
              quantidade: 1, 
            })
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
    </>
  );
}

export default JogosPage;
