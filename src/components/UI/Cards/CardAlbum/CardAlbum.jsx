import "./CardAlbum.css";

function CardAlbum({ album }) {
    return (
        <div className={"card_album"}>
            <div className={"card_album_image"}>
                <img src={album.image} alt={album.name}/>
            </div>
            <div className={"card_album_info"}>
                <h2>{album.name}</h2>
                <p>{album.description}</p>
                <p>{album.tracks}</p>
            </div>
        </div>
    )
}

export default CardAlbum;