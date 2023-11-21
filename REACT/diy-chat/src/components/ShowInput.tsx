import React, { ChangeEvent, FormEvent, useState } from 'react'
import './showInput.css'
import { Button, Input } from '@material-ui/core';

type ShowInputPropsType = {
  handleSubmit: (value: string) => void;
}

const ShowInput = (props: ShowInputPropsType) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value.trim() !== ''){
      props.handleSubmit(value.trim());
      setValue('');
    }
    
  }

  return (
    <div className='showInput-container'>
        <hr />
        <form onSubmit={handleSubmit}>
          <Input className="input" type="text" value={value} onChange={handleChange} />
          <Button style={{color: "purple"}}>Send</Button>
        </form>
        
    </div>
  )
}

export default ShowInput