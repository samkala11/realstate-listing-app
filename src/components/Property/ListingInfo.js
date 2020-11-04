import React from 'react';
import { formulatePrice } from '../../utils/price';
 
const ListingInfo = ({ price, bedrooms, bathsFull, bathsHalf, stories }) => {
    return(
        <div className="listing-info">
            <p  data-testid = "listing-price" className="listing-price"> ${formulatePrice(price)} </p>
            { bedrooms && <p className="bedrooms-number">  {bedrooms} {bedrooms > 1 ? 'bds' : 'bd' } | </p> } 
            <p className="bath-number" > {bathsFull + bathsHalf} ba | </p>
            <p className="stories-number"> {stories} stories </p>
        </div>
    )
}

export default ListingInfo;