import React from 'react'

const ChangeCounter = (props: any) => {
  return (
    <div>
        <button onClick={props.resetCount} disabled={props.isZero}>Reset</button>
        <button onClick={props.increaseCount} disabled={props.isMax}>Inc</button>
    </div>
  )
}

export default ChangeCounter