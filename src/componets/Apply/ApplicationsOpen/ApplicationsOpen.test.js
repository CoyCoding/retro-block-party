import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationsOpen from './ApplicationsOpen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ApplicationsOpen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
