import React from 'react';
 
const ListingDetails = ({ listingDate, mlsId }) => {
    return(
        <div data-testid="listing-details" className="listing-details">
            { listingDate && <p data-testid="date-listed" className="date-listed"> Date listed <span className="date-display"> 
                {listingDate.slice(5,10).split('-').join('/')}/{listingDate.slice(0,4)} </span> </p> }
            <p data-testid="mls-id" className="mls-id"> mlsId <span className="mls-id-display"> {mlsId} </span> </p>
        </div>
    )
}

export default ListingDetails;