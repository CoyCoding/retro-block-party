import React from 'react';
import ReactDOM from 'react-dom';
import FaqSection from './FaqSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FaqSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
