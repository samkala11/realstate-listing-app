import { cleanup } from '@testing-library/react';
import PropertyListings from '../components/Properties/PropertyListings';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Property listins page matches snapshot', () => {
    const tree = renderer.create(<PropertyListings />).toJSON();
    expect(tree).toMatchSnapshot();
})