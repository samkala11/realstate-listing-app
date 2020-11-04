import { render, screen, cleanup } from '@testing-library/react';
import PropertyQuery from '../components/SavedListings/PropertyQuery';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Renders PropertyQuery page successfully', () => {

    render(<PropertyQuery  
            mlsId={5990355}
        />);

    const propertyQueryContainer = screen.getByTestId('property-query-container');
    expect(propertyQueryContainer).toBeInTheDocument();
});

test('matches PropertyQuery page snapshot with given props', () => {
    const tree = renderer.create(<PropertyQuery 
            mlsId={5990355}
        />).toJSON();
    expect(tree).toMatchSnapshot();
})