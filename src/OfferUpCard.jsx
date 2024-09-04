import React from 'react';

const OfferUpCard = ({car}) => {
    return(
        <div className="movie">
            <div>
                <p>{car.price}</p>
            </div>

            <div>
                <img src={car.image.url} alt={car.Title}/>
            </div>

            <div>
                <h3>{car.title}</h3>
            </div>
        </div>
    )
}

export default OfferUpCard;
