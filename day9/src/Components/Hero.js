import React from 'react'

export default function Hero(props) {
    if (props.hero === 'Joker') {
        throw new Error("Not a hero")
    }
  return (
      <div>{props.hero }</div>
  )
}
