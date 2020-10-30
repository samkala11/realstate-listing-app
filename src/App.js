import React, {useEffect} from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

import NavBar from './components/NavBar';
import Home from './components/Homepage';
import ErrorPage from './components/ErrorPage';
import PropertyListings from './components/PropertyListings';
import savedListings from './components/savedListings';


// // Initialize Cloud Firestore through Firebase
// if (!firebase.apps.length) {

//   firebase.initializeApp({
//     apiKey: "AIzaSyAX1uTdQTvuj2NJIfPnxzr76smlBL6IlLU",
//     authDomain: "project-sam5.firebaseapp.com",
//     databaseURL: "https://project-sam5.firebaseio.com",
//     projectId: "project-sam5",
//     storageBucket: "project-sam5.appspot.com",
//     messagingSenderId: "485971260822",
//     appId: "1:485971260822:web:7c53421f33a09778a619b7",
//     measurementId: "G-L47W9F94F1"
//   });

// }

// const firestore = firebase.firestore();

// const savePropertiesRef = firestore.collection('savedProperties');
// const query = savePropertiesRef.orderBy('createdAt').limit(25);



function App() {

  // const [savedProperties] = useCollectionData(query, {idField: 'id'});
  // console.log('saveProperties are');
  // console.log(savedProperties);

  // const saveProperty = async() => {
  //   await savePropertiesRef.add({
  //     mlsId: '49',
  //     userId: 'jahdhgf',
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp()
  //   })
  // }

  // useEffect(() => {
    
  //   saveProperty();

  // }, [])
 
  return (
    <div className="App">

      <NavBar/>
      <HashRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/listings" component={PropertyListings} />
          <Route exact path="/saved-listings" component={savedListings} />
          <Route component={ErrorPage} />

        </Switch>
      </HashRouter>

    </div>
  );
}

export default App;
