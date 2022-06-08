import React from 'react'
import Confetti from 'react-confetti'
import './confetti.scss'


const Confettis = () => {
  return (
    <Confetti
      className="confetti"
      width="360px"
      height="420px"
      recycle={false}
    />
    
  )
}

export default Confettis
