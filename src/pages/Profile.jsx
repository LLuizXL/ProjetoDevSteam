import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import ProfileHeader from "../components/ProfileHeader";
const Profile = () => {

  const [imgPerfil, setImgPerfil] = useState("");
  const [usuario, setUsuario] = useState({
      nome: "",
      email: "",
      pfp: "",
      nickname: "",
      phonenumber: "",
    });
    const navigate = useNavigate();
    
    useEffect(() => {
        const salvaUsuario = localStorage.getItem("devlogin");
        if (salvaUsuario) {
            const userData = JSON.parse(salvaUsuario);
            setUsuario(userData);
            setImgPerfil(userData.pfp || "");
        }
    }, []);
    
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = () => {
                setImgPerfil(reader.result); // Atualiza a imagem de perfil com a URL base64
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleDragOver = (e) => {
        e.preventDefault(); // Permite o drop
    };
    
    const UpdateInfo = (e) => {
        const { name, value } = e.target;
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            [name]: value,
        }));
    };
    
    const handleSave = () => {
        const updatedUser = {...usuario, pfp: imgPerfil};
        localStorage.setItem("devlogin", JSON.stringify(updatedUser));
        alert("Perfil atualizado com sucesso!");
        navigate("/");
    };
    
    return (
        <div>

            <ProfileHeader />
        <div className="mt-5">
      <div className="container  p-5  rounded-1">
        <div className=" d-flex flex-column gap-3">
          <div
            id="fotoPerfil"
            className=" text-light container w-100 d-flex justify-content-start align-items-center gap-5 mb-5 p-2"
            >
            <img
              src={
                imgPerfil ||
                `https://ui-avatars.com/api/?name=${usuario.nome}&background=2b87ae&color=fff`
              }
              className="object-fit-cover rounded-1"
              style={{
                  height: "100px",
                  width: "100px",
                }}
                ></img>
            <div id='basicInfo' className=" d-none d-md-block ">
              <span className="fs-2">{usuario.nickname}</span>
            </div>
            <div className="text-secondary-subtle">Editar Perfil</div>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            id="dragImg"
            className="text-center p-5 display-6 mx-md-2"
            style={{
                border: "2px dashed #fff",
                cursor: "pointer",
            }}
            >
            <bi className="bi bi-upload me-3 me-md-3"></bi>
            Arraste e solte sua foto <b>aqui</b>
          </div>
            <hr className="my-5" />

          <form onSubmit={handleSave} className="mx-0 mx-md-3 form">
            <div className="mb-4">
              <label className='' htmlFor="nickname">Nickname</label>
              <input className="form-control rounded-0  text-light border-0"
              name="nickname"
              value={usuario.nickname}
              onChange={UpdateInfo}>
              </input>
            </div>

            <div className="mb-4">
              <label htmlFor="nome">Nome</label>
              <input
                className="form-control rounded-0  border-0 text-light"
                name="nome"
                value={usuario.nome}
                onChange={UpdateInfo}
                ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="email">E-mail</label>
              <input className="form-control rounded-0 border-0  text-light"
              name="email"
              value={usuario.email}
              onChange={UpdateInfo}></input>
            </div>

            <div className="mb-4">
              <label htmlFor="">Telefone</label>
              <input className="form-control rounded-0  border-0 text-light" 
              name="phonenumber"
              value={usuario.phonenumber}
              onChange={UpdateInfo}></input>
            </div>

            <div className="mt-4 d-flex flex-row justify-content-center">
              <button className=" btn btn-info me-1" 
              onClick={handleSave}>Salvar</button>
              <button className=" ms-1 btn btn-light"> Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
              </div>
  );
};

export default Profile;
