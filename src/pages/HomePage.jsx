import {artists} from "../data/artists.js";
import CardArtist from "../components/UI/Cards/CardArtist/CardArtist.jsx";
import {albums} from "../data/albums.js";
import CardAlbum from "../components/UI/Cards/CardAlbum/CardAlbum.jsx";
import ButtonMore from "../components/UI/Buttons/ButtonMore/ButtonMore.jsx";
import Player from "../components/UI/Layout/Player.jsx";
import {gallery} from "../data/gallery.js";
import CardGallery from "../components/UI/Cards/CardGallery/CardGallery.jsx";
// import React, {useEffect} from "react";
import "../index.css";
import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/UI/Layout/Header.jsx";
import Biography from "../components/UI/Layout/Biography.jsx";
import Info from "../components/UI/Layout/Info.jsx";
import Album from "../components/UI/Layout/Album.jsx";

function HomePage() {
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);

    return (
        <>
            <Header />
            <Biography />
            <Info />
            <Album />



            <div id={"listen"}>
                <h1 className={"title_info"}>ПОСЛУШАТЬ МОЖНО ЗДЕСЬ</h1>
                <Player />
            </div>

            <div id={"gallery"}>
                <h1 className={"title_info"}>ГАЛЕРЕЯ</h1>
                <div className={"gallery_review"}>
                    {gallery.slice(0, 8).map((picture, i) => (
                        <CardGallery key={i} picture={picture} />
                    ))}
                    </div>
                   <Link to="/GalleryPage"><ButtonMore color={"red"}/></Link>
            </div>
        </>
    )
}

export default HomePage;