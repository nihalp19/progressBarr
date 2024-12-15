import React, { useState } from 'react'
import ProgressBar from './components/ProgressBar'
function App() {

  const [toogle,setToogle] = useState(false)

  return (
    <div>
      {toogle ? <ProgressBar/> : ""}
      <button onClick={() => setToogle(!toogle)} className='bg-black text-white px-2 py-2 rounded-md'>start</button>
    </div>
  )
}

export default App