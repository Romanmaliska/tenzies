import React from 'react'
import Confetti from 'react-confetti'
import './confetti.scss'


const Confettis = (props) => {
  return (
    <div className="confetti">
    <Confetti
      width="360px"
      height="380px"
      run={props.isGameFinished}
      recycle={false}
    />
    </div>
  )
}

export default Confettis
