import React, { useContext } from "react";
import GameCard from "./GameCard";
import { useNavigate } from "react-router";
import { GlobalContext } from "../main";

const OutrosJogos = (props) => {
  const { formatarMoeda } = useContext(GlobalContext);
 const games = React.useMemo(
     () => [
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
           "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_1.jpg",
           "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_2.jpg",
           "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_3.jpg",
           "https://cdn.cloudflare.steamstatic.com/steam/apps/2195250/ss_4.jpg",
         ],
       },
     ],
     []
   );
   const navigate = useNavigate();
   const lidarCardClick = (jogo) => {
     navigate(`/jogospage/`,{state:jogo});//Navega para a página do jogo selecionado
   };
 

  return (
    <div id="outrosJogos" className="container w-100 my-5">
      <h2 className="text-uppercase text-center text-md-start ms-md-5 ps-md-3 mb-4">
        Outros Jogos
      </h2>   
      <div id="itensJogos" className="d-flex flex-column ms-md-5 ps-md-3 gap-4 ">
        {games.map((jogo) => (
          <GameCard key={jogo.id} id={jogo.id}
          
          titulo={jogo.titulo}
          preco={jogo.preco}
          precoFormatado={formatarMoeda(jogo.preco)}
          desconto={jogo.desconto}
          imagem={jogo.imagem}
          formatarMoeda={formatarMoeda} // Passando a função para o PromoCard
          onAddCarrinho={() => props.onAddCarrinho(jogo)}
          onClick={() => lidarCardClick(jogo)} />
        ))}
        
      </div>
    </div>
  );
};

export default OutrosJogos;

