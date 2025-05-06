import React, { useEffect, useState } from 'react'

const AddGame = () => {

    const [posterImg, setPosterImg] = useState("");

  const [games, setGames] = useState([
    {
      id: 1,
      titulo: "Counter-Strike 2",
      preco: 0.0,
      desconto: 0,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
      descricao:
        "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
      categoria: "FPS",
    },
    {
      id: 2,
      titulo: "Cyberpunk 2077",
      preco: 129.99,
      desconto: 20,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      descricao:
        "Explore Night City como um mercenário em um futuro distópico, com narrativa profunda e visuais impressionantes.",
      categoria: "RPG de Ação",
    },
    {
      id: 3,
      titulo: "Elden Ring",
      preco: 249.9,
      desconto: 35,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      descricao:
        "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
      categoria: "RPG",
    },
    {
      id: 4,
      titulo: "Red Dead Redemption 2",
      preco: 199.9,
      desconto: 40,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
      descricao:
        "Viva o Velho Oeste como Arthur Morgan em uma jornada cinematográfica com detalhes incríveis e mundo vivo.",
      categoria: "Ação e Aventura",
    },
    {
      id: 5,
      titulo: "Hogwarts Legacy",
      preco: 229.99,
      desconto: 10,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
      descricao:
        "Mergulhe no mundo bruxo de Hogwarts no século XIX. Crie seu próprio bruxo e descubra segredos mágicos.",
      categoria: "RPG de Ação",
    },
    {
      id: 6,
      titulo: "The Witcher 3: Wild Hunt",
      preco: 89.99,
      desconto: 60,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
      descricao:
        "Acompanhe Geralt de Rívia em sua busca épica por Ciri. Combate envolvente, escolhas impactantes e um dos melhores RPGs já feitos.",
      categoria: "RPG",
    },
    {
      id: 7,
      titulo: "God of War",
      preco: 159.99,
      desconto: 25,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
      descricao:
        "Kratos retorna em uma jornada emocional com seu filho Atreus. Uma releitura nórdica da lenda do Deus da Guerra.",
      categoria: "Ação e Aventura",
    },
    {
      id: 8,
      titulo: "FIFA 24",
      preco: 299.9,
      desconto: 15,
      imagem:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
      descricao:
        "O mais recente simulador de futebol da EA Sports, com gráficos realistas e modo carreira renovado.",
      categoria: "Esportes",
    },
  ]);

  const [novoGame, setNovoGame] = useState({});

  const addGame = () => {
    const updateGames = {
      ...novoGame,
      imagem: posterImg || "https://placehold.co/800x300",
      id: games.length + 1,
    };

    setGames((prevGames) => [...prevGames, updateGames]);

    setNovoGame({});
    setPosterImg("");

    alert("Jogo adicionado.");
  };




  useEffect(() => {
    console.log("Estado atualizado de games:", games);
  }, [games]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoGame((prevGame) => ({
      ...prevGame,
      [name]: value,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setPosterImg(reader.result); // Atualiza a imagem de perfil com a URL base64
      };
      reader.readAsDataURL(file);
    }
}

const handleDragOver = (e) => {
    e.preventDefault(); // Permite o drop
  };


  return (
    <div>
        <div className="container container-md my-5">
        <span className="fs-2 mb-2"> Cadastro de Jogos </span>
        <div
          id="cadJogo"
          className="d-flex flex-column gap-3 text-light p-3 px-md-4 rounded-3 w-75"
        >
          <div className="container text-center">
            <div className="mb-3">
              <img
                src={posterImg || "https://placehold.co/800x300"}
                className="img-fluid object-fit-fill"
                style={{}}
                alt=""
              />
            </div>
            <div
              id="dragImg"
              className="text-center p-3 p-md-5 display-6  w-100 align-self-center"
              style={{
                border: "2px dashed #fff",
                cursor: "pointer",
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <i className="bi bi-upload me-3 me-md-3"></i>
              <span className='fs-2'>
              Insira o poster do jogo <b>aqui</b>.
              </span>
            </div>
          </div>

          <form className="form">
            <div className="d-flex flex-column gap-1 mb-3">
              <label className="small ">Título</label>
              <input
                type="text"
                className="w-50"
                onChange={handleInputChange}
                name="titulo"
                value={novoGame.titulo}
              />
            </div>

            <div className="d-flex flex-column gap-1 mb-3">
              <label className="small">Categoria</label>
              <input
                type="text"
                className="w-25"
                onChange={handleInputChange}
                name="categoria"
                value={novoGame.categoria}
              />
            </div>

            <div className="d-flex flex-column gap-1 mb-3">
              <label className="small">Preço</label>
              <input
                type="text"
                className="w-25"
                onChange={handleInputChange}
                name="preco"
                value={novoGame.preco}
              />
            </div>

            <div className="d-flex flex-column gap-1 mb-3">
              <label className="small">Descrição</label>
              <input
                type="text"
                className=" text-start "
                onChange={handleInputChange}
                name="descricao"
                value={novoGame.descricao}
                style={{
                  height: "100px",
                }}
              />
            </div>
          </form>
          <button className="btn border-light text-light" onClick={addGame}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddGame;