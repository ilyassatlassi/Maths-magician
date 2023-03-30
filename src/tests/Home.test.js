import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../component/pages/Home';
import '@testing-library/jest-dom/extend-expect';

test('Should render Home Component', () => {
  render(<Home />);
  const HomeElement = screen.getByTestId('home_page');
  expect(HomeElement).toBeInTheDocument();
  expect(HomeElement).toHaveTextContent('Welcome to our page!');
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
