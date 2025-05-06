import React from 'react'
import OutrosJogos from './OutrosJogos.jsx'

const OutrosJogosContainer = (props) => {
  return (
    <div className='container-fluid bg-secondary w-50'>
        <OutrosJogos onAddCarrinho={props.onAddCarrinho} />
    </div>
  )
}

export default OutrosJogosContainer