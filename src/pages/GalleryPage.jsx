import {gallery} from "../data/gallery.js";
import CardGallery from "../components/UI/Cards/CardGallery/CardGallery.jsx";
import React, { useEffect } from "react";

function GalleryPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div id={"album"}>
                <h1 className={"title_info"}>ГАЛЕРЕЯ</h1>
                <div className={"gallery_review"}>
                    {gallery.map((picture, i) => (
                        <CardGallery key={i} picture={picture} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GalleryPage;