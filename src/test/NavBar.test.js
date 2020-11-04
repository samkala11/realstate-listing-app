import { render, screen, cleanup } from '@testing-library/react';
import NavBar from '../components/NavBar/NavBar';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Renders NavBar page successfully', () => {

    render(<NavBar />);
    const navBarTitle = screen.getByTestId('nav-bar');
    expect(navBarTitle).toBeInTheDocument();
  
});

test('NavBar page show all 3 tabs successfully', () => {

    render(<NavBar />);
    const homeTab = screen.getByTestId('home-tab');
    expect(homeTab).toBeInTheDocument();
    expect(homeTab).toHaveTextContent('Home')

    const listingsTab = screen.getByTestId('listings-tab');
    expect(listingsTab).toBeInTheDocument();
    expect(listingsTab).toHaveTextContent('Property Listings')

    const savedListingsTab = screen.getByTestId('saved-listings-tab');
    expect(savedListingsTab).toBeInTheDocument();
    expect(savedListingsTab).toHaveTextContent('Saved Listings')
  
});

test('NavBar page matches snapshot', () => {
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
})