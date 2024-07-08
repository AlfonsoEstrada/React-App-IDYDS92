import Ofertas from "./HomeComponents/Ofertas"
import Novedades from "./HomeComponents/Novedades"
import Slider from "./HomeComponents/Slider"
import Navbar from "../Navbar"


export default function Home() {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Ofertas/>
            <Novedades/>
        </div>

    )
}