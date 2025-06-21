import {gallery} from "../../../data/gallery.js";
import CardGallery from "../Cards/CardGallery/CardGallery.jsx";
import {Link} from "react-router-dom";
import ButtonMore from "../Buttons/ButtonMore/ButtonMore.jsx";

function Gallery() {
    return (
        <div id={"gallery"}>
            <h1 className={"title_info"}>ГАЛЕРЕЯ</h1>
            <div className={"gallery_review"}>
                {gallery.slice(0, 8).map((picture, i) => (
                    <CardGallery key={i} picture={picture} />
                ))}
            </div>
            <Link to="/GalleryPage"><ButtonMore color={"red"}/></Link>
        </div>
    )
}

export default Gallery;