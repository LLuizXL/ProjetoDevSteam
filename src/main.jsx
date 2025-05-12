import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import Profile from "./pages/Profile.jsx";

import { formatarMoeda } from "./utils/formatters.js";
import PaymentOptions from "./pages/PaymentOptions.jsx";
import Dashboard from "./components/Dashboard.jsx";
import {CarrinhoProvider} from "./utils/CarrinhoContext.jsx";
import JogosPage from "./pages/JogosPage.jsx";

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/jogospage" element={<JogosPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/paymentoptions" element={<PaymentOptions />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
    </GlobalContext.Provider>
  </React.StrictMode>
);
