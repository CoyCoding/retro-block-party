import React from 'react';
import ReactDOM from 'react-dom';
import Offseason from './Offseason';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Offseason />, div);
  ReactDOM.unmountComponentAtNode(div);
});
