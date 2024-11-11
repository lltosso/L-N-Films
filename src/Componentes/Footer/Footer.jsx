import './footer.css'
import img from '../../assets/imagenes/tiktok.png'
import img1 from '../../assets/imagenes/instagram.png'
import img2 from '../../assets/imagenes/facebook.png'
import img3 from '../../assets/imagenes/twitter.png'
function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div >
                    <ul>
                        <li><a href="">Politica de privacidad</a></li>
                        <li><a href="">Nosotros</a></li>
                        <li><a href="">Contacto</a></li>

                    </ul>
                    <div className='network'>
                        <p>Siguenos</p>

                        <img src={img} alt="" />
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>

                </div>
            </div>


        </footer>
    )
}

export default Footer