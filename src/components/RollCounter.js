import React from 'react'
import './rollCounter.scss'

const RollCounter = (props) => {
  return (
    <div>
    <h2 className="heading">Number of Rolls</h2>
    <h3 className="count">{props.countOfRolls}</h3>
    </div>
  )
}

export default RollCounter