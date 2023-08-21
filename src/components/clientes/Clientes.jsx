import React from 'react'

function Clientes(props) {
  return (
    <div className='cliente'>
        <img className='imgDentista' src={props.image} alt="" />
        <p className='nomeDentista'>{props.nome}</p>
        <p className='horarioDentista'>{props.exp}</p>
    </div>
  )
}

export default Clientes