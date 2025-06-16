import "./CardGallery.css"

function CardGallery({ picture }) {
    return (
        <div className="card_gallery">
            <div className={"card_gallery_image"}>
                <img src={picture.image} alt={picture.image}/>
            </div>
        </div>
    )
}

export default CardGallery;