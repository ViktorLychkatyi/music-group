import "./CardArtist.css";

function CardArtist({ artist }) {
    return (
        <div className="card_artist">
            <div className="card_artist_image">
                <img src={artist.image} alt={artist.name} />
            </div>
            <div className={"card_artist_info"}>
                <h2>{artist.name}</h2>
                <p>{artist.description}</p>
            </div>
        </div>
    );
}

export default CardArtist;