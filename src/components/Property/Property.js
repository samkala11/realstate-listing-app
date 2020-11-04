import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ListingInfo from './ListingInfo';
import ListingDetails from './ListingDetails';

const Property = ({mlsId, photosArray, price, bedrooms, bathsFull,
     bathsHalf, stories, saveProperty, listingDate, saved, id}) => {

    return( <div data-testid="property-listing-container" className="property-listing">
                
        <button
            onClick={() => saveProperty(mlsId, saved, id)} 
            id="save-button-id" className="save-button"
        >
            { saved ? <FavoriteIcon/> : <FavoriteBorderIcon/>  }
        </button>
            
        { photosArray && <img className="property-image" alt="listing" src={photosArray[0]}/> }

        <ListingInfo
            price = {price}
            bedrooms = {bedrooms}
            bathsFull = {bathsFull}
            bathsHalf = {bathsHalf}
            stories = {stories}     
        />

        <ListingDetails 
            listingDate = {listingDate}
            mlsId = {mlsId} 
        />
   
    </div>
    )
}

export default Property;