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
    const [showNoSavedProperties, setShowNoSavedProperties] = useState(false)
    window.savedPropertiesState = savedProperties;

    useEffect(() => {
        getSavedProperties();

        let timeId = setTimeout(() => setShowNoSavedProperties(true), 500);

        return () => { clearTimeout(timeId) }

    }, [])

    const deleteSavedListing = (a, b, id) => {
        savedPropertiesRef.doc(id).delete().then(() => {getSavedProperties()})    
    }

    const getSavedProperties = () => {

        currentUserPropertiesQuery.get()
        .then( snapshot => {
            const savedPropertiesArr = [];
            snapshot.docs.forEach( (doc, ind) => {
                savedPropertiesArr.push(doc.data())
                console.log('adding saved properties in Array')
                savedPropertiesArr[ind]['id'] = doc.id;
                console.log(doc.id)
            })
            setSavedProperties(savedPropertiesArr)
        })
        .catch(() => {
            console.log('CAnnot get saved listings');
            setShowNoSavedProperties(true)
        })
    }


    return (
        <div className="saved-listings">
            <div className="saved-listing-container">
            
            { savedProperties.length > 0 ? savedProperties.map(savedProperty => (
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
            ))   :
                <div className="no-saved-properties"> { showNoSavedProperties && <span> No Saved Properties </span>} </div>
            
            }
            </div>

        </div>
    ) 
}

export default SavedListings;