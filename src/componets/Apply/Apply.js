import React from 'react';
import './Apply.scss';
import ApplicationsOpen from './ApplicationsOpen/ApplicationsOpen';
import ApplicationsClosed from './ApplicationsClosed/ApplicationsClosed';

export function Apply(props) {
  return (
    <section id="applications">
      <div className="applications-wrapper">
      <h2>Applications {handleScheduleStatus(props.scheduleStatus)}</h2>
      </div>
    </section>
  );
}

export const handleScheduleStatus = (scheduleStatus) =>{
  switch(scheduleStatus){
    case 'takingApplications':
    return(
      <ApplicationsOpen />
    )
    default:
    return(
      <>default</>
    )
  }
}

export default Apply;
