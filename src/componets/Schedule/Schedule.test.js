import React from 'react';
import ReactDOM from 'react-dom';
import Schedule from './Schedule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Schedule scheduleStatus={'open'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
