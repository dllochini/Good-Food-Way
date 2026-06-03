import { useState } from 'react'
import './App.css'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 text-3xl text-blue-500">
      Tailwind is working 🚀
      <Login/>
      {/* <Button/> */}
    </div>
  )
}

export default App
