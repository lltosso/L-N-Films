import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>L&N Films</h1>
  <nav className='list'>   
  <ul>
    <li><a href="#">Por genero</a></li>
    <li><a href="#">Por actor</a></li>
    <li><a href="#">Por titulo</a></li>
    <li><a href="#">Mas populares</a></li>
  </ul>
</nav>
<footer>
  <ul>
  Politica de privacidad
  </ul>
  <ul>
    Nosotros
  </ul>
  <ul>
    Contacto
  </ul>
</footer>
    </>
  )
}

export default App
