import {albums} from "../../../data/albums.js";
import CardAlbum from "../Cards/CardAlbum/CardAlbum.jsx";
import {Link} from "react-router-dom";
import ButtonMore from "../Buttons/ButtonMore/ButtonMore.jsx";
import {artists} from "../../../data/artists.js";
import CardArtist from "../Cards/CardArtist/CardArtist.jsx";

function Info() {
    return (
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
    )
}

export default Info;