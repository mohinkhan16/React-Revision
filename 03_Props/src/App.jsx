import React from 'react'
import Card from './Components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Mohin Khan' age={20} img='https://images.unsplash.com/photo-1788977774507-ad72a7716dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
      <Card user='Prince Nandoliya' age={19} img='https://images.unsplash.com/photo-1790619526506-9f5efc8fa56d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
      <Card user='Ankit' age={20} img='https://plus.unsplash.com/premium_photo-1773173730543-2002ce3f54ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' />
    </div>
  )
}

export default App