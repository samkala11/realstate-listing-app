// import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

import SavedListings from '../components/SavedListings/SavedListings';

test('matches SavedListing snapshot with given props', () => {
    const tree = renderer.create(<SavedListings 
        />).toJSON();
    expect(tree).toMatchSnapshot();
})