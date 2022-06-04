import React from 'react'
import Confetti from 'react-confetti'


const Confettis = (props) => {
  return (
   <Confetti
      width="360px"
      height="380px"
      run={props.isGameFinished}
      recycle={false}
    />
  )
}

export default Confettis
