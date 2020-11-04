import { render, screen, cleanup } from '@testing-library/react';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import renderer from 'react-test-renderer';


afterEach(cleanup);


test('Renders Error page successfully', () => {

    render(<ErrorPage />);

    const errorPageTitle = screen.getByTestId('error-page-title');
    expect(errorPageTitle).toBeInTheDocument();
  
});

test('Error page matches snapshot', () => {
    const tree = renderer.create(<ErrorPage />).toJSON();
    expect(tree).toMatchSnapshot();
})