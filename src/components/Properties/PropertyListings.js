import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {getAllListings} from '../../utils/listings_api_util';
import Property from '../Property/Property';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';

const PropertyListings = ({fireStore}) => {
    // const savedPropertiesRef = fireStore.collection('savedProperties');
    let savedPropertiesRef ;
    var currentUserPropertiesQuery;

    if (fireStore) {
        savedPropertiesRef = fireStore.collection('savedProperties');
        // query saved properties for current user
        currentUserPropertiesQuery = savedPropertiesRef.where("userId", "==", localStorage.getItem('userId'));
    }
    
    console.log(`Root currentUserSavedProperties for user ${localStorage.getItem('userId')} are`);    
    const [listings, setListings] = useState([]);
    const [savedProperties, setSavedProperties] = useState([]);
    const [savedPropertiesIds, setSavedPropertiesIds] = useState([]);

    const [showNoListingsMessage, setShowNoListingsMessage] = useState(false);
    //ComponentDidMount
    useEffect(() => {
        console.log('useEffect here')
        if (listings.length  === 0) {
            getAllListings()
            .then(res => {
                console.log('Async All listings on Component did Mount')
                console.log(res);
                setListings(res);       
            })
            .catch(() => {
                console.log('CAnnot get the listings');
                setShowNoListingsMessage(true)

            })
        }

        getSavedProperties();

    }, [listings])


    const getSavedProperties = () => {

        currentUserPropertiesQuery.get().then( snapshot => {
            const savedPropertiesInfo = [];
            const docIds = {};
            console.log(snapshot.docs)
            snapshot.docs.forEach( (doc, ind) => {
                savedPropertiesInfo.push(doc.data().mlsId);
                console.log('adding saved properties mlsIds in Array')
                docIds[`${doc.data().mlsId}`] = doc.id;
            })
            setSavedProperties(savedPropertiesInfo);
            setSavedPropertiesIds(docIds);
        })
    }


    const deleteSavedListing = (id) => {
        // debugger;
        // console.log(`about to delete listing with listing id ${id}`)
        savedPropertiesRef.doc(id).delete().then(() => {
            // console.log('CALLING GET SAVED PROPERTIES AFTER DELETE')
            getSavedProperties()
        })    
    }


    const saveProperty = async(mlsId, saved, id) => {


        let savedPropertiesRef ;
        var savedPropertyQuery;
        
        if (fireStore) {

            savedPropertiesRef = fireStore.collection('savedProperties');
            savedPropertyQuery = savedPropertiesRef.where("userId", "==", localStorage.getItem('userId'));
        } 
        console.log('current user');
        console.log(localStorage.getItem('userId'))

        savedPropertyQuery.get().then( (snapShot) => {


            console.log('saving listing, printing snapshot docs array');
            console.log(snapShot.docs)


            if (!saved) {

                // check for saved property
                const docId = Math.random().toString(36).substr(2, 12);
                if (snapShot.docs.length === 0) {
                    console.log('snapshoy.docs is empty, about to save in db')
                    savedPropertiesRef.doc(docId).set({
                        mlsId: mlsId,
                        userId: localStorage.getItem('userId'),
                        createdAt: firebase.firestore.FieldValue.serverTimestamp()
                    })
                    .then(() => { 
                        setSavedProperties([mlsId]);
                        setSavedPropertiesIds({...savedPropertiesIds, [mlsId] : docId }) 
                     })
                } else {
                    const allSavedProperties = [];
                    snapShot.docs.forEach(doc => {
                        console.log('each doc data')
                        console.log(doc.data());
                        allSavedProperties.push(doc.data().mlsId)
                    })

                    console.log('all saved properties array');
                    console.log(allSavedProperties);

                    if (!allSavedProperties.includes(mlsId)) {
                        savedPropertiesRef.doc(docId).set({
                            mlsId: mlsId,
                            userId: localStorage.getItem('userId'),
                            createdAt: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        .then(() => { 
                            setSavedProperties([...savedProperties, mlsId]);
                            setSavedPropertiesIds({...savedPropertiesIds, [mlsId] : docId }) 
                        
                        } );
                    }
                } 

            } else {
                console.log('about to call delete Saved Listings')
                deleteSavedListing(id)
            }

        });

    }

    return (
        <div data-testid="property-listings-wrapper" className="property-listings">
           { showNoListingsMessage && listings.length === 0 && <div className="no-listings-message">  No Listings   </div>} 
            <div className="listings-container">

                { listings.map((listing, ind) =>   (
                    <Paper key={ind} data-testid="property-container" id="property-container" elevation={3}>
                        <Property
                            key = {listing.mlsId}
                            mlsId = {listing.mlsId} 
                            photosArray = {listing.photos}
                            price = {listing.listPrice}
                            bedrooms = {listing.property.bedrooms}
                            bathsFull = {listing.property.bathsFull}
                            bathsHalf = {listing.property.bathsHalf}
                            stories = {listing.property.stories}
                            listingDate = {listing.listDate}
                            saveProperty = {saveProperty}
                            saved ={savedProperties.includes(listing.mlsId)}
                            id = {savedPropertiesIds[`${listing.mlsId}`]}  
                        /> 
                    </Paper>
                ))}

            </div>
        </div>
    ) 
}

export default PropertyListings;