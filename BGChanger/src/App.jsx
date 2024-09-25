import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
   <div className='w-full h-screen duration-500' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("Red")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor:"red"}}> 
            Red
          </button>

          <button onClick={() => setColor("Green")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor : "green"}}>
              Green 
          </button>

          <button onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
            style={{backgroundColor : "blue"}}>
              Blue 
          </button>

        </div>

      </div>

   </div>
  )
}

export default App
