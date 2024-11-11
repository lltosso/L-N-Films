import Header from "../Componentes/molecules/Header"
import Footer from "../Componentes/Footer/Footer"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout