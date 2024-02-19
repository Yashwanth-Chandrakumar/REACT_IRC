import React from 'react'

export default function PropPass(props) {
  return (
      <div><h1>{props.name}</h1>
          <h3>{props.time}</h3>
    </div>
  )
}
