# RealState Listings App

This project was built using create-react-app js and firebase as BaaS.

## Functionalties
* User can view all Property listings
* User can save a property listing
* User can view saved properties in saved listings page
* User can unsave a property listing
* User can go to Home, Property Listings and Saved Listings pages


## Installation

npm install

## Run app

npm start

## Run tests

npm run test


## Dependecies
* `react 17.0.1`
* `firebase 8.0.0`
* `material-ui library for UI styles`
  * `@material-ui/core: ^4.11.0`
  * `@material-ui/icons: ^4.9.1`
  * `@material-ui/lab: ^4.0.0-alpha.56`
* `jest for testing`




## Design Decisions
* Property component that takes {mlsId, photosArray, price, bedrooms, bathsFull,
     bathsHalf, stories, saveProperty, listingDate, saved, id} as props
* PropertyListings component that takes {fireStore} as props, and calls AJAX getAllListings and getSavedProperties from fireStore on componentDidMount
* SavedListings component that takes {fireStore} as props, and calls AJAX getSavedProperties from fireStore on componentDidMount, then passes mlsId and docId for each saved property to PropertyQuery component
* PropertyQuery component that takes {mlsId, docId, deleteListing} as props, and call AJAX getListing(mlsId) on ComponentDidMount, then passes propertyInfo to Property component
