import React from 'react';
 
const ListingDetails = ({ listingDate, mlsId }) => {
    return(
        <div className="listing-details">
            { listingDate && <p className="date-listed"> Date listed <span className="date-display"> 
                {listingDate.slice(5,10).split('-').join('/')}/{listingDate.slice(0,4)} </span> </p> }
            <p className="mls-id"> mlsId <span className="mls-id-display"> {mlsId} </span> </p>
        </div>
    )
}

export default ListingDetails;