import { render, screen, cleanup } from '@testing-library/react';
import Property from '../components/Property/Property';
import renderer from 'react-test-renderer';

afterEach(cleanup);


test('Renders Property page successfully', () => {

    render(<Property  
            price={937477}
            mlsId={5990355}
            bedrooms = {3}
            bathsFull = {4}
            bathsHalf={2}
            stories={2}
            listingDate={'1994-10-25T13:58:17.284009Z'}
            saved={true}
        />);

    const propertyListingContainer = screen.getByTestId('property-listing-container');
    expect(propertyListingContainer).toBeInTheDocument();
});


test('Shows property info correctly', () => {

    render(<Property  
        price={937477}
        mlsId={5990355}
        bedrooms = {3}
        bathsFull = {4}
        bathsHalf={2}
        stories={2}
        listingDate={'1994-10-25T13:58:17.284009Z'}
        saved={true}
    />);

    const listingPrice = screen.getByTestId('listing-price');
    expect(listingPrice).toHaveTextContent('$937,477');
    
    const bedroomsNumber = screen.getByTestId('bedrooms-number');
    expect( bedroomsNumber).toHaveTextContent('3');
    
    const bathNumber = screen.getByTestId('bath-number');
    expect( bathNumber).toHaveTextContent('6');
    
    const storiesNumber = screen.getByTestId('stories-number');
    expect( storiesNumber).toHaveTextContent('2');

});



test('matches Property snapshot with given props', () => {
    const tree = renderer.create(<Property 
            price={937477}
            mlsId={5990355}
            bedrooms = {3}
            bathsFull = {4}
            bathsHalf={2}
            stories={2}
            listingDate={'1994-10-25T13:58:17.284009Z'}
            saved={true}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})