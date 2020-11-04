import React, {useEffect, useState} from 'react';
import Property from '../Property/Property';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';


import { getListing } from '../../utils/listings_api_util';

const PropertyQuery = ({mlsId, docId, deleteListing}) => {

    const [listingInfo, setListingInfo] = useState(null);

    window.listingInfoStateQuery = listingInfo;

    useEffect(() => {
        getListing(mlsId)
        .then(res => {
            console.log('async get 1 listing');
            console.log(res);
            setListingInfo(res);
        })

    }, [mlsId])
    

    return(
        <>

            {listingInfo ? 
            <Paper data-testid="property-query-container" id="property-container" elevation={3}>
                <Property
                    key = { listingInfo.mlsId }
                    mlsId = {listingInfo.mlsId } 
                    photosArray = {listingInfo ? listingInfo.photos : []}
                    price = {listingInfo.listPrice}
                    bedrooms = { listingInfo && listingInfo.property ? listingInfo.property.bedrooms : null}
                    bathsFull = { listingInfo && listingInfo.property ? listingInfo.property.bathsFull : null}
                    bathsHalf = {  listingInfo && listingInfo.property ? listingInfo.property.bathsHalf : null}
                    stories = {listingInfo && listingInfo.property ? listingInfo.property.stories : null}
                    listingDate = {listingInfo.listDate}
                    saveProperty = {deleteListing}
                    saved ={true}
                    id ={docId}
                    
                />  
            </Paper> :
            <div data-testid="property-query-container">   
                <Skeleton variant="rect" width={350} height={280} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
            </div>
}


        </>
    )
}

export default PropertyQuery;