import { useEffect, useState } from "react";


const GameModal = ({ jogo }) => {
  // Verifique se o jogo e as imagens estão definidos
  if (!jogo || !jogo.imagens || jogo.imagens.length === 0) {
    return (
      <div
        className="modal-content p-3"
        style={{
          width: "300px",
          height: "340px",
          backgroundColor: "#222",
          color: "#fff",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h1 className="fs-4 mb-2">Jogo não encontrado</h1>
      </div>
    );
  }

  const [imagemPrincipal, setImagemPrincipal] = useState(jogo.imagens[0]);

  // Troca automática da imagem principal a cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = jogo.imagens.indexOf(imagemPrincipal);
      const nextIndex = (currentIndex + 1) % jogo.imagens.length;
      setImagemPrincipal(jogo.imagens[nextIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, [imagemPrincipal, jogo.imagens]);

  return (
    <div
      className="modal-content p-3"
      style={{
        width: "300px",
        height: "340px",
        backgroundColor: "#222",
        color: "#fff",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      {/* Título */}
      <h1 className="fs-4 mb-2">{jogo.titulo}</h1>

      {/* Ano de Lançamento */}
      <p className="text-muted mb-3">
        <small>Data de lançamento: {jogo.Anolancamento}</small>
      </p>

      {/* Imagem principal */}
      <div className="d-flex justify-content-center align-items-center mb-3">
        <img
          src={imagemPrincipal}
          alt="Imagem principal"
          className="img-fluid rounded"
          style={{ maxHeight: "150px", maxWidth: "100%" }}
        />
      </div>

      {/* Tags */}
      <div className="d-flex justify-content-center gap-2">
        {jogo.categorias.slice(0, 3).map((categoria, index) => (
          <span key={index} className="badge bg-primary">
            {categoria}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameModal;