import {albums} from "../../../data/albums.js";
import CardAlbum from "../Cards/CardAlbum/CardAlbum.jsx";
import {Link} from "react-router-dom";
import ButtonMore from "../Buttons/ButtonMore/ButtonMore.jsx";

function Album() {
    return (
        <div id={"album"}>
            <h1 className={"title_info"}>АЛЬБОМ</h1>
            <div>
                <div className={"album_view"}>
                    {albums.slice(0, 4).map((album, i) => (
                        <CardAlbum key={i} album={album} />
                    ))}
                </div>
                <Link to="/AlbumPage"><div><ButtonMore color={"#f03030"}/></div></Link>
            </div>
        </div>
    )
}

export default Album;