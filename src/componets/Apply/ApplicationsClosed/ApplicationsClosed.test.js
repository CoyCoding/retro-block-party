import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationsClosed from './ApplicationsClosed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationsClosed />, div);
  ReactDOM.unmountComponentAtNode(div);
});
