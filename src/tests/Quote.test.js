import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../component/pages/Quote';
import '@testing-library/jest-dom/extend-expect';

test('Should render Quotes Component', () => {
    render(<Quote />);
    const HomeElement = screen.getByTestId('Quote');
    expect(HomeElement).toBeInTheDocument();
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});