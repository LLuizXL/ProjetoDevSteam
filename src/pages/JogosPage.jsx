import { useContext, useEffect, useState } from "react";
import { CarrinhoContext } from "../utils/CarrinhoContext";
import { useLocation } from "react-router";

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
                className="img-fluid rounded"
              />
            </div>
            <div className="d-flex justify-content-between">
              {jogo.imagens.map((imagem, index) => (
                <img
                  key={index}
                  src={imagem}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setImagemPrincipal(imagem)}
                  className={`img-thumbnail ${
                    imagem === imagemPrincipal ? "border-primary" : ""
                  }`}
                  style={{ width: "60px", height: "60px", cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
                 {/* Coluna Direita */}
                 <div className="col-lg-4 order-1 order-md-2 mb-4 mb-md-0">
              <div className="card">
                <img
                  src={jogo.imagem}
                  alt="Capa do Jogo"
                  className="card-img-top"
                />
                <div className="card-body">
                  <p className="card-text">{jogo.descricao}</p>
                  <p className="text-muted">
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
        <div className="row mt-4">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded">
              <div>
                <span className="badge bg-success fs-6">-{jogo.desconto}%</span>
                <p className="text-muted text-decoration-line-through mb-0">
                  {formatarMoeda(jogo.preco)}
                </p>
                <p className="fs-4 fw-bold mb-0">
                  {formatarMoeda(precoComDesconto)}
                </p>
              </div>
              <button
                className="btn btn-success btn-lg"
                onClick={() =>
                  handleAddCarrinho({
                    id: jogo.id,
                    titulo: jogo.titulo,
                    preco: precoComDesconto,
                  })
                }
              >
                <i className="bi bi-cart-plus me-2"></i>
                ADICIONAR AO CARRINHO
              </button>
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
