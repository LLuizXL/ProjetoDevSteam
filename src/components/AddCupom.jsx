import React from 'react'

const AddCupom = () => {
  return (
    <div className='container'>
        <span>Cadastro de Cupons</span>
        <div className='w-75 rounded-3 bg-secondary p-2 px-3 '>
            <div className='d-flex flex-row mx-2 justify-content-between'>
                <div>
                    Cupons Ativos:
                    <div className='container bg-light text-dark mt-3'>
                        DEVMASTER1234
                    </div>

                    <div className='container bg-light text-dark mt-3'>
                        DEVMASTER1234
                    </div>

                    <div className='container bg-light text-dark mt-3'>
                        DEVMASTER1234
                    </div>
                </div>
                <div>
                    Adicionar Cupom
                </div>
                
            </div>
          
        </div>
    </div>
  )
}

export default AddCupom