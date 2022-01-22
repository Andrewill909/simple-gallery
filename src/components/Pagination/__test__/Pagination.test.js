import React from 'react';
import ReactDom from 'react-dom';
import Pagination from '../index';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

afterEach(cleanup);

it('Renders without crashing on correct props', () => {
  const div = document.createElement('div');
  ReactDom.render(<Pagination perPage={6} itemCount={0} setCurPage={() => {}} />, div);
});
