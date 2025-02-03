import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"


const Thehomelayout = () => {
  return (
    <div className="parent">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Thehomelayout