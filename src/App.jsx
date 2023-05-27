import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import CustomTable from './CustomTable'
import Cards from './Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='px-10 py-2 space-y-4 bg-black'>
        <Navbar />
        <Cards />
        <CustomTable />
      </div>
    </>
  )
}

export default App
