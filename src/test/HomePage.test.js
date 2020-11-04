import { render, screen, cleanup } from '@testing-library/react';
import HomePage from '../components/HomePage/HomePage';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test('Renders Home page successfully', () => {
    render(<HomePage />);
    const homePageTitle = screen.getByTestId('home-page-title');

    expect(homePageTitle).toBeInTheDocument();
    expect(homePageTitle).toHaveTextContent('Home')
  
});

test('Home page matches snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
})