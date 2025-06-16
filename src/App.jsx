import React from 'react'
import './App.css'
import {artists} from "./data/artists.js";
import CardArtist from "./components/UI/Cards/CardArtist/CardArtist.jsx";
import CardAlbum from "./components/UI/Cards/CardAlbum/CardAlbum.jsx";
import {albums} from "./data/albums.js";
import ButtonMore from "./components/UI/Buttons/ButtonMore/ButtonMore.jsx";
import CardGallery from "./components/UI/Cards/CardGallery/CardGallery.jsx";
import {gallery} from "./data/gallery.js";
import Player from "./components/UI/Player/Player.jsx";

function App() {
  return (
    <>
        <div id={"header"}>
            <div className={"picture_title"}><img src="../public/img/ab6761610000e5ebab47d8dae2b24f5afe7f9d38.jpeg" alt=""/></div>
            <div className={"logo_title"}><img src="../public/img/Imagine_Dragons_2021_logo%201.svg" alt=""/></div>
        </div>

        <div id={"biography"}>
           <div className={"picture_biography"}><img src="../public/img/Imagine-Dragons.jpg" alt=""/></div>
            <h1 className={"title_info"}>БИОГРАФИЯ</h1>
            <p className={"info_width"}>Imagine Dragons — американская рок-группа из Лас-Вегаса, основанная в 2008 году. Мировую славу коллектив приобрёл после выхода сингла "It's Time", а затем альбома "Night Visions" (2012), в который вошёл мегахит "Radioactive". Их музыка — это синтез альтернативного рока, попа и электронной энергии, подкреплённый искренними текстами и мощной подачей.</p>
        </div>

        <div id={"info"}>
            <h1 className={"title_info"}>КТО МЫ?</h1>
            <div>
                <div className={"gallery_view"}>
                {artists.map((artist, i) => (
                    <CardArtist key={i} artist={artist} />
                ))}
                    <p>Каждый участник — это личность с уникальным вкладом в общее звучание. Вместе они — Imagine Dragons.</p>
                </div>
            </div>
        </div>

        <div id={"album"}>
            <h1 className={"title_info"}>АЛЬБОМ</h1>
            <div>
                <div className={"album_view"}>
                    {albums.map((album, i) => (
                        <CardAlbum key={i} album={album} />
                    ))}
                </div>
                <div><ButtonMore /></div>
            </div>
        </div>

        <div id={"listen"}>
            <h1 className={"title_info"}>ПОСЛУШАТЬ МОЖНО ЗДЕСЬ</h1>
            <Player />
        </div>

        <div id={"album"}>
            <h1 className={"title_info"}>ГАЛЕРЕЯ</h1>
            <div className={"gallery_review"}>
                {gallery.map((picture, i) => (
                    <CardGallery key={i} picture={picture} />
                ))}
            </div>
            <div><ButtonMore /></div>
        </div>
    </>
  )
}

export default App
