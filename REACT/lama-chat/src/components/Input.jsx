import React from 'react'
import AttachmentIcon from '@mui/icons-material/Attachment';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...'/>
        <div className="send">
            <AttachmentIcon className='icon'/>
            <input type="file" style={ {display: 'none'} } id="file"/>
            <label htmlFor="file">
                <AddPhotoAlternateIcon className='icon'/>
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input