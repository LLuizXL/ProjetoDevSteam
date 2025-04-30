import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
    <div className="container mt-5">
      <div className="container w-100 p-5 bg-secondary rounded-1">
        <div className=" d-flex flex-column gap-3">
          <div
            id="fotoPerfil"
            className=" text-dark container w-100 d-flex justify-content-start align-items-center gap-5 mb-5 p-2  rounded-1 bg-primary-subtle"
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
            <div className="basicInfo d-none d-md-block">
              <span> Nome:</span> <span>Email: </span>
            </div>
            <div className="text-secondary">Editar Perfil</div>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="text-center p-5 display-6 ms-md-5"
            style={{
              border: "2px dashed #fff",
              cursor: "pointer",
            }}
          >
            <bi className="bi bi-upload me-3 me-md-3"></bi>
            Arraste e solte sua foto <b>aqui</b>
          </div>

          <form onSubmit={handleSave} className="ms-0 ms-md-5">
            <div className="mb-4">
              <label htmlFor="nickname">Nickname</label>
              <input className="form-control"
              name="nickname"
              value={usuario.nickname}
              onChange={UpdateInfo}>
              </input>
            </div>

            <div className="mb-4">
              <label htmlFor="nome">Nome</label>
              <input
                className="form-control"
                name="nome"
                value={usuario.nome}
                onChange={UpdateInfo}
              ></input>
            </div>

            <div className="mb-4">
              <label htmlFor="email">E-mail</label>
              <input className="form-control"
              name="email"
              value={usuario.email}
              onChange={UpdateInfo}></input>
            </div>

            <div className="mb-4">
              <label htmlFor="">Telefone</label>
              <input className="form-control" 
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
  );
};

export default Profile;
