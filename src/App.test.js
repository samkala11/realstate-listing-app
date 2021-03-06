import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('Renders home page', () => {

  render(<App />);
  const linkElement = screen.getAllByText(/Home/i);
  console.log(`link length ${linkElement.length}`);
  expect(linkElement.length).toBe(2);
  expect(linkElement[0]).toBeInTheDocument();

});

test('Navbar renders successfully and show 3 nav tabs', () => {
    render(<App />);

    const navbar = screen.getByTestId('nav-bar');
    expect(navbar).toBeInTheDocument();

    const homeTab = screen.getByTestId('home-tab');
    expect(homeTab).toBeInTheDocument();
    expect(homeTab).toHaveTextContent('Home')


    const listingsTab = screen.getByTestId('listings-tab');
    expect(listingsTab).toBeInTheDocument();
    expect(listingsTab).toHaveTextContent('Property Listings')


    const savedListingsTab = screen.getByTestId('saved-listings-tab');
    expect(savedListingsTab).toBeInTheDocument();
    expect(savedListingsTab).toHaveTextContent('Saved Listings')


})
