import React from 'react'
import ShowInput from './ShowInput'
import './showMessages.css';
import JustMessage from './JustMessage';

type ShowMessagesPropsType = {
  handleSubmit: (value: string) => void;
  messages: string[];
}

const ShowMessages = (props: ShowMessagesPropsType) => {
  const newMessages = props.messages.map(m => {
    return <JustMessage value={m}/>;
  })

  return (
    <div>
        <h1 className='showMessages-title'>ShowMessages</h1>
        <hr color='F5F5F5'/>
        <div className='messages'>
          {newMessages}
        </div>
        
        <ShowInput handleSubmit={props.handleSubmit}/> 
    </div>
  )
}

export default ShowMessages