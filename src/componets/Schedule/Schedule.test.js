import React from 'react';
import ReactDOM from 'react-dom';
import {Schedule} from './Schedule';
import {handleScheduleStatus} from './Schedule';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Schedule scheduleStatus={'open'} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('returns TakingApplications on takingApplications',()=>{
  const comp = handleScheduleStatus('takingApplications');
  console.log(comp)
  console.log(comp.type.name==='TakingApplications');
})


it('returns Offseason on offseason',()=>{
  const comp = handleScheduleStatus('offseason');
  console.log(comp.type.name ==='Offseason');
})
