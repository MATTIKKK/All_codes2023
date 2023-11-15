import React from 'react'
import './justMessage.css'

type JustMessagePropsType = {
    value: string;
}

const JustMessage = (props: JustMessagePropsType) => {
  return (
    <div className='message'>{props.value}</div>
  )
}

export default JustMessage