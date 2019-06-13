import React from 'react';
import ReactDOM from 'react-dom';
import {Schedule} from './Schedule';
import {handleScheduleStatus} from './Schedule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Schedule scheduleStatus={'open'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns TakingApplications on open',()=>{
  const comp = handleScheduleStatus('open');
  console.log(comp.type.name==='TakingApplications');
})


it('returns TakingApplications on open',()=>{
  const comp = handleScheduleStatus('offseason');
  console.log(comp.type.name ==='Offseason');
})
