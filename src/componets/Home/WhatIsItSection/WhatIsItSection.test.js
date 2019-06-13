import React from 'react';
import ReactDOM from 'react-dom';
import WhatIsItSection from './WhatIsItSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhatIsItSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
