import Player from "../components/UI/Layout/Player.jsx";
import Header from "../components/UI/Layout/Header.jsx";
import Biography from "../components/UI/Layout/Biography.jsx";
import Info from "../components/UI/Layout/Info.jsx";
import Album from "../components/UI/Layout/Album.jsx";
import Gallery from "../components/UI/Layout/Gallery.jsx";
import "../index.css";
import "../App.css";

function HomePage() {
    return (
        <>
            <Header />
            <Biography />
            <Info />
            <Album />
            <Player />
            <Gallery />
        </>
    )
}

export default HomePage;