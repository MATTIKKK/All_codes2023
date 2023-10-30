import React, { useState } from 'react'
import './profileInfo.css'

const ProfileInfo = () => {
  const [surname, setSurname] = useState("Matova");
  const [name, setName] = useState("Amina");
  const [email, setEmail] = useState("aminamatova@gmail.com");
  const [phone, setPhone] = useState("83423423423");
  const [relationship, setRelationship] = useState("single");

  return (
    <div className="profileInfo">
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" className="profileImg" />        
      <form onSubmit={(e) => {e.preventDefault()}} className='form'>
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)}/>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)}/>
        <select name="relationships" id="relationships" onChange={e => setRelationship(e.target.value)}>
          <option value="single">Single</option>
          <option value="in relationship">In Relationship</option>
          <option value="married">Married</option>
          <option value="engaged">Engaged</option>
        </select>
        <input type="submit" className='button' />
      </form>
    </div>
  )
}

export default ProfileInfo