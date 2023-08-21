import React from 'react'
function Dentistas(props) {
  return (
    <div className='dentista'>
        <img className='imgDentista' src={props.image} alt="" />
        <p className='nomeDentista'>{props.nome}</p>
        <p className='horarioDentista'>{props.horario}</p>
    </div>
  )
}

export default Dentistas