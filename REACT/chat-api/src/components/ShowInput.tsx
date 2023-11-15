import React, { ChangeEvent, FormEvent, useState } from 'react'
import './showInput.css'

type ShowInputPropsType = {
  handleSubmit: (value: string) => void;
}

const ShowInput = (props: ShowInputPropsType) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.handleSubmit(value);
    setValue('');
  }

  return (
    <div className='showInput-container'>
        <hr />
        <form onSubmit={handleSubmit}>
          <input className="input" type="text" value={value} onChange={handleChange} />
          <button>Send</button>
        </form>
        
    </div>
  )
}

export default ShowInput