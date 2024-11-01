import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Navbar from './Components/Navbar';
import News from './Components/News/News';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <News/>
    </>
  )
}

export default App
