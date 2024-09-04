const MarketplaceCard = ({car}) => {
    return(
        <div className="movie">
            <div>
                <p>{car.listing_price.formatted_amount}</p>
            </div>

            <div>
                <img src={car.primary_listing_photo.image.uri} alt={car.Title}/>
            </div>

            <div>
                <h3>{car.marketplace_listing_title}</h3>
            </div>
        </div>
    )
}

export default MarketplaceCard;