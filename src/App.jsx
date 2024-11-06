import header from './Componentes/molecules/Header'
import './App.css'
import Button from './Componentes/atoms/Button'


function App() {
  

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
