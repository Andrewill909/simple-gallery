import React from 'react';
import ReactDom from 'react-dom';
import ImageCard from '../index';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

let img = {
  published: '2022-01-21T04:47:50Z',
  title: 'test',
  author: 'subj1',
  photo: 'ex1',
  tags: [],
};

afterEach(cleanup);

it('Renders without crashing on correct props', () => {
  const div = document.createElement('div');
  ReactDom.render(<ImageCard img={img} />, div);
});

it('Renders ImageCard date correctly', () => {
  render(<ImageCard img={img} />);
  let date = new Date(img.published);
  let dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  expect(screen.getByTestId('date')).toHaveTextContent(dateStr);
});

it('Renders ImageCard with maximum tags length equal to 4', () => {
  render(<ImageCard img={{ ...img, tags: ['a', 'b', 'c', 'd', 'e'] }} />);
  expect(screen.getAllByTestId('tag')).toHaveLength(4);
});
