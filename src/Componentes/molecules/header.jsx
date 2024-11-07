import './header.css'
import img from '../../assets/imagenes/main-logo-white.png'
function Header() {
  return (
    <header>
      <img src={img} alt="" />
      <nav className='list'>
        <ul>
          <li><a href="#">Por genero</a></li>
          <li><a href="#">Por actor</a></li>
          <li><a href="#">Por titulo</a></li>
          <li><a href="https://www.fotogramas.es/noticias-cine/g31936725/marvel-ranking-peliculas-vengadores/">Mas populares</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header