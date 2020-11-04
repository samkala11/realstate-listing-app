import React, {useState, useEffect} from 'react';
import 'firebase/firestore';
import PropertyQuery from './PropertyQuery';

const SavedListings = ({fireStore}) => {
    let savedPropertiesRef;
    var currentUserPropertiesQuery;
    if (fireStore) {

        savedPropertiesRef = fireStore.collection('savedProperties');
        currentUserPropertiesQuery = savedPropertiesRef.where("userId", "==", localStorage.getItem('userId'));
    }
    const [savedProperties, setSavedProperties] = useState([]);
    window.savedPropertiesState = savedProperties;

    useEffect(() => {
        getSavedProperties();
    }, [])

    const deleteSavedListing = (a, b, id) => {
        savedPropertiesRef.doc(id).delete().then(() => {getSavedProperties()})    
    }

    const getSavedProperties = () => {

        currentUserPropertiesQuery.get().then( snapshot => {
            const savedPropertiesArr = [];
            snapshot.docs.forEach( (doc, ind) => {
                savedPropertiesArr.push(doc.data())
                console.log('adding saved properties in Array')
                savedPropertiesArr[ind]['id'] = doc.id;
                console.log(doc.id)
            })
            setSavedProperties(savedPropertiesArr)
        })
    }


    return (
        <div className="saved-listings">
            <div className="saved-listing-container">
            
            { savedProperties && savedProperties.map(savedProperty => (
                <div key={savedProperty.mlsId}> 
                    {/* <Button  id="delete-button" onClick={() => {
                        deleteSavedListing(savedProperty.id)
                    }}> x </Button> */}
                    <PropertyQuery 
                        mlsId={savedProperty.mlsId}
                        docId = {savedProperty.id}
                        deleteListing = {deleteSavedListing}
                    />

                </div>
            ))}
            </div>

        </div>
    ) 
}

export default SavedListings;