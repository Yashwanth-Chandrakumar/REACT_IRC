import React from 'react'
import { increase, decrease } from '../Store/Action'
import {useDispatch,useSelector} from 'react-redux'

export default function ReduxCounter() {
    const dispatch = useDispatch()
    const count = useSelector((state)=>(state.count))
  return (
      <div>ReduxCounter
          <p>Count: { count}</p>
          <button onClick={()=>{dispatch(increase())}}>Incrase</button>
          <button onClick={()=>{dispatch(decrease())}}>Decrease</button>
    </div>
  )
}
