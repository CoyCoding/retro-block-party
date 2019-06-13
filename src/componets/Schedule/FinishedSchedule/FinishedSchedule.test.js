import React from 'react';
import ReactDOM from 'react-dom';
import FinishedSchedule from './FinishedSchedule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinishedSchedule />, div);
  ReactDOM.unmountComponentAtNode(div);
});
