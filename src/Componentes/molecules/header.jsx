import './header.css'
import img from '../../assets/imagenes/main-logo-white.png'
function Header() {
  return (
    <header>
      <img src={img} alt="" />
      <nav className='list'>
        <ul>
          <li><a href="#">Peliculas</a></li>
          <li><a href="#">Por actor</a></li>
          <li><a href="#">Por titulo</a></li>
          <li><a href="#">Mas populares</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header