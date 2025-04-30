import React, { createContext, useEffect, useState } from "react";

// Criação do contexto
export const CarrinhoContext = createContext();

// Componente Provider
export const CarrinhoProvider = ({ children }) => {
  const [carrinhoItem, setCarrinhoItem] = useState([]);

  // Salvar o carrinho no localStorage sempre que ele for atualizado
  useEffect(() => {
    localStorage.setItem("devcarrinho", JSON.stringify(carrinhoItem));
  }, [carrinhoItem]);

  // Carregar o carrinho do localStorage ao iniciar
  useEffect(() => {
    const salvaCarrinho = localStorage.getItem("devcarrinho");
    if (salvaCarrinho) {
      setCarrinhoItem(JSON.parse(salvaCarrinho));
    }
  }, []);

  // Função para adicionar um item ao carrinho
  const handleAddCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) => {
      const existe = itemAnterior.find((item) => item.id === produto.id);
      if (existe) {
        return itemAnterior.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        return [...itemAnterior, { ...produto, quantidade: 1 }];
      }
    });
  };

  // Função para remover um item do carrinho
  const handleRemoveCarrinho = (produto) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.filter((item) => item.id !== produto.id)
    );
  };

  // Função para atualizar a quantidade de um item no carrinho
  const handleUpdateCarrinho = (produto, novaQuantidade) => {
    setCarrinhoItem((itemAnterior) =>
      itemAnterior.map((item) =>
        item.id === produto.id
          ? { ...item, quantidade: novaQuantidade > 0 ? novaQuantidade : 1 }
          : item
      )
    );
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinhoItem,
        handleAddCarrinho,
        handleRemoveCarrinho,
        handleUpdateCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};