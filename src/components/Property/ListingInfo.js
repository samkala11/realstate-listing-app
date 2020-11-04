import React from 'react';
import { formulatePrice } from '../../utils/price';
 
const ListingInfo = ({ price, bedrooms, bathsFull, bathsHalf, stories }) => {
    return(
        <div className="listing-info">
            <p  data-testid = "listing-price" className="listing-price"> ${formulatePrice(price)} </p>
            { bedrooms && <p data-testid = "bedrooms-number" className="bedrooms-number">  {bedrooms} {bedrooms > 1 ? 'bds' : 'bd' } | </p> } 
            <p data-testid = "bath-number" className="bath-number" > {bathsFull + bathsHalf} ba | </p>
            <p data-testid = "stories-number" className="stories-number"> {stories} stories </p>
        </div>
    )
}

export default ListingInfo;