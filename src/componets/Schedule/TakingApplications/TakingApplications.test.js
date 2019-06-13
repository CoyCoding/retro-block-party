import React from 'react';
import ReactDOM from 'react-dom';
import TakingApplications from './TakingApplications';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TakingApplications />, div);
  ReactDOM.unmountComponentAtNode(div);
});
