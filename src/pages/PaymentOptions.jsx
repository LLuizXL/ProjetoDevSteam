import React, { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import Cards from "../components/Cards";

const PaymentOptions = () => {

  const [cartao, setCartao] = useState({
    cardNum: "",
    cardCVV: "",
    cardDate: "",
  })



  const [savedCards, setSavedCards] = useState([])

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("devlogin"))
    if(usuario && usuario.cartoes) {
      setSavedCards(usuario.cartoes);
    }


    
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCartao((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSavCard = (e) => {
  e.preventDefault();
  if (cartao.cardNum && cartao.cardCVV && cartao.cardDate){
    const usuario = JSON.parse(localStorage.getItem("devlogin"))
    const newCards = [...(usuario.cartoes || []), cartao]
    const updateUsuario = {...usuario, cartoes: newCards }


    localStorage.setItem("devlogin", JSON.stringify(updateUsuario));
    setSavedCards(newCards);
    setCartao( {cardNum: "", cvv: "", cardDate: ""});
    alert("Cartão adicionado com êxito.")
  }
}

  return (
    <div>
      <ProfileHeader />

      <div className="container mt-md-5 ">
        <span className="fs-5 fw-medium text-uppercase">Adicionar Opção de Pagamento</span>
        <div className=" p-3  rounded-2 py-3 w-100 my-1 bg-gradient border-black border">
          <form action="">
            <div className="d-flex flex-md-row flex-column">

              <div className="mb-3 d-flex flex-column">
                <label htmlFor="" className="form-label">
                  Numero do cartão
                </label>
                <input
                value={cartao.cardNum}
                  type=""
                  name="cardNum"
                  className=" w-75"
                  onChange={handleInputChange}
                ></input>
              </div>
             
                
              <div className="d-flex flex-column w-25">
                <label className="form-label">
                  <small className="">CVV</small>
                </label>
                <input className="w-50"
                value={cartao.cardCVV}
                onChange={handleInputChange}
                name="cardCVV"
                ></input>
              </div>

              <div className="d-flex flex-column">
                  <label className=" form-label">
                    <small> Data Validade</small>
                  </label>
                  <input className="w-50"
                value={cartao.cardDate}
                name="cardDate"
                onChange={handleInputChange}></input>
              
                  
                
              </div>
            </div>
                    <div className="buttonsSaveCancel d-flex flex-row justify-content-center gap-3 my-3 my-md-0">
                  <button id='addCarrinho' className="btn btn-small btn-success" onClick={handleSavCard}>
                    <small> Salvar</small>
                  </button>
                  <button id='' className="btn btn-small btn-light">
                    <small> Cancelar</small>
                  </button>
                    </div>
          </form>
        </div>
      </div>
      <h3 className="text-center my-2">Cartões Salvos:</h3>
      <div className="container my-5 d-flex flex-md-row flex-column gap-5 align-items-center align-items-md-start">
      {savedCards.length > 0 ? (
    savedCards.map((cartao, index) => (
      <Cards
        key={index}
        index={index + 1}
        cardNum={`**** **** **** ${cartao.cardNum.slice(-4)}`}
        cardCVV={cartao.cardCVV}
        cardDate={cartao.cardDate}
      />
    ))
  ) : (
    <p className="text-center">Nenhum cartão salvo.</p>
  )}
      </div>
      
    </div>
  );
};

export default PaymentOptions;
