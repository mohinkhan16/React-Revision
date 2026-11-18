import React from 'react'

const App = () => {

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("From submited");
    
  }
  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} >
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
