import React, { useState } from 'react'

const App = () => {
const [name,Setname]= useState('');

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("From submited by",name);
    Setname('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='Enter your name'
        value={name}
        onChange={(e)=>{Setname(e.target.value)}} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
