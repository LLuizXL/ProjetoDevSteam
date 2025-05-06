import React, { useState, useMemo } from "react";
import OutrosJogos, { games, getCategoriasUnicas } from "./OutrosJogos.jsx";

const OutrosJogosContainer = (props) => {
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const allGames = games;

  // Obtendo categorias únicas
  const categorias = getCategoriasUnicas();

  // Filtrando os jogos com base nas categorias selecionadas
  const filteredGames = useMemo(() => {
    if (selectedCategorias.length === 0) {
      return allGames; // Retorna todos os jogos se nenhuma categoria estiver selecionada
    }
    return allGames.filter((game) =>
      selectedCategorias.every((categoria) => game.categorias.includes(categoria))
    );
  }, [selectedCategorias, allGames]);

  // Paginação
  const itemsPerPage = 5; // Limite de 5 jogos por página
  const totalPages = Math.ceil(filteredGames.length / itemsPerPage); // Calcula o número total de páginas
  const paginatedGames = filteredGames.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) ;

  // Manipulador de mudança de categoria
  const handleCategoryChange = (categoria) => {
    setCurrentPage(1); // Reseta para a primeira página ao mudar categorias
    setSelectedCategorias((prev) =>
      prev.includes(categoria)
        ? prev.filter((cat) => cat !== categoria)
        : [...prev, categoria]
    );
  };

  // Manipulador de mudança de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container-fluid outrosJogos col-12 col-lg-6">
      <div className="row">
        {/* Sidebar de Categorias */}
        <div className="col-3">
          <h5 className="text-light">Categorias</h5>
          <ul className="list-unstyled">
  {categorias.map((categoria) => (
    <li key={categoria}>
      <label className="text-light">
        <input
          type="checkbox"
          value={categoria}
          checked={selectedCategorias.includes(categoria)}
          onChange={() => handleCategoryChange(categoria)}
        />{" "}
        {categoria}
      </label>
    </li>
  ))}
</ul>
        </div>

        {/* Container de Jogos */}
        <div className="col-9">
          <OutrosJogos
            jogosFiltrados={paginatedGames}
            onAddCarrinho={props.onAddCarrinho}
          />

          {/* Paginação */}
          <div className="d-flex justify-content-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  className={`btn btn-sm ${
                    page === currentPage ? "btn-primary" : "btn-secondary"
                  } mx-1`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutrosJogosContainer;