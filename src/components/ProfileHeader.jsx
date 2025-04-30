import React from 'react'

const ProfileHeader = () => {
  return (
    <nav className="pt-4 w-100 navbar navbar-expand-md navbar-dark bg-dark">
      <div className='navbar-brand ms-4'> <span className='fs-3'>DEV STEAM </span></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center d-md-flex justify-content-md-between gap-5" id="navbarSupportedContent">
       <div role='button'>Opções de Pagamento</div>
       <div role='button'>Editar Perfil</div>

      </div>
      
         </nav>
  )
}

export default ProfileHeader