import React, { useContext } from "react";
import GameCard from "./GameCard";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main";

 // Lista de jogos
 const games = [
  {
    id: 1,
    Anolancamento: 2023,
    titulo: "Counter-Strike 2",
    preco: 0.0,
    desconto: 0,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    descricao:
      "O clássico FPS competitivo retorna com gráficos renovados e jogabilidade ainda mais precisa. Perfeito para amantes de tiro tático.",
    categorias: ["FPS", "Multiplayer", "Competitivo"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/730/ss_4.jpg",
    ],
  },
  {
    id: 2,
    Anolancamento: 2020,
    titulo: "Cyberpunk 2077",
    preco: 129.99,
    desconto: 20,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
    descricao:
      "Explore Night City como um mercenário em um futuro distópico, com narrativa profunda e visuais impressionantes.",
    categorias: ["RPG", "Ação", "Mundo Aberto"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/ss_4.jpg",
    ],
  },
  {
    id: 3,
    Anolancamento: 2022,
    titulo: "Elden Ring",
    preco: 249.9,
    desconto: 35,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
    descricao:
      "Uma aventura épica em mundo aberto criada por Hidetaka Miyazaki e George R. R. Martin. Desafios intensos e lore profundo.",
    categorias: ["RPG", "Ação", "Aventura"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/ss_4.jpg",
    ],
  },
  {
    Anolancamento: 2018,
    id: 4,
    titulo: "Red Dead Redemption 2",
    preco: 199.9,
    desconto: 40,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
    descricao:
      "Viva o Velho Oeste como Arthur Morgan em uma jornada cinematográfica com detalhes incríveis e mundo vivo.",
    categorias: ["Ação", "Aventura", "Mundo Aberto"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/ss_4.jpg",
    ],
  },
  {
    id: 5,
    Anolancamento: 2023,
    titulo: "Hogwarts Legacy",
    preco: 229.99,
    desconto: 10,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg",
    descricao:
      "Mergulhe no mundo bruxo de Hogwarts no século XIX. Crie seu próprio bruxo e descubra segredos mágicos.",
    categorias:[ "RPG", "Aventura", "Mundo Aberto"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/990080/ss_4.jpg",
    ],
  },
  {
    Anolancamento: 2015,
    id: 6,
    titulo: "The Witcher 3: Wild Hunt",
    preco: 89.99,
    desconto: 60,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
    descricao:
      "Acompanhe Geralt de Rívia em sua busca épica por Ciri. Combate envolvente, escolhas impactantes e um dos melhores RPGs já feitos.",
    categorias: ["RPG", "Ação", "Aventura"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/ss_4.jpg",
    ],
  },
  {
    id: 7,
    Anolancamento: 2018,
    titulo: "God of War",
    preco: 159.99,
    desconto: 25,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg",
    descricao:
      "Kratos retorna em uma jornada emocional com seu filho Atreus. Uma releitura nórdica da lenda do Deus da Guerra.",
    categorias: ["Ação", "Aventura", "RPG"],
    imagens: [
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_1.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_2.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_3.jpg",
      "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/ss_4.jpg",
    ],
  },
  {
    Anolancamento: 2023,
    id: 8,
    titulo: "FIFA 24",
    preco: 299.9,
    desconto: 15,
    imagem:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/header.jpg",
    descricao:
      "O mais recente simulador de futebol da EA Sports, com gráficos realistas e modo carreira renovado.",
    categorias: ["Esporte", "Competitivo", "Multiplayer"],
    imagens: [
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/05/fifa__ox232r.jpg",
    "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2C3C/production/_120642311_copyofmbappe_g5bop_final_lores_wm-25102260ed97e1249fb2.43646001.jpg.webp",
    "https://s2-ge.glbimg.com/fozc2NIGD-7avMcx81YMcx_KXyg=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Q/C/WKFf3HR7ugBjveQvV6ig/fifa-23-vini-jr.png",
    "https://images.immediate.co.uk/production/volatile/sites/3/2023/08/EA-FC-24-goalkeepers-e54054d.jpg?resize=1200%2C630",
    ],
  },
    
  ]
  // Exportando as categorias únicas dinamicamente
export const getCategoriasUnicas = () => {
  const allCategories = games.flatMap((jogo) => jogo.categorias);
  return [...new Set(allCategories)];
};

const OutrosJogos = ({jogosFiltrados = [], onAddCarrinho}) => {
  const { formatarMoeda } = useContext(GlobalContext);
  const navigate = useNavigate();

  // Função para navegar para a página do jogo
  const lidarCardClick = (jogo) => {
    navigate(`/jogospage/`, { state: jogo });
  };

  return (
    <div id="outrosJogos" className="container w-100 my-5">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>
      <div id="itensJogos" className="d-flex flex-column ms-md-5 ps-md-3 gap-4 ">
        {jogosFiltrados.length > 0 ?(
        jogosFiltrados.map((jogo) => (
          <GameCard
            key={jogo.id}
            id={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            precoFormatado={formatarMoeda(jogo.preco)}
            desconto={jogo.desconto}
            imagem={jogo.imagem}
            formatarMoeda={formatarMoeda}
            onAddCarrinho={() => onAddCarrinho(jogo)}
            onClick={() => lidarCardClick(jogo)}
          />
        ))) : (
          <p>Nenhum jogo encontrado</p>
        )}
      </div>
    </div>
  );
};



// Exportando os jogos para uso externo
export {games};
export default OutrosJogos;