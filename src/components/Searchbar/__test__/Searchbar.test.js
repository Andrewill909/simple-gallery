import React from 'react';
import ReactDom from 'react-dom';
import Searchbar from '../index';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('Renders without crashing on correct props', () => {
  const div = document.createElement('div');
  ReactDom.render(<Searchbar setCustomTags={() => {}} isLoading={false} />, div);
});

it('Renders with disabled search button if isLoading is true', () => {
  render(<Searchbar setCustomTags={() => {}} isLoading={true} />);
  expect(screen.getByTestId('btn')).toBeDisabled();
});
