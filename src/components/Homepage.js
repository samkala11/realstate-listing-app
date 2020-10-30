import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';


import { Button } from '@material-ui/core';


// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {

    firebase.initializeApp({
      apiKey: "AIzaSyAX1uTdQTvuj2NJIfPnxzr76smlBL6IlLU",
      authDomain: "project-sam5.firebaseapp.com",
      databaseURL: "https://project-sam5.firebaseio.com",
      projectId: "project-sam5",
      storageBucket: "project-sam5.appspot.com",
      messagingSenderId: "485971260822",
      appId: "1:485971260822:web:7c53421f33a09778a619b7",
      measurementId: "G-L47W9F94F1"
    });
}
const firestore = firebase.firestore();

const savePropertiesRef = firestore.collection('savedProperties');
const query = savePropertiesRef.orderBy('createdAt').limit(25);


const Home = () => {

    const [savedProperties] = useCollectionData(query, {idField: 'id'});
    console.log('saveProperties are');
    console.log(savedProperties);

    const saveProperty = async() => {
        await savePropertiesRef.add({
          mlsId: '4986',
          userId: 'ioahh',
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
      }
    
    useEffect(() => {
        
        saveProperty();
    
      }, [])

    return (
        <div className="Home">
                Home Component

                <Button color="primary">Hello World</Button>;

        </div>
    )
}

export default Home;