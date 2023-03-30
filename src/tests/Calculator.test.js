import React from 'react';
import renderer from 'react-test-renderer';
import MathsMagician from '../component/pages/Calculator';

describe('Calculator Component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<MathsMagician />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
