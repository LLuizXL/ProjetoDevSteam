import { useContext } from "react";
import { CarrinhoContext } from "./utils/CarrinhoContext";


import "./App.css";

import Header from "./components/Header";
import Promotion from "./components/Promotion";
import CarrinhoOffCanvas from "./components/CarrinhoOffCanvas";
import OutrosJogos from "./components/OutrosJogos";

function App() {
  const {
    carrinhoItem,
    handleAddCarrinho,
    handleRemoveCarrinho,
    handleUpdateCarrinho,
  } = useContext(CarrinhoContext);


  return (
    <>
      <Header contadorJogos={carrinhoItem.length} />
      <Promotion
        onAddCarrinho={handleAddCarrinho} //adicionando o click para promoção
      />

      <CarrinhoOffCanvas
        onRemoveCarrinho={handleRemoveCarrinho}
        onUpdateCarrinho={handleUpdateCarrinho}
        carrinhoItem={carrinhoItem}
      />
      <OutrosJogos />
    </>
  );
}

export default App;
