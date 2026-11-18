import React, { useState } from 'react'

const App = () => {
  const [num,Setnum]=useState(10)

  const btnCliick=()=>{
    Setnum(prev=>(prev+1))
        // Setnum(prev=>(prev+5))
        //     Setnum(prev=>(prev+1))
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnCliick}>click</button>
    </div>
  )
}

export default App
