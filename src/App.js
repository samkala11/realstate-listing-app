import React, {useEffect} from 'react';
import { Route, Switch , BrowserRouter} from 'react-router-dom';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import NavBar from './components/NavBar/NavBar';
import Home from './components/HomePage/HomePage';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PropertyListings from './components/Properties/PropertyListings';
import SavedListings from './components/SavedListings/SavedListings';


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

function App() {

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      localStorage.setItem('userId', Math.random().toString(36).substr(2, 10));
    }
  }, [])
 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/listings"
            component={() => <PropertyListings fireStore={firestore} />}
          />
          <Route exact path="/saved-listings" 
            component={() => <SavedListings fireStore={firestore} />}
          />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
