import {albums} from "../data/albums.js";
import CardAlbum from "../components/UI/Cards/CardAlbum/CardAlbum.jsx";
import React, { useEffect } from "react";

function AlbumPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div id={"album"}>
                <h1 className={"title_info"}>АЛЬБОМ</h1>
                <div>
                    <div className={"album_view"}>
                        {albums.map((album, i) => (
                            <CardAlbum key={i} album={album} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlbumPage;