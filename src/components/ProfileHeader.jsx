import React from 'react'
import { Link } from 'react-router'

const ProfileHeader = () => {
  return (
    <nav className="pt-4 w-100 navbar navbar-expand-md navbar-dark bg-dark">
      <div className='navbar-brand ms-4'> <span className='fs-3'><Link to={"/"} className='text-decoration-none text-light'> DEVSTEAM </Link> </span></div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse text-center d-md-flex justify-content-md-around gap-2" id="navbarSupportedContent">
      <div role='button' id='basicInfo' className=''> <Link to={'/perfil'} className='text-decoration-none text-light ' > Editar Perfil</Link>
      </div>

       <div role='button' id='basicInfo' className=''> <Link to={'/paymentOptions'} className='text-decoration-none text-light' > Opções de Pagamento</Link>
       </div>
       

      </div>
      
         </nav>
  )
}

export default ProfileHeader