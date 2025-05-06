import React from 'react'
import OutrosJogos from './OutrosJogos.jsx'

const OutrosJogosContainer = (props) => {
  return (
    <div className="container-fluid outrosJogos col-12 col-lg-6">
        <OutrosJogos onAddCarrinho={props.onAddCarrinho} />
  </div>
  )
}

export default OutrosJogosContainer